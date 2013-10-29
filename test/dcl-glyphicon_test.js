'use strict';

var Icon = require('../lib/dcl-glyphicon.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['dcl-glyphicon'] = {
    setUp: function(done) {
        // setup here
        done();
    },

    'glyph': function(test) {
        test.expect(3);

        var w = new Icon();
        w.setGlyph('ok');
        test.equal(w.stringify(), '<span class="glyphicon glyphicon-ok"></span>');
        w.setGlyph('save');
        test.equal(w.stringify(), '<span class="glyphicon glyphicon-save"></span>');
        w.setGlyph('non-existent-glyph');
        test.equal(w.stringify(), '<span class="glyphicon"></span>');

        test.done();
    },

    'benchmark': function (test) {
        test.expect(1);

        var start = new Date();
        
        var w = new Icon();
        for(var i = 0; i < 1000; i++) {
            if(w % 2) {
                w.setGlyph('asterisk');
            } else {
                w.setGlyph('tree-conifer');
            }
        }

        var time = new Date() - start;
        console.log('time:', time);
        test.ok(time < 10); //ms

        test.done();
    }
};