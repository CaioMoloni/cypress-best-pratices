/// <reference types="cypress" />
import loginPage from '../../pages/login'
import plannerPage from '../../pages/planner';
import commonPage from '../../pages/common';

context('DocPlanner - Planner Page Tests', () => {

    const {day, month, year} = commonPage.returnDateString()
    const {validUsername, validPassword} = commonPage.returnUserData()

    beforeEach(() => {
        commonPage.initSetup();
        loginPage.fillUsername(validUsername)
        loginPage.fillPassword(validPassword)
        loginPage.submit()
        loginPage.navigateToPlanner()
        plannerPage.excludeExistingBooking()
    });

    
    it('Create a new booking', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.inputPatientName()
        plannerPage.selectPatientName()
        plannerPage.inputBookingDate(day,month,year)
        plannerPage.inputComments()
        plannerPage.createButton()
        plannerPage.openNewBookingCard()
    });

    it('Create a new booking, and exclude it', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.inputPatientName()
        plannerPage.selectPatientName()
        plannerPage.inputComments()
        plannerPage.createButton()
        plannerPage.openNewBookingCard()
        plannerPage.cancelBooking()
    });

    it('Create a new booking, and edit it', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.inputPatientName()
        plannerPage.selectPatientName()
        plannerPage.inputComments()
        plannerPage.createButton()
        plannerPage.openNewBookingCard()
        plannerPage.changeBooking()
        plannerPage.confirmChangeBooking()
    });
    
    it('Create a block booking date', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.openBlockTab()
        plannerPage.inputBlockStartDate(day,month,year)
        plannerPage.createBlocking()
    });

    it('Exclude a block booking date', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.openBlockTab()
        plannerPage.inputBlockStartDate(day,month,year)
        plannerPage.createBlocking()
        plannerPage.openBlocking()
        plannerPage.excludeBlocking()
        plannerPage.confirmExcludeBlocking()
    });
    
    it('Create a exception booking date', () => {
        plannerPage.openBookingPopUp('06', '15')
        plannerPage.openExceptionTab()
        plannerPage.editExceptionDate(day,month,year)
        plannerPage.addNewException()
    });

})
