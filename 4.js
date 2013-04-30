

(function($) {
 	var Item = Backbone.Model.extend({
		defaults: {
			part1: 'hello',
			part2: 'world'
		}	 
	 });

 	var List = Backbone.Collection.extend({
		model: Item 
	});
 
	var ItemView = Backbone.View.extend({
		tagName: 'li',

		initialize: function() {
			alert( "Hello 2a" );
			_.bindAll( this, 'render' );
		},

		render: function() {
			alert( "Hello 2b" );
			$(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
			alert( "Hello 2c" + '<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>' );
			return this;
		}
	});

	var ListView = Backbone.View.extend({
		el: $('body'),				

		events: {
			//alert( "Hello event" );
			'click button#add': 'addItem'
		},
	
		initialize: function() {
			_.bindAll(this, 'render', 'addItem', 'appendItem' );

			this.collection = new List( {part1: "New", part2: "Bean"} );
			this.collection.bind('add', this.appendItem);

			this.counter = 0;
			this.render();
		},

		render: function() {
			var self = this;
			$(this.el).append("<button id='add'>Add list item</button>");
			$(this.el).append("<ul></ul>");
			alert( "Hello ?" );
			_(this.collection.models).each(function( item ) {self.appendItem( item ); }, this);
			alert( "Hello ?a" );
		},

		addItem: function() {
			this.counter++;
			alert( "Hello counter " + this.counter );
			var item = new Item();		

			item.set({part2: item.get('part2') + this.counter});
			this.collection.add( item );
		},

		appendItem: function(item) {
			alert("Hello 1");				
			var itemView = new ItemView({model: item});					
			alert("Hello 2");				
			$('ul', this.el).append(itemView.render().el);
			alert("Hello 3");				
		}
	});

	var listView = new ListView();

 }) (jQuery)
