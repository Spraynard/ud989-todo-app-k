/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			//Adding 'Priority' to each todo object
			priority: false,
			highPriority: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		// Toggle the Priority state of this todo item.
		togglePriority: function() {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the `High Priority` state of this todo item
		toggleHighPriority: function () {
			this.save({
				highPriority: !this.get('highPriority')
			})
		}
	});
})();
