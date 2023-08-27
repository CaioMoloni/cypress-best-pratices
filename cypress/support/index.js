import './commands'

import 'cypress-file-upload'

require('cypress-xpath')

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
})

Cypress.on('uncaught:exception', (err,runnable) =>{
    return false;
});
