const {client} = require('nightwatch-api');

const HomeLogada = client.page.Yoda.HomeLogadaElementsNoPlan();

module.exports = {

    HomeLogada: () => {
        return HomeLogada
                .navigate()
                .waitForElementPresent('@carregarBanner', 30000);

    },
    ClickBotaoBanner: () => {
        return HomeLogada
               .waitForElementVisible('@botaodoBanner')
                .click('@botaodoBanner');
    },
    ClicarCardPlan: () => {
        return HomeLogada
               .waitForElementVisible('@clicarnoCardPlan')
                .click('@clicarnoCardPlan');
    },

}