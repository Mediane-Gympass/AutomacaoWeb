module.exports = {

    elements: {
        carregarBanner: {
            selector: '//a[@class="hero-content"]',
            locateStrategy: 'xpath'
        },
        botaodoBanner: {
            selector: '//a[@class="btn btn-primary btn-lg btn-block hero-btn"]',
            locateStrategy: 'xpath'
        },
        clicarnoCardPlan: {
            selector: '//a[@class="btn btn-primary btn-lg btn-block"]',
            locateStrategy: 'xpath'
        },
    }
}