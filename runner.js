const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjFlZGRlNDlhLTJiMWEtNDZkMS1hMzMzLTdlY2E4YzI2M2Y2Zi0xNzIzNzQyMTg1MDM5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWFmMmU2ZTktMGMwYy00YmYyLTk0MzUtNGYzMTFhN2M3NmVhIiwidHlwZSI6InQifQ.-wTz82eYueSyCgx_Ur-qAH1bkmikeQlk6E3j7gCpkgU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
