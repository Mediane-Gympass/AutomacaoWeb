const { Given, Then, When } = require('cucumber');

const loginActionsHomeGympass = require('../../page-actions/Yoda/loginActionshomegympass.js');

Given('I am in Gympass home page', () => {
    return loginActionsHomeGympass.openGympassHomePage();
});

When('I click on Log In button', () => {
    return loginActionsHomeGympass.clickOnLoginButtonHome();
});
When('I insert an email {string}', (email) => {
        return loginActionsHomeGympass.insertEmail(email);
    });

 When('I click on Continue button for password', () => {
     return loginActionsHomeGympass.clickOnContinueButtonEmail();
    });

    When('I insert a password {string}', (password) => {
        return loginActionsHomeGympass.insertPassword(password);
    });
    When('I click on Continue button', () => {
        return loginActionsHomeGympass.clickOnContinueButtonEmail();
    
    });
    // Then ('I should be redirected to Logged Home Page',()=>{
    //     return loginActionsHomeGympass.homeLogged();
    // });



