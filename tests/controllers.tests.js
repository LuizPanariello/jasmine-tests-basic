//cria um grupo de itens
describe('Existing controller', function(){
	//Inicializa o módulo
	beforeEach(module('app'));
	var ctrl, scope;
	
	beforeEach(inject(function($injector){
		//Cria o nosso mock do backend
		$httpBackend = $httpBackend
		//Cria scope zerado
		$rootScope = $injector.get('$rootScope');

		//Cria e injeta controllers
		var $controller = $injector.get('$controller');
		ctrl = $controller('MainController', {
			$scope: $rootScope.$new()
		});
	}));

	//inicia um teste
	it('should greet on load', function(){
		expect(scope.greet).not.toBeUndefined();
		expect(scope.greet).toBe('Hi!');
	})
});