const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop

    //   for(let i = 0; i< companies.length; i++){
    //     console.log(companies[i]);
    //   }

//forEach

    //   companies.forEach(function(company) {
    //     console.log(company);
    //     console.log(company.name);
    //   })

//filter

    //filter with for loop
        // let canDrink = [];
        // for(let i = 0; i < ages.length; i++){
        //     if(ages[i] >= 21){
        //         canDrink.push(ages[i]);
        //     }
        // }

    //filter array method
        // const canDrink = ages.filter(function(age){
        //     if(age >= 21){
        //         return true
        //     }
        // });

    //array method w/ arrow function
        // const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

    //Filter retail companies
        // const retail = companies.filter(company => company.category === 'Retail');

        // console.log(retail);
    
    //Filter 80's comapnies
        // const oldComps = companies.filter(company => (1980 <= company.start) && (company.start < 1990));
        // console.log(oldComps);

    //Filter Companies that lasted 10 years
        // const goodComps = companies.filter(company => (company.end- company.start) >= 10);
        // console.log(goodComps);

//map

    //Create companyNames array
        // const names = companies.map((company => company.name));
        // console.log(names);
    
    //Company names and dates
        // const compDetails = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
        // console.log(compDetails);

    //Math with ages[]
        // const ageSqrt = ages.map(age => Math.sqrt(age))
        // console.log(ageSqrt);

        // const ageTimesTwo = ages.map(age => age*2)
        // console.log(ageTimesTwo);

        // const ageMap = ageSqrt.map(age => age*2);
        // console.log(ageMap);

//sort
    //Sorted Companies by start
        // const sortedCompanies = companies.sort(function(c1,c2){
        //     if(c1.start > c2.start){
        //         return 1;
        //     }
        //     else{
        //         return -1;
        //     }
        // });

        // const sortedCompanies = companies.sort((a,b) => (a.start >b.start) ? 1 : -1);
        // console.log(sortedCompanies);

    //Sort ages
        // const sortAges = ages.sort((a,b) => a-b); <--- a-b is negative is b > a
        // console.log(sortAges);

//reduce
    //Add ages
        // let ageSum = 0;
        // for(let i = 0; i < ages.length; i++){
        //     ageSum += ages[i];
        // }

        // const ageSum = ages.reduce(((total, age) => total + age), 0);

    //Get total years for all companies
        // const companyRange = companies.reduce((total, company) => total + (company.end - company.start), 0);
        // console.log(companyRange);


// console.log(ageSum);


//Combine methods
//     const combined = ages
//     .map(age => age*2)
//     .filter(age => age >= 40)
//     .sort((a,b) => a-b)
//     .reduce((total, age) => (total + age), 0);
    


// console.log(combined);