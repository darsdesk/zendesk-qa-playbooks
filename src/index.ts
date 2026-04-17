/**
 * zendesk-qa-playbooks
 * Generate consistent Zendesk email replies and QA checklists from reusable playbook templates.
 */

export { ZendeskQaPlaybooks } from "./yamljson-playbook-format-for-r";
export type { ZendeskQaPlaybooksOptions, ZendeskQaPlaybooksResult } from "./types";
export { ZendeskQaPlaybooksError, ConfigurationError, ValidationError } from "./errors";
