var should = require('chai').should();
var postRules = require('../../rules/post.rules');

describe('Post Rules', function(){
    it('should run', function(){
        let num = 10;
        num.should.be.a('number');
    });
});