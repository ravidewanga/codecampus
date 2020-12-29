const request = require('request');

var showResponse = (data) => {
    console.log('get response data after url call.');
    console.log(data);
}

var getData = (callback) => {
    const data_url = 'https://jsonplaceholder.typicode.com/todos/1';
    request({ url: data_url, json: true }, (error, response) => {
        if (response.body) {
            callback(response.body);
        } else {
            callback('Something went wrong please try again.');
        }
    });
}

getData(showResponse);


// const printAfterAdd = (val) => {
//     console.log(`Value is: ${val}`);
// }

// const add = (a, b, callback) => {
//     const sum = a + b;
//     callback(sum);
// }

// add(1, 3, printAfterAdd);





