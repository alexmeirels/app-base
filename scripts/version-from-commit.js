const fs = require('fs');
const path = require('path');

const commitMessage = process.argv.slice(2).join(' ').trim();

const parseCommitType = message => {
  const firstLine = message.split('\n')[0] || '';
  const match = firstLine.match(/^([a-z]+)(\([^)]+\))?(!)?:\s.+$/i);

  if (!match) {
    return null;
  }

  return {
    type: match[1].toLowerCase(),
    isBreakingByBang: Boolean(match[3]),
    hasBreakingBody: /BREAKING CHANGE:/i.test(message),
  };
};

const getBumpType = parsed => {
  if (!parsed) {
    return null;
  }

  if (parsed.isBreakingByBang || parsed.hasBreakingBody) {
    return 'major';
  }

  if (parsed.type === 'feat') {
    return 'minor';
  }

  if (['fix', 'perf', 'refactor'].includes(parsed.type)) {
    return 'patch';
  }

  if (['docs', 'test', 'style', 'chore', 'build', 'ci'].includes(parsed.type)) {
    return 'none';
  }

  return null;
};

const bumpVersion = (version, bumpType) => {
  const [majorRaw, minorRaw, patchRaw] = version.split('.');
  const major = Number(majorRaw);
  const minor = Number(minorRaw);
  const patch = Number(patchRaw);

  if ([major, minor, patch].some(Number.isNaN)) {
    throw new Error(`Invalid semantic version: ${version}`);
  }

  if (bumpType === 'major') {
    return `${major + 1}.0.0`;
  }

  if (bumpType === 'minor') {
    return `${major}.${minor + 1}.0`;
  }

  if (bumpType === 'patch') {
    return `${major}.${minor}.${patch + 1}`;
  }

  return version;
};

const readJson = filePath => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeJson = (filePath, data) =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

if (!commitMessage) {
  console.error(
    'Missing commit message. Use: npm run version:bump -- "type(scope): description"',
  );
  process.exit(1);
}

const parsed = parseCommitType(commitMessage);
const bumpType = getBumpType(parsed);

if (!parsed || !bumpType) {
  console.error(
    'Invalid or unsupported commit message format. Expected Conventional Commits.',
  );
  process.exit(1);
}

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const appJsonPath = path.resolve(process.cwd(), 'app.json');

const packageJson = readJson(packageJsonPath);
const appJson = readJson(appJsonPath);

const currentVersion = packageJson.version;
const nextVersion = bumpVersion(currentVersion, bumpType);

packageJson.version = nextVersion;
appJson.version = nextVersion;

writeJson(packageJsonPath, packageJson);
writeJson(appJsonPath, appJson);

console.log(`Commit type: ${parsed.type}`);
console.log(`Bump: ${bumpType}`);
console.log(`Version: ${currentVersion} -> ${nextVersion}`);
