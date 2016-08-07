"use strict";

var defaultOptions = {
		// your default options
	},
	options = {};

var service = {
	// Main Object
	
	/**
	 * Initializes middleware state
	 *
	 */
	init: function(options){
		if (typeof options === "object"){
			options = Object.assign(options, defaultOptions);
		}
	}
};

function <%= servicename %>(options){
	// Initialize default values from configuration
	service.init(options);
	
	/**
	 * <%= description %>
	 *
	 */
	return function(req, res, next){
		//Your custom logic
		next();
	};
}

module.exports = <%= servicename %>;