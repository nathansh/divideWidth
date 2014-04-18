/*!
* divideWidth 1.0-beta1
* 
* Written by Nathan Shubert-Harbison for Domain7 (www.domain7.com) - #humanizetheweb
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
* 
*/

(function($) {

	var dw = {

		defaults: {
			 selector: '.item'
		},
		settings: false,
		items: false,

		init: function(that) {
			return $(that).each(function(index) {				
				dw.items = $(this).find(dw.settings.selector);
				dw.sizeItems();
			});
		}, // init
		
		sizeItems: function() {
			dw.items.css('width', 100 / dw.items.length + "%");
		}, // sizeItems
		
		methods: {

			refresh: function() {
				dw.sizeItems();
			}, // refresh
			
			kill: function() {
				dw.items.css('width', '');
			} // kill
			
		} // methods

	}; // dw

	$.fn.divideWidth = function(options) {

			// Check if we're instantiating plugin with options or calling a method. Normal stuff first.
			if ( !dw.methods[options] ) { 
			
				// Merge settings
				dw.settings = $.extend(dw.defaults, options);

				// Return main method
				var output = dw.init(this);
				return output;
			
			} else {

				return this.each(function(index) {
					dw.methods[options].apply(this, Array.prototype.slice.call($(this)));
				});
			}


	}; // divideWidth

}(jQuery));