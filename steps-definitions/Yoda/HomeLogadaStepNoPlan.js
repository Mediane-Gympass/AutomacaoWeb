const { Given, Then, When } = require('cucumber');

const loginActionsHomeGympass = require('../../page-actions/Yoda/loginActionshomegympass.js');
const HomeLogada = require('../../page-actions/Yoda/HomeLogadaActionsNoPlan.js');


Given('que estou logada com o usuário {string} e {string}', (email, password) => {

    loginActionsHomeGympass.openGympassHomePage();
    loginActionsHomeGympass.clickOnLoginButtonHome();
    loginActionsHomeGympass.insertEmail(email);
    loginActionsHomeGympass.clickOnContinueButtonEmail();
    loginActionsHomeGympass.insertPassword(password);
    return loginActionsHomeGympass.clickOnContinueButtonEmail();
  });

  When ('e Clico no Botão do Banner',() => {
      HomeLogada.HomeLogada();
     return HomeLogada.ClickBotaoBanner()
  });

  Then ('eu vejo os card e clico no Plano',() => {
   return HomeLogada.ClicarCardPlan();
   
 });