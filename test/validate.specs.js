const assert = require('chai').assert;
global.window = global;
//enlaza el archivo
require('../src/js/validate.js');

// valiando email
describe('validar emails', () => {
	describe('verificar si existe el @', () => {
		it('deberia tener solo un @ ', () => {
			assert.equal(validateEmail('example@email.com'), true);
			assert.equal(validateEmail('example@@email.com'), false);
			assert.equal(validateEmail('exampleemail.com'), false);
		});
		it('deberia tener un @ antes de un dominio', () => {
			assert.equal(validateEmail('@email.com'),true);
			assert.equal(validateEmail('email.@com'),false);
		});
	});
	(describe('verificar si hay un dominio', () => {
		it('dberia tener un punto y caracteres del alfabeto', () => {
			assert.equal(validateEmail('example@email'), false);
			assert.equal(validateEmail('example@email.'), false);
		});
	}));
});

// valiando password
describe('validar password', () =>{
	describe('varificar que contenga maximo 8 y minimo 6 caracteres, que sean numeros y sin espacion en blanco', () => {
		it('verificar que contenga un maximo de 8 caracteres y minimo 6',() =>{
			assert.equal(validatePassword('12345678'), true);
			assert.equal(validatePassword('123456'), true);
			assert.equal(validatePassword('123456789'), false);
			assert.equal(validatePassword('12345'), false);
		});
		it('verificar que contenga solo numeros',() =>{
			assert.equal(validatePassword('12345678'), true);
			assert.equal(validatePassword('12a4g6'), false);
			
		});
		it('verificar que no contenga espacio en blanco',() =>{
			assert.equal(validatePassword('12345678'), true);
			assert.equal(validatePassword('12 34'), false);
		});
	});
});

// validar numero tarjeta bip

describe('validar numero tarjeta bip', () =>{
	describe('verificar que contenga 8 caracteres y sean solo numeros y que no contenga espacio en blanco',() =>{
		it('verificar que contenga 8 caracteres',() =>{
			assert.equal(validateBipCard(12345678),true);
			assert.equal(validateBipCard(1234567),false);
			assert.equal(validateBipCard(123456789),false);
		});
		it('verificar que solo sean numeros',() =>{
			assert.equal(validateBipCard('12345678'), true);
			assert.equal(validateBipCard('12a4g6'), false);
		});
		it('verificar que no contenga espacio en blanco',() =>{
			assert.equal(validateBipCard('12345678'), true);
			assert.equal(validateBipCard('12 34'), false);
		});
	});
});