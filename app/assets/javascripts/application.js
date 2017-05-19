//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require tether
//= require_tree .
//
//= require bootstrap-sprockets
//= require bootstrap

$(document).on('turbolinks:load', function() {


	//The below is for clickable rows on tables.
	jQuery(document).ready(function($) {
	    $(".clickable-row").click(function() {
	        window.document.location = $(this).data("href");
	    });
	});
});
