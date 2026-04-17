/**
 * Configuration options for ZendeskQaPlaybooks.
 */
export interface ZendeskQaPlaybooksOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: YAML/JSON playbook format for reply templates and QA criteria
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Rule-based routing by ticket tags, language, and intent
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Export to Zendesk macros plus printable QA checklists
   */
  feature3?: Record<string, unknown>;
}

/**
 * Result returned by ZendeskQaPlaybooks operations.
 */
export interface ZendeskQaPlaybooksResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
