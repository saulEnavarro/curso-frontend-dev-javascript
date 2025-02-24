
const navEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const menuCart = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector('.cards-container')
const shoppingDetClose = document.querySelector('.product-detail-close')

const menuHamb = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer=document.querySelector('#productDetail')



navEmail.addEventListener('click',toogleDeskMenu)
menuHamb.addEventListener('click',toogleMobileMenu)
menuCart.addEventListener('click',toogleshoppingCartContainerMenu)
shoppingDetClose.addEventListener('click',CloseProdcutDetailAside)

function toogleDeskMenu() {
    const isDetailProdClosed=productDetailContainer.classList.contains('inactive')
    const isshoppingCartContainerClosed=shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
       if (!isDetailProdClosed) {
        productDetailContainer.classList.add('inactive')
    }
    deskMenu.classList.toggle('inactive')
}

function toogleMobileMenu() {
    const isDetailProdClosed=productDetailContainer.classList.contains('inactive')
    const isshoppingCartContainerClosed=shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
       if (!isDetailProdClosed) {
        productDetailContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toogleshoppingCartContainerMenu() {
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive')
    const isDeskMenuClosed=deskMenu.classList.contains('inactive')
    const isDetailProdClosed=productDetailContainer.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDeskMenuClosed) {
        deskMenu.classList.add('inactive')
    }
    if (!isDetailProdClosed) {
        productDetailContainer.classList.add('inactive')
    }
        shoppingCartContainer.classList.toggle('inactive')
}
function OpenProdcutDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    deskMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}
function CloseProdcutDetailAside() {
    productDetailContainer.classList.add('inactive')
}


 const productList =[]
 productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 })
 productList.push({
    name:'Pantalla',
    price:1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 })
 productList.push({
    name:'Computador',
    price:300,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 })

 function renderProducts(arr) {
    for (product of arr){

        const productcard=document.createElement('div')
        productcard.classList.add('product-card')
    
        const imgProd=document.createElement('img')
            imgProd.setAttribute('src',product.image)
            imgProd.addEventListener('click',OpenProdcutDetailAside)
    
        const productInfo=document.createElement('div')
            productInfo.classList.add('product-info')
            const divInfo=document.createElement('div')
                const productPrice=document.createElement('p')
                    productPrice.innerText='$'+product.price;
                const productName=document.createElement('p')
                    productName.innerText=product.name;
            divInfo.appendChild(productPrice)
            divInfo.appendChild(productName)
        
        const productInfoFeature=document.createElement('figure')
            const productImgCart=document.createElement('img')
                productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        productInfoFeature.appendChild(productImgCart)
    
        productInfo.appendChild(divInfo)
        productInfo.appendChild(productInfoFeature)
        productcard.appendChild(imgProd)
        productcard.appendChild(productInfo)
        //Product 
    
        cardsContainer.appendChild(productcard)
    }
        
 }

 renderProducts(productList)















