/// <reference types="cypress" />
import loginPage from '../../pages/login';
import commonPage from '../../pages/common';

context('DocPlanner - Login Page Tests', () => {

    const {validUsername, invalidUsername, validPassword, invalidPassword} = commonPage.returnUserData()
    
    beforeEach(() => {
        commonPage.initSetup()
    });
    
    it('should log in with valid credentials', () => {
        loginPage.fillUsername(validUsername)
        loginPage.fillPassword(validPassword)
        loginPage.submit()
        loginPage.navigateToPlanner()
    });
    
    it('should display an error message with invalid credentials', () => {
        loginPage.fillUsername(invalidUsername)
        loginPage.fillPassword(invalidPassword)
        loginPage.submit()
        loginPage.invalidCredentialsError()
    });
    
    it('should block the account when there is to many invalid login attempts', () => {
        loginPage.invalidPwdLoginAttempts(2)
        loginPage.accountBlockageError()
    }); 

})
    

