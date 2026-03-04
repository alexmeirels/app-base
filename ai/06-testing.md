# Testing

## Test types
- Unit tests: Jest.
- E2E tests: Detox (when configured in the project).

## Rules
- Hooks and utility functions should have unit test coverage when they contain logic.
- Critical authentication and navigation flows should have automated test scenarios.
- If a high-risk change is identified, you must notify the user before finishing:
  - Explain why the change is high risk.
  - Ask whether the user wants an end-to-end test to be created for that flow.
- Whenever a new HTTP request is created (by the user or by the agent), create a unit test with Jest for that request logic.
- If a required Jest unit test for a request is missing and implementation was not explicitly requested:
  - Notify the user.
  - Explain why the test is necessary.
  - Ask whether the user wants the unit test to be implemented.
