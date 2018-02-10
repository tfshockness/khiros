var should = require('chai').should();
var postServices = require('../../services/post.services');
const { postForm } = require('../../lookup/validationMessages');

describe('Validation inside of Post Rules', function(){

    var user;
    beforeEach(function(){
        //Use that to setup some config afer each Test
        //For example, set valu for that user variable.
        user = {
            title: "Some Title",
            subtitle: "Another thing",
            category: "Test",
            text: "I forgot my Text thats why!!!",
            image: "img/there/somewere.jpg",
            status: "draft",
            publishAt: "dont have anything here"
        }
    });


    it('should return title, subtitle, text, and image Error for a empty object');
    it('should return title error when title is empty');
    it('should have default value of rascunho for status when undefined/null');
    it('should not throw a error message validation');
});