<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

<h1 align="center">NestJS Clean Architecture Example</h1>

<div align="center">
<a href="https://github.com/wesleey/nest-clean-architecture/blob/HEAD/LICENSE" target="blank"><img alt="license" src="https://img.shields.io/github/license/wesleey/nest-clean-architecture" /></a>
</div>

# Introduction

Clean Architecture is a software design pattern that separates the code into multiple concentric circles of responsibility, where the innermost circle contains the business logic and the outermost circle contains the delivery mechanism. This structure helps to ensure that the code is maintainable, testable, and scalable over time.

# Folders Structure

The following is a typical folder structure for implementing Clean Architecture in a NestJS application:

```
.
├── + core
│   ├── + base
│   │   ├── - entity.ts
│   │   ├── - mapper.ts
│   │   ├── - repository.ts
│   │   └── - use-case.ts
│   │
│   ├── + domain
│   │   ├── + entities
│   │   └── + mappers
│   │
│   └── + repositories
│
├── + infra
│   ├── + data
│   └── + framework
│
├── + shared
│   └── + dtos
│
└── + use-cases
```

- `core`: contains the business logic of the application, such as entities, use cases, and interfaces.

- `infra`: contains the implementation of the interfaces defined in the core, such as data sources and services.

- `shared`: contains code that can be shared between multiple modules, such as models and DTOs.

- `use-cases`: contains the implementation of the use cases defined in the core, such as controllers and middleware.

## Core Folder

The `core` folder contains the core logic of the application, such as entities, use cases, and interfaces. It should have no knowledge of the delivery mechanism, such as the HTTP API or the database.

### Entities

Entities are the objects that represent the business domain, such as user, product, or order. They should be defined in a plain TypeScript class, with properties and methods that match the business requirements.

### Use Cases

Use cases are the actions that can be performed in the application, such as creating a user, retrieving a product, or processing an order. They should be defined as interfaces, with a clear definition of the inputs and outputs.

### Repositories

Repositories are the contracts that define the expected behavior of the delivery mechanism. They must be defined in the core, without implementation details.

## Infra Folder

The `infra` folder contains the implementation of the interfaces defined in the core, such as data sources and services. It should have no knowledge of the business logic.

### Data Sources

Data sources are the objects that access the data storage, such as a database or a REST API. They should implement the interfaces defined in the core, with the specific implementation details.

## Shared Folder

The `shared` folder contains code that can be shared between multiple modules, such as models and DTOs. It should have no knowledge of the business logic or the delivery mechanism.

### DTOs

DTOs are the objects that represent the data transfer between different layers of the application, such as a user DTO or a product DTO. They should be defined in a plain TypeScript class, with properties and methods that match the data requirements.

## Use-Cases Folder

The `use-cases` folder contains the implementation of the use cases defined in the core, such as controllers and middleware. It should have no knowledge of the business logic.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

This project is licensed under the terms of the [MIT license](https://github.com/wesleey/nest-clean-architecture/blob/HEAD/LICENSE).
