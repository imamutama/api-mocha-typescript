API Test Automation is mocha framework to perform API testing using supertest TypeScript library.

## Requirements:

[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

## Getting Started:

Install the dependencies

```bash
npm install
```

API Sources

```
https://reqres.in/api

```

Run tests and Generate Report

```bash
npm test  [folder tests/specs/.*ts]
```
Running on demand action 
```
- Choose Actions 
- Run Workflow
- Input Tag Scenario
1. get-api.spec.ts
2. post-api.spec.ts

```
## Key Features:

    - Supertest library
    - Mochawesome Report
    - Custom types implementation
    - Mocha framework to organize tests
    - Maintain confidential info like token using dotenv library

## Folder structure:

```
├───.vscode
|    └───settings.json
├───tests
|    ├───config
|    ├───helper
|    ├───resources
|    ├───specs
     └───types
└───file

├───.env
├───.env.example
├───.gitignore
├───package-lock.json
├───package.json
├───README.md
└───tsconfig.json
```
