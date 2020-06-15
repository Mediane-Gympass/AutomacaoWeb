const {client} = require('nightwatch-api');

const Summary = client.page.Yoda.SummaryPayrollElements();

module.exports = {

    openGympassHomePage: () => {
        return Summary
                .navigate()
                .waitForElementPresent('@PageSummary', 30000);

    },
    ButtonSummary: () => {
        return Summary
        .waitForElementVisible('@ButtonSummary')
        .click('@ButtonSummary');

    },
    ButtonPayrollPayment: () => {
        return Summary
        .waitForElementVisible('@ButtonPayrollPayment')
        .click('@ButtonPayrollPayment');

    },
    PageResumePlan: () => {
        return Summary
        .navigate()
        .waitForElementPresent('@PageResumePlan', 30000);
        
    },
}