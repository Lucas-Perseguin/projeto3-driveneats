let valueDish = undefined;
let valueDrink = undefined;
let valueDessert = undefined;
let selectedDish = undefined;
let selectedDrink = undefined;
let selectedDessert = undefined;

function prepareButton(){
    const button = document.querySelector('.orderButton')
    button.classList.remove('inactive')
    button.classList.add('active')
    button.classList.add('pointer')
    button.innerHTML = "Fechar Pedido"
    const cssTemplateString = `.orderButton:hover{text-decoration: underline;text-decoration-color: white;}`;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = cssTemplateString;
    document.head.insertAdjacentElement('beforeend', styleTag);
}

function selectOption(option, menu){
    const selected = document.querySelector(`${menu} .selected`)
    if (selected !== null){
        const selectedCheckmark = selected.querySelector('.checkmark')
        selected.classList.remove('selected')
        selectedCheckmark.classList.add('hidden')
    }
    option.classList.add('selected')
    const checkmark = option.querySelector('.checkmark')
    checkmark.classList.remove('hidden')

    const dish = document.querySelector('.dishes .selected')
    const drink = document.querySelector('.drinks .selected')
    const dessert = document.querySelector('.desserts .selected')
    if (dish !== null && drink !== null && dessert !== null){
        prepareButton();
    }
}

function orderConfirmation(){
    const menu = document.querySelector('.confirm-menu')
    const blur = document.querySelector('.blur')
    selectedDish = document.querySelector('.dishes .selected').querySelector('h1').innerHTML
    const selectedDishPrice = document.querySelector('.dishes .selected').querySelector('h2').innerHTML
    selectedDrink = document.querySelector('.drinks .selected').querySelector('h1').innerHTML
    const selectedDrinkPrice = document.querySelector('.drinks .selected').querySelector('h2').innerHTML
    selectedDessert = document.querySelector('.desserts .selected').querySelector('h1').innerHTML
    const selectedDessertPrice = document.querySelector('.desserts .selected').querySelector('h2').innerHTML
    const dish = document.querySelector('.confirm-menu .dish-selected .dish')
    const dishPrice = document.querySelector('.confirm-menu .dish-selected .price')
    const drink = document.querySelector('.confirm-menu .drink-selected .drink')
    const drinkPrice = document.querySelector('.confirm-menu .drink-selected .price')
    const dessert = document.querySelector('.confirm-menu .dessert-selected .dessert')
    const dessertPrice = document.querySelector('.confirm-menu .dessert-selected .price')
    valueDish = Number(document.querySelector('.dishes .selected').querySelector('value').innerHTML)
    valueDrink = Number(document.querySelector('.drinks .selected').querySelector('value').innerHTML)
    valueDessert = Number(document.querySelector('.desserts .selected').querySelector('value').innerHTML)
    const total = document.querySelector('.total-price')
    menu.classList.remove('hidden')
    menu.classList.add('flex')
    blur.classList.remove('hidden')
    dish.innerHTML = selectedDish
    dishPrice.innerHTML = selectedDishPrice
    drink.innerHTML = selectedDrink
    drinkPrice.innerHTML = selectedDrinkPrice
    dessert.innerHTML = selectedDessert
    dessertPrice.innerHTML = selectedDessertPrice
    let totalValue = (valueDish + valueDrink + valueDessert).toFixed(2)
    total.innerHTML = `R$ ${totalValue}`
}

function closeMenu(){
    const menu = document.querySelector('.confirm-menu')
    const blur = document.querySelector('.blur')
    menu.classList.remove('flex')
    menu.classList.add('hidden')
    blur.classList.add('hidden')
}

function sendOrder(){
    const name = prompt('Qual o seu nome?')
    const adress = prompt('Qaul é o seu endereço?')
    let totalValue = (valueDish + valueDrink + valueDessert).toFixed(2)
    let order = `Olá, gostaria de fazer o pedido:\n- Prato: ${selectedDish}\n- Bebida: ${selectedDrink}\n- Sobremesa: ${selectedDessert}\nTotal: R$ ${totalValue}\n\nNome: ${name}\nEndereço: ${adress}`;
    let finalOrder = encodeURIComponent(order)
    window.open("https://wa.me/5516981377276?text=" + finalOrder, "_blank")
}