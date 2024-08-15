const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ2YmVmOTUxLWQ3ZGQtNDE3YS1iZTUzLTM2NzA4MjY0MjQzNS0xNzIzNzMzMDA2Mzk2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTkxMWIyYzktNWM5ZS00NTgwLTgyZDItZDMzMjRlOTI3MzM5IiwidHlwZSI6InQifQ.6O8MM0w6v3RnOD97srfddqlzDAZtezi62mzkZYBvNEQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
