import { formatDate } from '../src/utils/formatDate';

describe('formatDate', () => {
  it('formats dates using pt-BR locale', () => {
    const date = new Date('2026-04-04T12:00:00.000Z');

    expect(formatDate(date)).toBe('04/04/2026');
  });
});
