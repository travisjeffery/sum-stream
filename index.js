var reduce = require('stream-reduce');

var sum = module.exports = reduce(function(acc, data) {
    return acc + data;
}, 0);
