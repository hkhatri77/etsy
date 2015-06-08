// es5 polyfills, powered by es5-shim
// es6 polyfills, powered by babel
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var
// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
// start app
// new Router()
// }

"use strict";
require("es5-shim")
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var backbone = require('backbone')
    //import * as templates from "./templates.js"
    // import * as api from "./etsy-api.js"

var $ = require('jquery')
var api_key = `et5x6wlesyht6keumrk6223l`
var api_secret = `oo0scg8le0`


var url = `https:/openapi.etsy.com/v2/listings/active?api_key=${api_key}?callback=?`
var listing = (listing_id, listing_image_id) => `https:/openapi.etsy.com/v2/private/listings/{listing_id}/images/{listing_image_id}?callback=?`
var search = () => `https:/openapi.etsy.com/v2/private/listings/active?sort_on=created&sort_order=down?callback=?`


var getUrl = () => {
    return $.getJson(URL(api_key))
}

var getListing = () => {
    return $.getJson(listing(listing_id, listing_image_id))
}

var getSearch = (id) => {
    return $.getJson(search())
}
