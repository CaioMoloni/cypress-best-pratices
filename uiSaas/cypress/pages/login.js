const validUsername = "qasaas+technicaltestCaio@docplanner-test.com"
const invalidUsername = "invaliduser@invalidemail.com"
const validPassword = "Dpralia0109?"
const invalidPassword = "invalidpassword"

class LoginPage {

    clearInputs(){
        cy.get('#username').clear()
        cy.get('#password').clear()
    }
  
    fillUsername(username) {
      cy.get('#username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('button[name="login"]').click();
    }

    invalidCredentialsError(){
        cy.get('p[data-test-id="password-validation"]').should('be.visible')
    }
    
    fillTheFieldsError(){
        cy.contains("Preencha este campo.")
    }

    accountBlockageError(){
        cy.get('p.invalid-feedback[data-test-id="password-validation"]').should('contain', 'Senha incorreta. Após duas tentativas falhas de login, bloquearemos sua conta por 30 minutos. Lembre-se que você sempre pode configurar uma nova senha.');
    }

    invalidPwdLoginAttempts(attemptNum){
        for(var num = 0; num <= attemptNum; num++){
            this.clearInputs()
            this.fillUsername(validUsername)
            this.fillPassword(invalidPassword)
            this.submit()
        }
    }

    navigateToPlanner(){
        cy.wait(8000)
        cy.url().should('include', '#/calendar/week');
    }

  }
  
export default new LoginPage();