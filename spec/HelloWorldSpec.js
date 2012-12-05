describe("No modulo HelloWorld", function() {
  var hello;

  beforeEach(function() {
    hello = new HelloWorld();
  });

  describe("quando chamo a funcao 'say' sem parametros", function() {

    it("retorna 'HelloWorld'", function() {  
      expect(hello.say()).toEqual('Hello World');
    });

  });

});