
 var toolbar = () => `
 <div class="container">
    <div class="toolbar">
        <div class="logo"> 
            <a href="#home"><span>Hannahs</span>Etsy</a>
         </div>
            <form>
                <input type="submit" class="submit" value="Search" style="font-family: Arial; font-size: 16px">
                <input type="search" class ="search">
            </form>
    </div>`

// var shops = (shops) => `
//     	<div class="shop_cont">
//     		// <div class="content grid grid-2-400">
//       //   		${shops.map((v, i) => { 
//       //   			return `<a href="#shops/${shops[i].shop_id}">
//       //       	<img src="${shops[i].Images[0].url_170x135}">
//       //       	<p> ${shops[i].title} $${shops[i].price}</p>
//         	//</a>` 
//    	//</div>`


export var details = (v) =>`
${toolbar()}
        <div class="details">
        ${v.map((v,i) => {
        return `<img class="det_img" src=${v.Images[i].url_570xN}>
                   <div class="greenpart">
                    	<div class="title_cont">
                    		<p class="desc_title">${v.title}</p>
                    		<pre>$${v.price} <span>USD</span></pre>
                    		<pre>only ${v.quantity} available</pre>
                    		<h6>Overview</h6>
                    		<pre>Who Made: ${v.who_made}</pre>
                    		<pre>Materials: ${v.materials}</pre>
                    		<input type="submit" class="atc" value="Add to Cart">
                    	</div>
                    </div>
                    <div class="bluepart">
                    </div>
                    <div class="desc_cont">
                    	<p class="det_desc">${v.description}</p>
              		</div>
            </a>`}).join('') }
            </div>`


export var home = (listing) => `
<div class="container">
    ${toolbar()}
    <div class="content grid grid-2-300 grid-4-600">
        ${listing.map((v, i) => { 
        	return `<a href="#listings/${listing[i].listing_id}">
            	<img src="${listing[i].Images[0].url_170x135}">
            	<p> ${listing[i].title} <span>$${listing[i].price}</span></p>
        	</a>
        	` 
        }).join('') }
    </div>
</div>
`