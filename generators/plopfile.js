function generateByPlop(plop) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      { type: 'input', name: 'name', message: 'What is you component name?' }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/test.test.tsx.hbs'
      }] // array of actions
  })
}

module.exports = generateByPlop
