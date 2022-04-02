let thumbnail = document.querySelectorAll(".slider__thumbnail")
const activeImg = document.querySelector(".slider__active-img")
for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click", () =>{
        let current = document.querySelectorAll(".slider__thumbnail--active")
        current[0].className = current[0].className.replace(" slider__thumbnail--active", "");
        thumbnail[i].className += " slider__thumbnail--active"
        activeImg.innerHTML = thumbnail[i].innerHTML
    })
}

/*responsive*/

const slider = document.querySelector(".slider__responsive__img-container")
let img = document.querySelectorAll(".slide")

const prevBtn = document.getElementById("slider__responsive__prev-btn");
const nextBtn = document.getElementById("slider__responsive__next-btn");

var counter = 1;
slider.style.transform = 'translateX(-100vw)';
nextBtn.addEventListener("click", () => {
    counter ++;
    slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    if(img[counter].id === 'first-clone'){
        counter = img.length - counter;
        slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    }
})
prevBtn.addEventListener("click", () => {
    counter --;
    slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    if(img[counter].id === 'last-clone'){
        counter = img.length -2;
        slider.style.transform = 'translateX(' + (counter * -100) + 'vw)';
    }
})

let overlay = document.querySelector(".overlay")

document.getElementById('nav-list-opener').addEventListener('click' , ()=>{openNav()})
document.getElementById("nav__overlay").addEventListener("click", () =>{closeNav()})
document.getElementById("nav__close").addEventListener("click", () =>{closeNav()})

function closeNav(){
    overlay.classList.remove('overlay--open')
}

function openNav(){
    overlay.classList.add('overlay--open')
}

/*product quantity*/

var productQuantityInput = document.getElementById("product--quantity")
var productQuantity = 0;
productQuantityInput.value = productQuantity

function decreaseQuantity(){
    productQuantity--;
    productQuantityInput.value = productQuantity
}
function increaseQuantity(){
    productQuantity++;
    productQuantityInput.value = productQuantity
}

productQuantityInput.addEventListener("input", ()=>{
    productQuantity = productQuantityInput.value
})

// document.getElementById("product--quantity").addEventListener("input", ()=>{
//     document.getElementById("product--quantity").value = productQuantity
// })


/*cart*/
const cart = document.querySelector(".cart")
document.getElementById("cart__open").addEventListener("click", ()=>{
    if(cart.className == "cart"){
        cart.classList.add("cart--visible");
    } else{
        cart.classList.remove("cart--visible");
    }
})

/*add to cart*/
const cartContent = document.querySelector(".cart__content");
document.getElementById("add-to-cart").addEventListener("click", ()=>{
    var numberOfProduct = document.querySelector(".number-of-product")
    if(productQuantity <= 0){
        alert("You can't add " + productQuantity + " product")
    }   
    else{
        cartContent.classList.remove("cart__content--empty")
        const cartProduct = document.getElementsByClassName("cart__product")
        if(cartProduct.length == 0){
            numberOfProduct.style.display = "flex"
            numberOfProduct.innerHTML = productQuantity;
            cartContent.innerHTML+=`
            <div class="cart__product">
            <div class="cart__product-img"><img src="../img/1.jpg" alt=""></div>
            <div class="cart__product-text">
            <div class="cart__product-name">Autumn Limited Edition...</div>
            <div class="cart__product-total">$125 * ${productQuantity} <p class="product-total">$${125 * productQuantity}</p> </div>
            </div>
            <div class="cart__product__remove-btn" id="cart__product__remove-btn"><i class="fa-solid fa-trash-can"></i></div>
            </div>
            <div class="cart__check-out"><button>Check Out</button></div>
            `;
        } else{
            cartProduct[0].remove()
            numberOfProduct.innerHTML = productQuantity;
            cartContent.innerHTML+=`
            <div class="cart__product">
            <div class="cart__product-img"><img src="../img/1.jpg" alt=""></div>
            <div class="cart__product-text">
            <div class="cart__product-name">Autumn Limited Edition...</div>
            <div class="cart__product-total">$125 * ${productQuantity} <p class="product-total">$${125 * productQuantity}</p> </div>
            </div>
            <div class="cart__product__remove-btn" id="cart__product__remove-btn"><i class="fa-solid fa-trash-can"></i></div>
            </div>
            <div class="cart__check-out"><button>Check Out</button></div>
            `;
        }
        document.querySelector(".cart__check-out").addEventListener("click", ()=>{
            alert("Thank you for your purchase!")
            cartProduct[0].remove()
            document.querySelector(".cart__check-out").remove()
            cartContent.classList.add("cart__content--empty")
            numberOfProduct.style.display = "none"
        })
        document.getElementById("cart__product__remove-btn").addEventListener('click', ()=>{
            cartProduct[0].remove()
            document.querySelector(".cart__check-out").remove()
            cartContent.classList.add("cart__content--empty")
            numberOfProduct.style.display = "none"
        })
    }
})