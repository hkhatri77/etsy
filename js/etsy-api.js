var $ = require('jquery'),

api_key = "et5x6wlesyht6keumrk6223l",
apisecret="oo0scg8le0",

url = (api_key)=> `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${api_key}&includes=Images`,
listing = (api_key, listing_id) => `https://openapi.etsy.com/v2/listings/${listing_id}.js?callback=?&api_key=${api_key}&includes=Images`,
search = (api_key, category_path) => `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${api_key}&includes=Images&keywords=${category_path}`,
users = () => `https://openapi.etsy.com/v2/users/testusername.js?callback=?&api_key=${api_key}`,
shops = (api_key, shop_id) => `https://openapi.etsy.com/v2/shops/${shop_id}/listings/active.js?callback=?&api_key=${api_key}&includes=Images`;
							   

export var getShowEtsyListing = () => { 
	return $.getJSON(url(api_key)).then((data) => { 
		return data	
	})
}

export var getListing = (listing_id) => {
	return $.getJSON(listing(api_key, listing_id)).then((data) => {
		return data
	})
}

export var getSearch = (category_path)=>{
	return $.getJSON(search(api_key, category_path)).then((data) => { 
		return data
	})
}

export var getShopListing = (shop_id) => {
	return $.getJSON(shops(api_key, shop_id)).then((data) => {
		return data
	})
}

