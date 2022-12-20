# Snake using Design Principles

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=coverage)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=bugs)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=last-mille-112022_snake-solid-ts&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=last-mille-112022_snake-solid-ts)

## Game Description

Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. It became the standard pre-loaded game on Nokia phones in 1998.

The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult. The user controls the direction of the snake's head (up, down, left, or right), and the snake's body follows.

![Snake Game](./docs/snake-game.gif)

## Prerequisites

For the realization of the project we need to have the following knowledge:

- HTML, CSS, JS y TS
- NodeJS Ecosystem
- OOP and its principles
- Jest and Unit Test
- Design Principles (SOLID, KISS, DRY and YAGNI)
- Ship, Show, Ask Branching Model
- Kanban Methodology
- Pair programming techniques

## Tech Stack

This projects use the following tech stack:

- Develop: NodeJS >= 16.x.x with ESM and TypeScript 4.8
- Unit test: Jest 29.3
- Code formating: Editor Config
- Sourcode: Git and Github platform
- CI/CD: Github actions
- Code Quality
  - SonarCloud
  - Eslint following `XO` rules
  - Git hooks: Husky
  - CommitLint

## Starting with the game

1. Clone the repository and open it with VSCode or yout own IDE

   > git clone git@github.com:last-mille-112022/snake-solid-ts.git

2. If you are using VSCode, install the project recommended extensions
3. Install dependencies
   > npm i
4. Test the repo watching changes
   > npm test
5. Run the game
   > npm start
6. Lint the project
   > npm run lint

## Style Guide

The project follows the [`XO`](https://github.com/xojs/xo) style guide as base, updating some rules like `consistent-type-definitions` as we want to use both `interface` and `types` into our project.

More specific rules are available on [eslint config file](.eslintrc.cjs). Eslint only supports CJS modules and the project is using ESM, that the reason its file extension is `.cjs`

The project has git hooks installed. It validates the project style guide before updateing the code into the repository.

- _Before Commit phase_: It validates the lint rules and the commit message. The projects uses [`Conventional commit`](https://www.conventionalcommits.org/en/v1.0.0/) as commit message format.
- _Before Pushing phase_: It execute the project test to validate everything is okey

**Code formating** is provided by `Editor Config` and its [config file](.editorconfig)

Unit test is mandatory and should always be arround 100% of coverage. It is highly recommended to develop using TDD methodology

### Branching Model

The project use the [Ship, Show, Ask](https://martinfowler.com/articles/ship-show-ask.html) Branching model. Under this model we have 3 types of changes into our code:

- _Ship_: Minor changes that doesn't need validation. The developer push the code directly into main branch
- _Show_ : Changes that doesn't need validation but the developer wants to show its team mates. A PR should be open from a feature or fix branch and automatically merged into main branch
- _Ask_: Changes that needs a review or discussion. A PR is opened and assigned to some team mate to its validation

The developer is who decides what kind of changes is doing.

When developer decides its changes are a SHIP, it should commit and push into main branch directly without any branch creation.

Otherwise, the developer should create a branch with the following naming:

- `feature/**` when it is a new feature into the project
- `fix/**` when the change fixes some existing feature

After developing a SHOW or an ASK, the changes should be merged into the main branch as a `Pull Request`.

if the changes are just SHOW, the branch should be automátically merged after the CI/CD has passed,
else the pull request must be created with **reviewers**

## Code Quality

The project has some tools configured in order to report posible code quality problems and follow the same guidelines and formatting.

### SonarCloud

The project is connected with SonarCloud scanner in order to make clean code analisys.
After new code is created, the CI/CD triggers a new SonarCloud scanner for the new code and it should pass the whole quality gates stablished:

- 0 bugs
- no new code smells
- 100% of unit test coverage
- no security issues
- no code duplications

The developer is responsible of code quality

### Eslint

The projects has eslint configured to analyse the code following the `XO` styleguide and `TypeScript`

### Commitlint

The project uses `Commitlint` to follow the commit message conventions. We use [`Conventional Commit`](https://www.conventionalcommits.org/en/v1.0.0/) for the commit message.

Currently there are not component validation on the message. Here we have a list of example components:

- UI
- CI/CD
- Quality
- Snake
- Game
- Logging
- Score

### CI/CD

There is a Github pipeline registered into the remote repository. The pipeline is triggered when `main` branch changes or a new `Pull Request` is created.

The pipeline has the following steps:

- Install
- Build
- Lint
- Unit test
- Sonar Scan

if the pipeline fails, the developer must fix the problems before starting new features

The pipeline definition is into the [build.yml](./.github/workflows/build.yml) file

## Methodology

We are going to use Kanban Agile Methodology. Its goal is to close the tasks as fast as possible.

The idea is that we assign the tasks that are in the columns starting from the right to the left and selecting the top tasks as the highest priority.

An example flow of the methodólogy

![Kanban Flow](./docs/kanban-in-action.gif)

More info about [Kanban](https://kanbanize.com/kanban-resources/getting-started/what-is-kanban)

### RoadMap

- Main game creation (v1)
- Food, Rotten food and Mines (v1)
- Save games (v1)
- Reports (Console, JSON, YAML) (v1)
- Other platform and UI render engines (v1)
- Real Time playing (v2)

### Teams

_Core Team_: Responsible for the core part of the game. This means: Snake, Moves, Game Loop and Start and game over.

_Items Team_: It is in charge of the different extra elements with which our snake interacts. Food, Score, mines

_Operations Team_: It takes care of the rest of the game operations. Menu control, save games and report generation.

### Project Board

We can see the project board of version 1 in:

[Kanban Board](https://github.com/orgs/last-mille-112022/projects/2/views/1)

## Delivery

We have two main sprints. After class of January 10 we will invert the team responsabilities, Example Team core will be team operations and so on.

The first version will be presented on January 17 in a production environment.
