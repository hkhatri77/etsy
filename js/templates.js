export var toolbar = () => ` < div class = "toolbar" >
    < a href = "#" >HIPSEARCH< /a> < form >
    < input type = "search" >
    < /form> < /div>`

export var grid_item = (url, title) => `<a href="#">
            <img src="${url}">
            <div>
                <span>${title}</span>
                <span>${price}</span>
            </div>
        </a>`

export var details => () => `<a href="#">
            <img src="${url}">
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
            return `<a href="#">
                <img src="http://cogdellphotography.com/blog/wp-content/uploads/2012/05/JBC_0051.jpg">
                <div>
                    <span>${v.url}</span>
                    <span>${v.title}</span></div>
            </a>`

        }).join('')}
        
		< /div> 
     < /div>`
