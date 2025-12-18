# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



**Assignment One **

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



** Assignment Two**

Summary of React Tutorial Documents
Summary of React.js Tutorial- jscomplete.com
React Basics:
 React is a JavaScript library (not a full framework) focused on building user interfaces. It follows the Unix philosophy: do one thing and do it well. Its strength lies in declarative programming: you describe the final state of your UI, and React handles the DOM updates
Declarative UI:
 Instead of manually manipulating the DOM, React allows developers to describe the desired UI state, and it handles the updates efficiently.
Virtual DOM & Reconciliation:
 React introduced the virtual DOM, which compares changes between states and updates only the necessary parts of the real DOM. This enables UI updates to be faster and smoother.
Components:
 React apps are built from components—reusable, composable, and stateful units. Components can be functions or classes, though modern React favours function components with hooks
Building Blocks
Components: Reusable pieces of UI. Start small (buttons, inputs) and compose them into larger structures.
Props: Inputs to components.
State: Internal data bb that changes over time.
Props & State:


Props: Inputs passed into components.
State: Internal data that changes over time.
 Hooks like useState allow function components to manage state.
JSX:
 JSX is a JavaScript extension that looks like HTML but compiles into React.createElement calls. It makes writing UI code more intuitive.
Events & Side Effects:
 React handles events declaratively (e.g., onClick). Side effects (like updating the document title) are managed with hooks such as useEffect.

Here’s a simple React example showing state management with hooks and event handling:
 Controlled Input with Character Counter
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>React Counter Example</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));

 Key Takeaways from the Code
useState(0) initialises the counter at 0.
setCount updates the state, triggering React to re-render only the changed part of the UI.
The button uses onClick to call the increment function.









Summary of the React Tutorial - FreeCodeCamp React Hooks Cheat Sheet
1. State Management with useState
React’s useState hook lets you create and update state variables inside function components.
State drives the UI: when the state changes, React re-renders the component.
Code Example: Counter
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;


2. Side Effects with useEffect
Use useEffect to perform actions outside React’s rendering (API calls, DOM updates, subscriptions).
It runs after render and can re-run when dependencies change.
Code Example: Updating Document Title
import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [name, setName] = useState('React Learner');

  useEffect(() => {
    document.title = `Hello, ${name}!`;
  }, [name]);

  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Type your name"
    />
  );
}

export default TitleUpdater;


3. Referencing Elements with useRef
useRef creates a reference to DOM elements or values that persist across renders.
Code Example: Auto-Focus Input
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused input" />;
}

export default FocusInput;


4. Performance Optimisation with useCallback & useMemo
useCallback: Memoises functions to avoid unnecessary re-creations.
useMemo: Memoises expensive calculations.
Code Example: Memoized Calculation
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <p>Factorial of {number} is {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}

export default ExpensiveCalculation;


5. Context with useContext
Avoids “prop drilling” by sharing state across multiple components.
Code Example: Theme Context
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'light' ? '#fff' : '#333' }}>Click Me</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

export default App;

6. Complex State with useReducer
useReducer is useful for managing state transitions with actions.
Code Example: Simple Reducer
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default CounterWithReducer;

Major points to note:
Start small: practice with useState and useEffect.
Scale up: use useContext and useReducer for larger apps.
Optimise: apply useCallback and useMemo when performance matters.
Think declaratively: describe what the UI should look like given the state, and React does the rest.
}
Summary of JavaScript HTML DOM Document - W3Schools

The Document Object:
Represents the entire HTML document in JavaScript.
Serves as the entry point to the DOM (Document Object Model).
Accessing the Document:
The document object is automatically created by the browser.
It can be used to access and manipulate all elements in the page.
Common Uses:
Finding elements (getElementById, getElementsByTagName, etc.).
Changing content (innerHTML, textContent).
Modifying attributes (setAttribute, getAttribute).
Handling forms, images, and links through built-in collections (document.forms, document.images, document.links).
Special Properties:
document.body → Accesses the <body> element.
document.head → Accesses the <head> element.
document.title → Gets or sets the page title.
document.URL → Returns the current page URL.

1. Finding Elements in the DOM
React (and plain JavaScript) often needs to select elements before manipulating them.
The tutorial explains multiple ways: by id, tag name, class name, CSS selectors, and object collections.
Code Example: By ID
const element = document.getElementById("intro");

Code Example: By Tag Name
const paragraphs = document.getElementsByTagName("p");

Code Example: By Class Name
const items = document.getElementsByClassName("intro");

Code Example: By CSS Selector
const introParagraphs = document.querySelectorAll("p.intro");


2. Working with Collections
One can access built-in collections like document. forms, document.images, document.links.
This allows iteration over elements without manually selecting each one.
Code Example: Accessing Form Elements
const form = document.forms["frm1"];
let text = "";
for (let i = 0; i < form.length; i++) {
  text += form.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;


3. Constructive Application
These methods are foundational for React because React abstracts away direct DOM manipulation.
Instead of calling getElementById, React encourages one to bind state to UI and let React update the DOM automatically.
Understanding these vanilla JS methods helps you appreciate React’s efficiency.
 React Counter Example (Declarative DOM Updates)
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;


Main Takeaways
Vanilla JS DOM methods (getElementById, querySelectorAll) are essential for direct manipulation.
React abstracts this: you describe the UI based on state, and React updates the DOM for you.
Constructive learning path:
Practice DOM selection in plain JS.
Transition to React, where state replaces manual DOM queries.
Build small apps (counter, todo list, form handler) to reinforce the declarative mindset.












Summary of JavaScript HTML DOM Elements- W3Schools


JavaScript DOM Elements:
Key Concepts
Finding HTML Elements: JavaScript allows you to locate and manipulate elements in the DOM.
Methods to Find Elements:
getElementById(id) → Finds a single element by its unique ID.
getElementsByTagName(tag) → Returns all elements with a given tag name.
getElementsByClassName(class) → Returns all elements with a specific class name.
querySelectorAll(selector) → Finds all elements matching a CSS selector (e.g., p.intro).
HTML Object Collections → Access built-in collections like document.forms, document.images, document.links, etc.
Examples
By ID: document.getElementById("intro")
By Tag Name: document.getElementsByTagName("p")
By Class Name: document.getElementsByClassName("intro")
By CSS Selector: document.querySelectorAll("p.intro")
Forms Collection: Access form elements via document.forms["frm1"].
Additional Notes
If an element isn’t found, the method returns null.
Collections like document.body, document.head, and document.scripts are also directly accessible.



