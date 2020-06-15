
let url_prod= 'https://gympass.com/';

module.exports = {

    
    url: url_prod,
    
    elements:{
        PageSummary:{
            selector: 'body'
        },
        ButtonSummary: {   
            selector: '//a[@class="button block"]',
            locateStrategy: 'xpath'
        } ,
        ButtonPayrollPayment: {
            selector: 'a[href="/subscriptions/844589563386/payroll_payment"]',
            locateStrategy: 'xpath'
        },
        PageResumePlan: {
            selector: '//a[class="plan-name"]',
            //selector: '//a[@class="v4-button v4-button--primary v4-button--block v4-button--pill-md"]',
            locateStrategy: 'xpath'
        },
    }

}


