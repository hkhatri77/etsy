"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var Backbone = require('backbone')
import * as templates from "./templates.js"
import * as api from './etsy-api.js'



var EtsyRouter = Backbone.Router.extend({
	routes: {
		'listings/:id': 'details',
		'search/:keywords': 'search',
		'*default':'home'
	},
	home: function(){

		api.getListings().then((json)=> {
		document.body.innerHTML= templates.home(json.results)
		})
	},
	details:function(id){
		api.getListing(id).then((json)=>{
		var v = json.results
		document.body.innerHTML = templates.details(v) 
	})
},
search: function(keywords) {
	api.getSearch(keywords).then((keywords)=> {
	document.body.innerHTML=templates.home(keywords.results)
})

},
	initialize:function(){
		Backbone.history.start()

	},
})

var router = new EtsyRouter()

$('body').on('submit', 'form', (event) => {
    event.preventDefault();
	window.location.hash = `search/${document.querySelector(".search").value}`
})
