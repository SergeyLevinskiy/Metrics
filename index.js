const ACTIVE_SLIDE_CLASSNAME = 'slide-active';

const slideNodes = Array.from(document.querySelectorAll('.gallary_slide'));
const prevButtonNode = document.querySelector('.arrow_prev');
const nextButtonNode = document.querySelector('.arrow_next');
let activeId;

init();

function init() {
    activeId = 0;
    prevButtonNode.addEventListener('click', ()=>{
        setActiveSlideById(getPrevId());
    });
    nextButtonNode.addEventListener('click', ()=>{
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;
    slideNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
    slideNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}
function getPrevId() {
    return activeId === 0 ? slideNodes.length - 1 : activeId - 1; 
}
function getNextId() {
    return activeId === (slideNodes.length - 1) ? 0 : activeId + 1; 
}


const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const popupContentNode = document.querySelector('.js-popup_content')
const btnCloseNode = document.querySelector('.js-popup_close-btn');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}



const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';

const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger_content')


burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
