# zendesk-qa-playbooks

Generate consistent Zendesk email replies and QA checklists from reusable playbook templates.

## Installation

```bash
npm install zendesk-qa-playbooks
```

## Quick Start

```typescript
import { ZendeskQaPlaybooks } from "zendesk-qa-playbooks";

const instance = new ZendeskQaPlaybooks();
const result = await instance.run();
console.log(result);
```

## Features

- YAML/JSON playbook format for reply templates and QA criteria
- Rule-based routing by ticket tags, language, and intent
- Export to Zendesk macros plus printable QA checklists

## API Reference

### `ZendeskQaPlaybooks`

#### Constructor

```typescript
new ZendeskQaPlaybooks(options?: ZendeskQaPlaybooksOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<ZendeskQaPlaybooksResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
