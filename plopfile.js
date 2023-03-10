module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Generate a JSX component in src/components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}.jsx",
        templateFile: "src/templates/component.hbs",
      },
      {
        type: "append",
        path: "src/components/index.js",
        templateFile: "src/templates/import.hbs",
      },
    ],
  })
  plop.setGenerator("layout", {
    description: "Generate a JSX layout in src/layouts",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the layout?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/layouts/{{name}}.jsx",
        templateFile: "src/templates/component.hbs",
      },
      {
        type: "append",
        path: "src/layouts/index.js",
        templateFile: "src/templates/import.hbs",
      },
    ],
  })
  plop.setGenerator("function", {
    description: "Creates a helper function in src/utils",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the file?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{name}}.js",
        templateFile: "src/templates/utils.hbs",
      },
    ],
  })
  plop.setGenerator("hook", {
    description: "Creates a custom hook in src/hooks",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the hook?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{name}}.js",
        templateFile: "src/templates/hooks.hbs",
      },
    ],
  })
  plop.setGenerator("server", {
    description: "Setup Node index.js and Jenkinsfile required for deployment",
    prompts: [
      {
        type: "input",
        name: "repository",
        message: "Type the name of the repository as it is",
      },
      {
        type: "input",
        name: "endpoint",
        message:
          'Which path do you want the project to be available at? ("will be appended to `/projects/`")',
      },
    ],
    actions: [
      {
        type: "add",
        path: "Jenkinsfile",
        templateFile: "src/templates/backend/jenkins.hbs",
      },
      {
        type: "add",
        path: "index.js",
        templateFile: "src/templates/backend/nodeIndex.hbs",
      },
    ],
  })
}
