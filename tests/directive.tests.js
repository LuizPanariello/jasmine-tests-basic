describe('Testing my directives that', function() {
    var $compile;
    var $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('app'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('should replace the element with template content', function() {
        // Compila o html em um template de angularJS
        var element = $compile("<i-wanna-say-hi></i-wanna-say-hi>")($rootScope);
        
        // Atualiza o escopo!
        $rootScope.$digest();

        // Checa se o elemento contem o que está dizendo em .toContain
        expect(element.html()).toContain("I said hi already!");
    });
});