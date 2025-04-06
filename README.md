# JPetStore - Cypress - TypeScript[![Cypress Tests](https://github.com/MateoAgudGarcia/jpetstore-cypress-typescript/actions/workflows/cypress-deployment.yml/badge.svg)](https://github.com/MateoAgudGarcia/jpetstore-cypress-typescript/actions/workflows/cypress-deployment.yml)

This repository contains a Proof of Concept (PoC) for automated testing of the [JPetStore](https://petstore.octoperf.com/actions/Catalog.action) application using Cypress with TypeScript.

## Test Scenarios

The tests demonstrate automated navigation through the JPetStore e-commerce platform, simulating user interactions such as:

- Browsing different pet categories (Birds, Fish, Dogs, etc.)
- Adding pets to shopping cart
- Completing purchase workflows
- Validating product details and prices

## Technical Stack

- Node.js: v22.x
- Cypress: v14.x

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Git

### Installation

1. Clone the repository:

```bash
git clone git@github.com:MateoAgudGarcia/jpetstore-cypress-typescript.git
```

2. Install dependencies:

```bash
npm install
```

### Running Tests

To execute the tests:

```bash
npm run cypress:open  # Opens Cypress in interactive mode
npm run cypress:run  # Runs Cypress tests in headless mode
```

## Test Reports

After test execution, an HTML report is automatically generated using Cypress's built-in reporting capabilities. The report includes:

- Test execution results
- Screenshots of failures
- Test execution time
- Step-by-step execution details

You can view the latest test reports at our [GitHub Pages site](https://MateoAgudGarcia.github.io/jpetstore-cypress-typescript).

## Project Structure

```
├── cypress/
│   ├── e2e/            # Test files
│   │   └── tests/      # Test suites
│   ├── fixtures/       # Test data
│   ├── pages/          # Page objects
│   ├── support/        # Support files and commands
│   └── types/          # TypeScript type definitions
├── package.json
├── cypress.config.ts
└── tsconfig.json
```
