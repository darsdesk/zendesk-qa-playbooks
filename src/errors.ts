/**
 * Custom error classes for zendesk-qa-playbooks.
 */

/**
 * Base error class for all ZendeskQaPlaybooks errors.
 */
export class ZendeskQaPlaybooksError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "ZENDESKQAPLAYBOOKS_ERROR") {
    super(message);
    this.name = "ZendeskQaPlaybooksError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends ZendeskQaPlaybooksError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends ZendeskQaPlaybooksError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends ZendeskQaPlaybooksError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
