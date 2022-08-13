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
    const existingStyleTag = document.head.querySelector('style')
    if (existingStyleTag === null){
        const cssTemplateString = `.orderButton:hover{text-decoration: underline;text-decoration-color: white;}`;
        const styleTag = document.createElement("style");
        styleTag.innerHTML = cssTemplateString;
        document.head.insertAdjacentElement('beforeend', styleTag);
    }
}

function unprepareButton(){
    const button = document.querySelector('.orderButton')
    button.classList.remove('active')
    button.classList.add('inactive')
    button.classList.remove('pointer')
    button.innerHTML = "Selecione os 3 itens para fechar o pedido"
    const styleTag = document.head.querySelector('style')
    styleTag.remove()
}

function selectOption(option, menu){
    const selected = document.querySelector(`${menu} .selected`)
    if (selected !== null){
        if (selected === option){
            const selectedCheckmark = selected.querySelector('.checkmark')
            selected.classList.remove('selected')
            selectedCheckmark.classList.add('hidden')
            unprepareButton()
            return 0;
        }
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
    selectedDish = document.querySelector('.dishes .selected')
    selectedDrink = document.querySelector('.drinks .selected')
    selectedDessert = document.querySelector('.desserts .selected')
    const dish = document.querySelector('.confirm-menu .dish-selected')
    const drink = document.querySelector('.confirm-menu .drink-selected')
    const dessert = document.querySelector('.confirm-menu .dessert-selected')
    valueDish = Number(document.querySelector('.dishes .selected').querySelector('value').innerHTML)
    valueDrink = Number(document.querySelector('.drinks .selected').querySelector('value').innerHTML)
    valueDessert = Number(document.querySelector('.desserts .selected').querySelector('value').innerHTML)
    const total = document.querySelector('.total-price')
    menu.classList.remove('hidden')
    menu.classList.add('flex')
    blur.classList.remove('hidden')
    dish.querySelector('.dish').innerHTML = selectedDish.querySelector('h1').innerHTML
    dish.querySelector('.price').innerHTML = selectedDish.querySelector('h2').innerHTML
    drink.querySelector('.drink').innerHTML = selectedDrink.querySelector('h1').innerHTML
    drink.querySelector('.price').innerHTML = selectedDrink.querySelector('h2').innerHTML
    dessert.querySelector('.dessert').innerHTML = selectedDessert.querySelector('h1').innerHTML
    dessert.querySelector('.price').innerHTML = selectedDessert.querySelector('h2').innerHTML
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
    let order = `Olá, gostaria de fazer o pedido:\n- Prato: ${selectedDish.querySelector('h1').innerHTML}\n- Bebida: ${selectedDrink.querySelector('h1').innerHTML}\n- Sobremesa: ${selectedDessert.querySelector('h1').innerHTML}\nTotal: R$ ${totalValue}\n\nNome: ${name}\nEndereço: ${adress}`;
    let finalOrder = encodeURIComponent(order)
    window.open("https://wa.me/5516981377276?text=" + finalOrder, "_blank")
}