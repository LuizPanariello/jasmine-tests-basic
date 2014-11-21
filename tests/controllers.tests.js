//cria um grupo de itens
describe('Existing controller', function(){
	//Inicializa o módulo
	beforeEach(module('app'));
	var ctrl, scope;
	
	beforeEach(inject(function($injector){
		//Cria o nosso mock do backend
		$httpBackend = $injector.get('$httpBackend');
		//Cria scope zerado
		$rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new();

		//Cria e injeta controllers
		var $controller = $injector.get('$controller');
		ctrl = $controller('mainController', {
			$scope: scope 
		});
	}));

	//inicia um teste
	it('should greet on load', function(){
		expect(ctrl).not.toBeUndefined();
		expect(scope.sayHi).toBe('Hi!');
	})
});