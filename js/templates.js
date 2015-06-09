// just 
 var toolbar = () => `
 <div class="container">
    <div class="toolbar">
        <div class="logo"> 
            <a href="#home">HannahsEtsy</a>
            </div>
            <form>
                <input type="submit" class="submit">
                <input type="search" class ="search" placeholder="Search">
            </form>
    </div>`



export var details = (v) =>`
${toolbar()}
        <div class="details">
        ${v.map((v,i) => {
        return `<img src=${v.Images[i].url_570xN}>
                    <p>${v.title}</p>
                    <p>${v.description}</p> 
            </a>`}).join('') }
            </div>`


export var home = (listing) => `
<div class="container">
    ${toolbar()}
    <div class="content grid grid-2-400 grid-4-900 grid-6-1200">
        ${listing.map((v, i) => { 
        	return `<a href="#listings/${listing[i].listing_id}">
            	<img src="${listing[i].Images[0].url_170x135}">
            	<p> ${listing[0].title} $${listing[0].price}</p>
        	</a>
        	` 
        }).join('') }
    </div>
</div>
`