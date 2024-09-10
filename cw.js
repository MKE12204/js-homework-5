/* 
            
Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024 */ 
/* Створіть об'єкт заробітної плати obj. Виведіть на екран зарплату Петі та Колі.
                
               //Цей об'єкт надано:
                     var obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
                */
/* let obj = {'Kolia': '1000$', 'Vasia': '500$', 'Petia': '200$'};
document.write(`Коля зарабатывает:`+ obj.Kolia + '<br>')
document.write(`Коля зарабатывает:`+ obj.Petia) */
/* Створіть об'єкт криптокошилок. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, Ethereum, Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на сьогоднішній день день. Також в об'єкті гаманець є метод при виклику якого він приймає ім'я валюти та виводить на сторінку інформацію. "Доброго дня, ... ! На вашому балансі (Назва валюти та логотип) залишилося N монет, якщо ви сьогодні продасте їх те, отримаєте ...грн.
 */
/* let cryptowallet = {
    name: 'Михаил', 
    bitkoinName:  'Bitcoin:', 
    bitkoinHow: '0.7', 
    bitkoinLogo:'<img src="img/111.png">', 
    bitkoinPrice: '1620875,74 грн.', 
    ethereumName: 'Ethereum:',
    ethereumHow:'0.1', 
    ethereumLogo:'<img src="img/Ethereum_logo.svg 1.png">', 
    ethereumPrice:'9535,52 грн.', 
    stellarName: 'Stellar:',
    stellarHow:'2', 
    stellarLogo:'<img src="/img/img23.png">',
    stellarPrice: '7,48 грн.',
    show: function  (){
        document.write(`Доброго дня,` + cryptowallet.name +'!' + `На вашому балансі`+ cryptowallet.bitkoinName+ cryptowallet.bitkoinLogo + 'залишилося'+ cryptowallet.bitkoinHow+ 'монет,'+ 'якщо ви сьогодні продасте їх то, отримаєте' + cryptowallet.bitkoinPrice);
        document.write('<br>')
         document.write(`Доброго дня,` + cryptowallet.name +'!' + `На вашому балансі` + cryptowallet.ethereumName+ cryptowallet.ethereumLogo + 'залишилося'+ ',' +cryptowallet.ethereumHow+ 'монет,'+ 'якщо ви сьогодні продасте їх то, отримаєте' + cryptowallet.ethereumPrice);
        document.write('<br><br>')
        document.write(`Доброго дня,` + cryptowallet.name +'!' + `На вашому балансі` + cryptowallet.stellarName+ 'Stellar:',
            + cryptowallet.stellarLogo + 'залишилося'+ ',' +cryptowallet.stellarHow+ 'монет,'+ 'якщо ви сьогодні продасте їх то, отримаєте' + cryptowallet.stellarPrice);
    }
}
cryptowallet.show() */
/* Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false. */
/* function isEmpty(obj) {
    let fObj = {
    };
    if( Object.keys(fObj).length === 0){
        document.write(true);
    }else if(Object.keys(fObj).length > 0){
        document.write(false);
    };
};
isEmpty(); */
/* Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024 */
/* let valut = {
    "date": "01.07.2024",
    "bank": "PB",
    "baseCurrency": 980,
    "baseCurrencyLit": "UAH",
    "exchangeRate": [
      {
        "baseCurrency": "UAH",
        "currency": "AUD",
        "saleRateNB": 26.9182,
        "purchaseRateNB": 26.9182
      },
      {
        "baseCurrency": "UAH",
        "currency": "AZN",
        "saleRateNB": 23.812,
        "purchaseRateNB": 23.812
      },
      {
        "baseCurrency": "UAH",
        "currency": "BYN",
        "saleRateNB": 14.7042,
        "purchaseRateNB": 14.7042
      },
      {
        "baseCurrency": "UAH",
        "currency": "CAD",
        "saleRateNB": 29.52,
        "purchaseRateNB": 29.52
      },
      {
        "baseCurrency": "UAH",
        "currency": "CHF",
        "saleRateNB": 44.9466,
        "purchaseRateNB": 44.9466,
        "saleRate": 45.4,
        "purchaseRate": 44.73
      },
      {
        "baseCurrency": "UAH",
        "currency": "CNY",
        "saleRateNB": 5.5702,
        "purchaseRateNB": 5.5702
      },
      {
        "baseCurrency": "UAH",
        "currency": "CZK",
        "saleRateNB": 1.7297,
        "purchaseRateNB": 1.7297,
        "saleRate": 1.75,
        "purchaseRate": 1.72
      },
      {
        "baseCurrency": "UAH",
        "currency": "DKK",
        "saleRateNB": 5.8017,
        "purchaseRateNB": 5.8017
      },
      {
        "baseCurrency": "UAH",
        "currency": "EUR",
        "saleRateNB": 43.2658,
        "purchaseRateNB": 43.2658,
        "saleRate": 44,
        "purchaseRate": 43
      },
      {
        "baseCurrency": "UAH",
        "currency": "GBP",
        "saleRateNB": 51.1382,
        "purchaseRateNB": 51.1382,
        "saleRate": 51.73,
        "purchaseRate": 50.97
      },
      {
        "baseCurrency": "UAH",
        "currency": "GEL",
        "saleRateNB": 14.449,
        "purchaseRateNB": 14.449
      },
      {
        "baseCurrency": "UAH",
        "currency": "HUF",
        "saleRateNB": 0.109478,
        "purchaseRateNB": 0.109478
      },
      {
        "baseCurrency": "UAH",
        "currency": "ILS",
        "saleRateNB": 10.774,
        "purchaseRateNB": 10.774
      },
      {
        "baseCurrency": "UAH",
        "currency": "JPY",
        "saleRateNB": 0.25186,
        "purchaseRateNB": 0.25186
      },
      {
        "baseCurrency": "UAH",
        "currency": "KZT",
        "saleRateNB": 0.085563,
        "purchaseRateNB": 0.085563
      },
      {
        "baseCurrency": "UAH",
        "currency": "MDL",
        "saleRateNB": 2.255,
        "purchaseRateNB": 2.255
      },
      {
        "baseCurrency": "UAH",
        "currency": "NOK",
        "saleRateNB": 3.7962,
        "purchaseRateNB": 3.7962
      },
      {
        "baseCurrency": "UAH",
        "currency": "PLN",
        "saleRateNB": 10.041,
        "purchaseRateNB": 10.041,
        "saleRate": 10.2,
        "purchaseRate": 10.03
      },
      {
        "baseCurrency": "UAH",
        "currency": "SEK",
        "saleRateNB": 3.8061,
        "purchaseRateNB": 3.8061
      },
      {
        "baseCurrency": "UAH",
        "currency": "SGD",
        "saleRateNB": 29.8291,
        "purchaseRateNB": 29.8291
      },
      {
        "baseCurrency": "UAH",
        "currency": "TMT",
        "saleRateNB": 11.5583,
        "purchaseRateNB": 11.5583
      },
      {
        "baseCurrency": "UAH",
        "currency": "TRY",
        "saleRateNB": 1.2308,
        "purchaseRateNB": 1.2308
      },
      {
        "baseCurrency": "UAH",
        "currency": "UAH",
        "saleRateNB": 1,
        "purchaseRateNB": 1
      },
      {
        "baseCurrency": "UAH",
        "currency": "USD",
        "saleRateNB": 40.4542,
        "purchaseRateNB": 40.4542,
        "saleRate": 40.85,
        "purchaseRate": 40.25
      },
      {
        "baseCurrency": "UAH",
        "currency": "UZS",
        "saleRateNB": 0.0032215,
        "purchaseRateNB": 0.0032215
      },
      {
        "baseCurrency": "UAH",
        "currency": "XAU",
        "saleRateNB": 94428.6,
        "purchaseRateNB": 94428.6
      }
    ]
}
let valutShow = valut.exchangeRate.map((valuu) => 
    `Base Currency: ${valuu.baseCurrency} Currency: ${valuu.currency}. Sale rate: ${valuu.saleRateNB}. Purchase rate: ${valuu.purchaseRateNB}. <br></br>`
);
document.write(valutShow); */