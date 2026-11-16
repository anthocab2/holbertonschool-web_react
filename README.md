# Holberton School — Web React

Holberton School web development coursework. This repository currently covers **TypeScript**: typing, object-oriented programming, DOM manipulation, and code organization.

## Contents

| Module | Topics | Documentation |
| --- | --- | --- |
| [TypeScript](./TypeScript/) | Interfaces, classes, functions, advanced types, ambient declarations, and namespaces | [Module README](./TypeScript/README.md) |

Each task directory is a separate compilation unit. Assignments 0–11 are grouped into `task_0` through `task_5`:

- `task_0`: Students and a DOM table
- `task_1`: Teachers, directors, and classes
- `task_2`: Employees, type predicates, and literal types
- `task_3`: Type declarations for a CRUD library
- `task_4`: Namespaces and declaration merging
- `task_5`: Credits using nominal types

## Technologies

TypeScript, JavaScript, HTML, DOM API, Node.js, npm, Webpack, and ESLint.

## Getting started

Requires Git, Node.js, and npm. The recorded local validation used Node.js **24.19.0** and npm **11.6.2**.

```sh
git clone https://github.com/anthocab2/holbertonschool-web_react.git
cd holbertonschool-web_react/TypeScript/task_0
npm ci
npx tsc --noEmit -p tsconfig.json
npm run build
npm run start-dev
```

Open [localhost:8080](http://localhost:8080) to view the student table, or open `dist/index.html` after the build.

Install dependencies **inside each task directory**, not at the repository root. The same general workflow applies to `task_1`, `task_2`, `task_3`, and `task_5`. Use `npm ci` to honor the lockfile and run one dev server at a time because they share port 8080.

`task_4` supports `npm ci`, `npm run typecheck`, and `npm run build` with TypeScript 4.9.5 and its local namespace compiler. See the [TypeScript module README](./TypeScript/README.md).

## Status and validation

Local validation included type checking, Webpack builds, linting, and seven behavior/type-contract checks. Recorded results and tool versions appear in the [module documentation](./TypeScript/README.md).

Assignment 9 required a `package.json` that was not provided in the received instructions. `task_4` therefore includes a minimal local configuration and lockfile; they are **not claimed as official files**. The reviewed scope is assignments 0–11. Local validation does not replace Holberton's private checker.

Maintained by [anthocab2](https://github.com/anthocab2).
