export var toolbar = () => ` < div class = "toolbar" >
    < a href = "#" >HannahsEtsy< /a> < form >
    < input type = "search" >
    < /form> < /div>`

export var grid_item = (url, title) => `<a href="#">
            <img src="${https://openapi.etsy.com/v2/private/listings/{listing_id}/images/{listing_image_id}">
            <div>
                <span>${title}</span>
                <span>${price}</span>
            </div>
        </a>`

export var details => () => `<a href="#">
            <img src="${https://openapi.etsy.com/v2/private/listings/{listing_id}/images/{listing_image_id}">
            <div>
                <span>${title}</span>
            </div>
        </a>`
`

export var home => () => ` < div class = "container" >
    $ {
        toolbar()
    } < div class = "grid grid-2-400 grid-4-800" >
    $ {
        img.map((v) => {
            return `<a href="#details/${v.id}">
                <img src="${https://openapi.etsy.com/v2/private/listings/{listing_id}/images/{listing_image_id}">
                <div>
                    <span>${v.url}</span>
                    <span>${v.title}</span></div>
            </a>`

        }).join('')}

		< /div> 
     < /div>`
