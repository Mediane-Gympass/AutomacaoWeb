//let url_staging ='https://www.gympass-staging.com/';
let url_prod= 'https://gympass.com/';
//let url_devint_Yoda = 'https://enrollment.gympass.com/'; 

module.exports = {

    //url: url_staging,
    url: url_prod,
    //url_yoda:url_devint_Yoda,
    elements:{
        body:{
            selector: 'body'
        },
        loginButtonHome: {   
            selector: '//a[@class = "button new outlined"]',
            locateStrategy: 'xpath'
        } ,
        emailInput: {
            selector: '#person_search_info'
        },
        loginButton: {
            selector: '[type="submit"]'
            //selector: '//a[@class="v4-button v4-button--primary v4-button--block v4-button--pill-md"]',
            //locateStrategy: 'xpath'
        },
        passwordInput: {
            selector: '#person_password'
        },

        homeLogged:{
            selector:'//a[@class="main-header hidden-md hidden-lg hidden-sm -border-bottom -center-content"]',
            locateStrategy: 'xpath'
        },
    }

}


