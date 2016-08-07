/* globals describe, before, after, it */
"use strict";

var <%= servicename %> = require(".."),
	should = require("chai").should(),
	port = 3001,
	app;
	
describe("Scenario: ", function(){
	before(function(){
		
	});
	
	after(function(){
		
	});
	
	describe("When module is created", function(){
		it("It should be a function", function(done){
			let service = <%= servicename %>();
			service.should.be.a("function");
		});
	});
});

