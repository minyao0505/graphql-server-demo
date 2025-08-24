# GraphQL Server Demo

A demonstration GraphQL server built with Apollo Server and TypeScript, showcasing a simple e-commerce-like schema with users, products, and transactions.

## Purpose

This project serves as a learning and demonstration tool for:

- Building GraphQL servers with Apollo Server
- Implementing modular schema design patterns
- Working with TypeScript in GraphQL applications
- Understanding GraphQL concepts like queries, mutations, and schema stitching
- Demonstrating code generation workflows (see `codegen` branch)

## Features

- **User Management**: Create users and query user information
- **Product Catalog**: Create products, query products by ID or status
- **Transaction System**: Create transactions linking users and products

## Schema Overview

The GraphQL schema includes:

- **User**: User management with name and contact information
- **Product**: Product catalog with pricing and seller information
- **Transaction**: Transaction records linking buyers, sellers, and products

## How to Use

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:minyao0505/graphql-server-demo.git
   cd graphql-server-demo
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Running the Server

1. Start the development server:

   ```bash
   pnpm start
   ```

2. Open your browser and navigate to `http://localhost:8000` to access Apollo Studio

### Example Queries

**Query Products:**

```graphql
query {
  getProducts(status: ACTIVE) {
    result {
      id
      name
      price
      seller {
        name
      }
    }
  }
}
```

**Create a Product:**

```graphql
mutation {
  createProduct(input: { name: "Laptop", price: 999.99, sellerId: "1" }) {
    id
    name
    price
  }
}
```

## Development Scripts

- `pnpm start` - Start the development server with hot reload
- `pnpm build` - Build the TypeScript project
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## Learning

This repository includes a hands-on learning session designed to help you practice GraphQL concepts through exercises.

### Learning Session: GraphQL Schema Design & Implementation

#### 📚 How to Start the Learning Session

1. **Switch to the learning branch:**

```bash
git checkout learn-01
```

2. **Follow the exercises:**
   The `learn-01` branch contains incomplete schema files and resolver implementations with TODO comments and exercises for you to complete.

3. **Check your work:**
   When you're ready to see the solutions or if you get stuck, switch to the `main` branch:

```bash
git checkout main
```

#### 💡 Learning Tips

- Start the server (`pnpm start`) and use Apollo Studio to test your queries
- Don't peek at the answers in `main` until you've tried the exercises!

#### 🔄 Learning Flow

1. `git checkout learn-01` - Start with exercises
2. Complete the TODOs and fix the issues
3. Test your implementation with the GraphQL playground
4. `git checkout main` - Compare with the complete solution
5. `git checkout learn-01` - Continue with more exercises

**Ready to learn?** Switch to the `learn-01` branch and start coding!

## Code Generation

For an example of GraphQL code generation workflows and automated type generation, check out the **`codegen`** branch:

  ```bash
  git checkout codegen
  ```

The `codegen` branch demonstrates:

- Automatic TypeScript type generation from GraphQL schemas
- Resolver type safety
- Code generation configuration and workflows

## Project Structure

```text
src/
├── index.ts              # Server entry point
├── types.ts              # Shared TypeScript types
├── data/                 # Mock data and data access layer
├── schema/
│   ├── base/            # Base schema definitions
│   ├── user/            # User-related schema and resolvers
│   ├── product/         # Product-related schema and resolvers
│   └── transaction/     # Transaction-related schema and resolvers
```

## Development Scripts

- `pnpm start` - Start the development server with codegen
- `pnpm codegen` - Generate GraphQL codegen types
- `pnpm start:codegen` - Watch for changes and re-generate types

## Contributing

This is a demo project, but feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational and demonstration purposes.
