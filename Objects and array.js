// Work with objects.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ua', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мені ${age} та я володію мовами: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Мова ${key} вивчена на  ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);





// The task of determining the available currencies in the 'ATM'



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'PLN', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Доступні валюти відсутні' : str = 'Доступні валюти:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // OR

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')





// The task of determining whether the budget is sufficient to pay for heating 




const shoppingMallData = {
    shops: [
        {
            width: 10, 
            length: 5 
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5, 
    moneyPer1m3: 30,
    budget: 100000
}

function isBudgetEnough(data) {
     let area = 0;
     let volume = 0;
 
     data.shops.forEach( shop => {
        area += shop.width * shop.length;

     });
     volume = data.height * area;

 if ( data.moneyPer1m3 * volume > data.budget ) { 
    console.log(`Бюджету не достатньо`);
 } else {
    console.log ( `Бюджету достатньо`);
 }


    
};

isBudgetEnough(shoppingMallData);