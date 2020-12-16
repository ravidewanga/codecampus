var _ = require('lodash');

//------------concat-------------
var first = [1];
var other = _.concat(first, [2], [3], [4]);

//------------*****--------------
var drop = _.drop([1, 2, 3], 2);

var indexOf = _.indexOf([1, 2, 1, 2], 2);

var multiply = _.multiply(6, 4);

var add = _.add(6, 4);

exports.data = {
    'contact':other,
    'drop':drop,
    'indexOf':indexOf,
    'multiply':multiply,
    'add':add
};