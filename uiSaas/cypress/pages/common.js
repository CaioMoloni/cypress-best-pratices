const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();
const validUsername = "qasaas+technicaltestCaio@docplanner-test.com"
const invalidUsername = "invaliduser@invalidemail.com"
const validPassword = "Dpralia0109?"
const invalidPassword = "invalidpassword"

class CommonPage {

    initSetup(){
        cy.visit('https://docplanner.doctoralia.com.br');
        cy.viewport(1280, 720);
    }

    clearDateInput(elementLocator, textLength){
        for(var i = 0; i<=textLength; i++){
            cy.get(elementLocator).type('{backspace}');
        }
    }

    returnDateString(){
        return {day, month, year}
    }
    
    returnUserData(){
        return {validUsername, invalidUsername, validPassword, invalidPassword}
    }
}

export default new CommonPage();