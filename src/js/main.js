
//  scroll

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("scroll")
const remove_class_on_scroll = () => header.classList.remove("scroll")

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange + 100) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
  
})

//  mobile menu

const menuButton = document.querySelector(".header-toggle")
const headerNavigation = document.querySelector(".header-navigation")

menuButton.addEventListener( "click" , () => {
    menuButton.classList.toggle("open")
    headerNavigation.classList.toggle("open")
})

//	open system dropdowm

const systemDropdown = document.querySelector(".system-dropdown")
const systemDropdownBtn = document.querySelector(".system-dropdown__chosen")
const chosenInfo = document.querySelector(".chosen-info")
const systemDropdownList = document.querySelectorAll(".system-dropdown__list li")
const formSystem = document.querySelector(".form-system")

systemDropdownBtn.addEventListener( "click" , () => {
    systemDropdown.classList.toggle("open_list")
})

systemDropdownList.forEach(el => el.addEventListener( "click" , () => {
	chosenInfo.innerText = el.textContent
	systemDropdown.classList.remove("open_list")
	formSystem.value = el.textContent
}))

//	show percenr value

const orderFormRange = document.querySelector(".order-form__range");
const percentValue = document.querySelector(".range-info__percent-value");
percentValue.innerHTML = orderFormRange.value;

orderFormRange.oninput = function() {
    percentValue.innerHTML = this.value;
}
