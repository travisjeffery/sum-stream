var sum = require('.');
var Readable = require('stream').Readable;
var through = require('through2');
var rs = Readable({ objectMode: true });
var assert = require('assert');

describe('sum', function() {
  it('should work', function(done){
    rs.push(1);
    rs.push(20);
    rs.push(4);
    rs.push(null);

    rs.pipe(sum)
      .on('data', function(sum) {
        assert(sum == 25);
        done();
      });
  });
})
