describe('testing filters from module app that', function(){
	//Vamos instaciar o elemento e criar um mock para teste.
	var $filter,
		filteredItem;

	//Incluir o app
	beforeEach(module('app'));

	//Injetar os itens
	beforeEach(inject(function($injector){
		$filter = $injector.get('$filter');
		filteredItem = "John Doe";
	}));

	it('should reverse the word John Doe', function(){
		var finalItem = $filter('reverse')('John Doe');
		expect(finalItem).toBe('eoD nhoJ');
	});

	it('should reverse any word', function(){
		var finalItem = $filter('reverse')('Marcos');
		expect(finalItem).toBe('socraM');
	});

});