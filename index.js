'use strict';

var reduce = require('stream-reduce');

module.exports = reduce(function(acc, data) {
    return acc + data;
}, 0);
