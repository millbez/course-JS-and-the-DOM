const hero = document.querySelector('.hero__module');
function removeElementOnce() {
    hero.lastElementChild.remove();
}
document.addEventListener('click', removeElementOnce);
