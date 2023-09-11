import commonPage from '../pages/common'
const patientName = "Caio Technical Test"

class PlannerPage {

    excludeExistingBooking(){
        cy.get('div').then(($div) => {
            if ($div.hasClass('calendar-appointment')) {
                this.openExistingBookingCard()
                this.cancelBooking()
                this.confirmCancelBooking()
            }
            if($div.hasClass('calendar-block-container')){
                this.openBlocking()
                this.excludeBlocking()
                this.confirmExcludeBlocking()
            }
        })
    }

   openBookingPopUp(hour, minute){
       cy.get('td.fc-timegrid-slot-lane[data-time='+'"'+hour+':'+minute+':'+'00'+ '"'+ ']').click()
       cy.get('[data-testid="txtPatientData"]').should('exist')
   }

   inputPatientName(){
       cy.get('input[name="PatientData"]').should('be.enabled')
       cy.get('input[name="PatientData"]').type(patientName)
   }

   selectPatientName(){
       cy.get('strong[ng-bind-html="element.patientName"].ng-binding').click()
   }

   inputBookingDate(day,month,year){
       commonPage.clearDateInput('input.form-control[ng-model="date"][ng-required="true"][uib-datepicker-popup="dd-MM-yyyy"]', 10)
       cy.get('input.form-control[ng-model="date"][ng-required="true"][uib-datepicker-popup="dd-MM-yyyy"]').clear()
       cy.get('[data-testid="txtDate"]').type(day+'-'+month+'-'+year)
   }

   inputComments(){
       cy.get('[dralia-id="comments"]').type("caio test")
   }

   createButton(){
       cy.get('#save-button').click()
       cy.get("a.shake").should('be.visible')
   }

   cancelButton(){
       cy.get('[data-testid="btnCancel"]').click()
   }

   openNewBookingCard(){
       cy.get("a.shake").click()
   }

   openExistingBookingCard(){
       cy.get(".calendar-appointment").click()
   }

   cancelBooking(){
       cy.get("#remove").click()
   }

   confirmCancelBooking(){
       cy.get("[data-testid='ConfirmButton']").click()
       cy.get(".calendar-appointment").should('not.be.visible')
   }

   changeBooking(){ 
       cy.get("[data-testid='appointmentSummaryBtnSave']").click()
   }

   confirmChangeBooking(){
       cy.get("#save-button").click() 
   }

   closeBookingEdit(){
       cy.get("[data-testid='btnCancel']").click()
   }

   saveBookingEdit(){
       cy.get("#save-button").click()
   }

   openBlockTab(){
       cy.get("[data-testid='blockTab']").click()
   }

   inputBlockStartDate(day,month,year){
       commonPage.clearDateInput("[data-testid='blockStartDate']", 10)
       cy.get("[data-testid='blockStartDate']").type(day + '-' + month + '-' + year)
   }

   inputBlockEndDate(day,month,year){
       commonPage.clearDateInput("[data-testid='blockEndDate']", 10)
       cy.get("[data-testid='blockEndDate']").type(day + '-' + month + '-' + year)
   }

   createBlocking(){
       cy.get("#save-button").click()
       cy.get(".calendar-block-container").should('be.visible')
       cy.get("div:contains(' Bloqueio salvo corretamente ')").should('be.visible')
   }

   openBlocking(){
       cy.get(".block-time").first().click()
   }

   excludeBlocking(){
       cy.get("[data-testid='blockSummaryBtnUnblock']").click()
   }

   confirmExcludeBlocking(){
       cy.get("[data-testid='confirmUnBlock']").click()
       cy.get(".calendar-block-container").should('not.be.visible')
   }

   openExceptionTab(){
       cy.get("[data-testid='exceptionTab']").click()
   }

   editExceptionDate(day,month,year){
       commonPage.clearDateInput("[data-testid='txtDate']",10)
       cy.get("[data-testid='txtDate']").type(day + '-' + month + '-' + year)
   }

   addNewException(){
      cy.get("#save-button").click()
   }

}

export default new PlannerPage();