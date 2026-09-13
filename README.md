<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

 -->
## Project Name:
 A-5 Dev Stack Builder Website

## A little description:
 This is a web application building ideal development stack. Here explores modern technologies these are used to handle modern web application. Here users can build stack to choose technologies that he might use.Here some description are shown about different technologies.

## Technology that i have used: 
1. React js
2. Tailwind CSS, DaisyUI
3. TypeScript
4. React-Toastify (NPM Package)
5. JSON (for technology data)
6. Vite (built tool)
7. Netlify for deployment

## 3 features about my project:
  1. Using react for creating this project.
  2. TypeScript are used in this project.
  3. Reusability.

  # Answer of the React Questions.
  1. JSX fullform Javascript XML. We can use HTML into the react component easily in JSX. It is very useful for working with UI structure  and  Javascript Logic at a same time.

  2. Both props and State are used for data managing.But State create and use within component also used for store components data. Otherside props used for transferring data from parent component to child component.

  3. In React useState Hook is used for changable data store and update perposes.I used useState Hook in TechCart and  Technologies components to rerendering or add or remove technologies in this project.

  4. React useEffect used to make side effect after render the hook component. JSON API fetch is a one kind of side effect in React. So it is used in JSON API fetch.

  5. When we use map() in React we should use a unique key prop because this key uniquily identified all element of this function. This unique key helps us for delete, add or update data easily.

  6. Conditional rendering is  used when render is happening depends on condition. Here i use conditional rendering in YourStack components. Conditional rendering codes are below:
  if (selectedTechnology.length === 0) {
    return (
      <div className="ml-2 h-auto w-auto border max-h-50 border-gray-200 rounded-[7px] m-1 p-2 shadow-gray-300 shadow-md container ">
        <div className="text-2xl font-bold">Your Stack</div>
        <h2 className=" text-gray-500 mb-2 font-medium">
          No technologies selected yet
        </h2>
        <div className=" mt-5 text-gray-500 mb-2 p-5 text-center border-1 border-dashed font-medium">
          Your Stack is empty
        </div>
      </div>
    );
  }