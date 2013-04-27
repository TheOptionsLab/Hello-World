(function($) {

	var ListView = Backbone.View.extend({
		el: $('body'), // attaches 'this.el' to an existing element.

		initialize: function() {
			_.bindAll( this, 'render' );

			this.render();
		},		

		render:function() {
			$(this.el).append("<ul> <li>hello world</li> </ul>");
		}
			
			
	});


	var listView = new ListView();


  })(jQuery);
