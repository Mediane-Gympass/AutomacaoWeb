const { Given, Then, When } = require('cucumber');

const loginActionsHomeGympass = require('../../page-actions/Yoda/loginActionshomegympass.js');
const HomeLogada = require('../../page-actions/Yoda/HomeLogadaActionsNoPlan.js');
const SummaryPayroll = require('../../page-actions/Yoda/SummaryPayrollActions.js');



Given('I am logged in Gympass webpage with valid {string} and {string}', (email, password) => {

    loginActionsHomeGympass.openGympassHomePage();
    loginActionsHomeGympass.clickOnLoginButtonHome();
    loginActionsHomeGympass.insertEmail(email);
    loginActionsHomeGympass.clickOnContinueButtonEmail();
    loginActionsHomeGympass.insertPassword(password);
    return loginActionsHomeGympass.clickOnContinueButtonEmail();
  });
 
  When('I Click Banner Button on Home Page Logged', () => {
    HomeLogada.HomeLogada();
    return HomeLogada.ClickBotaoBanner();
   });
   When('I click on card the PLan', () => {
    return HomeLogada.ClicarCardPlan();
   });
    
   Then('I see Summary', () => {
    return SummaryPayroll.PageSummary();
   });
   Then('I Click Button Payment', () => {
    return SummaryPayroll.ButtpnSummary();
   });
   Then('I Click payroll Payment', () => {
    return SummaryPayroll.ButtonPayrollPayment();
   });
   Then('i See resume my plan bought ', () => {
    return SummaryPayroll.PageResumePlan();
   });
  
 