const url = require('url');

const myUrl = new URL('https://mywebsite.com/hellow.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname (doesn't get port)
console.log(myUrl.hostname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));
