const {client} = require('nightwatch-api');

const login = client.page.Yoda.loginElementsHomeGympass();

module.exports = {

    openGympassHomePage: () => {
        return login
                .navigate()
                .waitForElementPresent('@body', 30000);

    },
    clickOnLoginButtonHome: () => {
        return login
                .waitForElementVisible('@loginButtonHome')
                .click('@loginButtonHome');
    },

    insertEmail: (email) => {
        return login
                .waitForElementPresent('@emailInput',30000)
                .setValue('@emailInput', email);
    },

    clickOnContinueButtonEmail: () => {
        return login
        //.waitForElementPresent('@loginButtonEmail',60000)
        .waitForElementVisible('@loginButton')
        .click('@loginButton');
    },

    insertPassword: (password) => {
        return login
                .waitForElementVisible('@passwordInput')
                .setValue('@passwordInput', password);
    },
    homeLogged: () => {
        return login
        .waitForElementPresent('@homeLogged',1000);
    },

}


