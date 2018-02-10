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


    it('should return title, subtitle, text, and image Error for a empty object', function(){
        try {
            postServices.addPost({});
        } catch (error) {
            error.length.should.be.equal(4);
        }
    });

    it('should return title error when title is empty', function(){
        try{
            user.title = "    ";
            postServices.addPost(user);
        }catch(error){
            error.length.should.be.equal(1);
            error[0].should.be.equal(postForm.title.pt);
        }
    });
    it('should have default value of rascunho for status when undefined/null', function(){
        try {
            user.status = undefined;
            postServices.addPost(user);
        } catch (error) {
            //Should never run!
            true.should.be.equal(false);
        }
    });

    it('should not throw a error message validation', function(){
        postServices.addPost(user);
    });
});