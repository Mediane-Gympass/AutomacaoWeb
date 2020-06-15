let url_prod= 'https://gympass-staging.com/';
//let url_devint_Yoda = 'https://enrollment.gympass.com/'; 

module.exports = {

    //url: url_staging,
    url: url_prod,
    //url_yoda:url_devint_Yoda,
    elements:{
        body:{
            selector: 'body'
        },
        
        emailGoogleInput: {
            selector:'//a[@id="identifierId"]',
            //selector: '[type:"email"]',
           locateStrategy: 'xpath'
        },
        botaoProximoEmail: {
            selector: '[type="button"]'
            //selector: '//a[@class="v4-button v4-button--primary v4-button--block v4-button--pill-md"]',
            //locateStrategy: 'xpath'
        },
        passwordInput: {
            selector: '[type="password"]'
        },
        botaoProximoSenha: {
            selector: '//a[@class="RveJvd snByac"]',
            locateStrategy: 'xpath'
            //selector: '//a[@class="v4-button v4-button--primary v4-button--block v4-button--pill-md"]',
            //locateStrategy: 'xpath'
        },
        verificacaoEtapas:{
            selector:'//a[@class="zWl5kd"]',
            locateStrategy: 'xpath'
        }

    }   
}