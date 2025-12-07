# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




**Assessment questions and answers
**
 1. What is NPM?

NPM stands for Node Package Manager.

It is like an app store for JavaScript code.

When building web apps, some of the tools listed below are needed:

* React
* Vite
* Tailwind CSS
* Axios
* ESLint

NPM lets you download, install, update, and manage all these tools with commands like:

```bash
npm install react
npm install axios
```

NPM also runs scripts, like:

```bash
npm run dev
npm run build
```

NPM is the official package manager for Node.js. It allows developers to install and manage reusable code modules from the NPM registry.  

Key Features of NPM:
  - Provides access to millions of open-source packages.
  - Handles dependency management automatically.
  - Enables publishing your own packages for others to use.
  - Offers scripts to automate tasks like testing, building, or running apps.  

In summary:

- NPM manages tools for your project

-NPM installs and updates dependencies

-NPM runs project commands




2. What is `package.json`?

`package.json` is like the ID card  /brain of a project.

It stores important information such as:

# Your project name

# Project version

# All installed packages (dependencies)

# Scripts you can run

# Settings and configuration

 Package.json can also be defined as a JSON file located at the root of a Node.js project. It acts as the manifest of the project.  

Contents of package.json
  - Metadata: Name, version, description, author.
  - Dependencies: Lists libraries required for the project.
  - Scripts: Defines commands like `npm start` or `npm test`.
  - Main entry point: Specifies the starting file (e.g., `index.js`).  


Package.json is necessary for the following reasons:
  - It ensures consistent project setup across environments.
  - It makes collaboration easier by documenting dependencies.
  - It allows automation of tasks via custom scripts.  


- Example 1:
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
      "start": "node index.js",
      "test": "jest"
    },
    "dependencies": {
      "express": "^4.18.2"
    }
  }
  ```

Example 2:

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

In summary
- It tells NPM what your project needs.

- It keeps track of all tools installed.

- It defines commands like `npm run dev`.



 3. What is Vite?

Vite is a tool used to create and run modern frontend apps.

It helps to:

* Start a development server
* Build a final website for production
* Load files instantly
* Handle React, Vue, etc.

Before Vite, developers used Webpack, which was slower.


 Vite (French for "fast") is a next-generation frontend build tool that provides a lightning-fast development experience.  

- How It Works:
  - Uses native ES modules in development for instant startup.

  - Provides Hot Module Replacement (HMR) for real-time updates without reloading the page
.
  - Uses Rollup under the hood for optimised production builds.  

Advantages:
  - Much faster than older tools like Webpack.
  - Simple configuration with sensible defaults.
  - Supports frameworks like React, Vue, Svelte, and more.
  - Extensible via plugins.  

Vite does 2 big jobs:

1. Development server

When you run:

```bash
npm run dev
```

Vite starts a local website at:

```
http://localhost:5173/
```

and automatically reloads the page whenever you change your code.

2. Build tool

When your React app is ready to deploy, you run:

```bash
npm run build
```

Vite bundles, minifies, and optimises your code so it loads fast online.



In summary:  
- NPM is the package manager. The app store plus manager for installing tools like React, Vite, etc.     

- package.json is the project’s blueprint.   The file that lists all tools your project needs and defines commands.   

- Vite is the modern build tool that makes frontend development faster and smoother.  

