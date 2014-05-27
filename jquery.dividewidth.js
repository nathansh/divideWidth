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
			selector: '.item',
			plus: 0,
			minus: 0
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
			var items = dw.items.length + dw.settings.plus - dw.settings.minus; 
			var width = 100 / items;
			dw.items.each(function() {
				// Check if an item has a span, otherwise just set the width normally
				if ( $(this).data('divide_width-span') ) {
					span = $(this).data('divide_width-span');
					$(this).css('width', width * span + "%");
				} else {
					$(this).css('width', width + "%");
				}
			}); // each
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