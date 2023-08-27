
Cypress.Commands.add("login", (userName, password) => {
    cy.xpath("//input[@placeholder='EX: B113605']").type(userName)
    cy.xpath('//input[@placeholder='+"'"+"********"+"'"+']').type(password)
    cy.xpath("//input[@value='Login']").click()
})

Cypress.Commands.add("logout", (data) => {
    cy.get("#user-menu").click()
    cy.xpath("//span[text()='Logout']").click()
})

Cypress.Commands.add("open_testconfig", (data) => {
    cy.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/main/app-route-selection/div/div/div/div/div/div[1]/fieldset/div/button").click()
    cy.wait(3000);
    cy.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/main/app-header/nav/button").click()
    cy.wait(3000);
    cy.get('.mat-list-item-content').contains('TEST CONFIGURATION').click()
    cy.wait(1000);
})

Cypress.on("test:before:run", (test, runnable) => {
    const suiteTitle = runnable.parent.title;
    Cypress.config({
        "mochawesomeReporterOptions":{
            "reportDir": "cypress/report/html-report/" + suiteTitle,
        },
        "cypressSonarqubeReporterReporterOptions":{
            "outputDir": "cypress/report/json-report" + suiteTitle,
        }
    });
    const reportFileName = Cypress.config("reporterOptions").reportFilename;
    console.log(reportFileName);
});
