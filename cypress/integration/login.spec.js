var user1_name = "TestUser";
var user1_pwd = "testpwd";

const specTitle = require("cypress-sonarqube-reporter/specTitle");

context('Test App - Login', () => {
  
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.visit('http://localhost:7766/login')
    })
})
