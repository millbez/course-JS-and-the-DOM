document.addEventListener('keypress', function() {
    console.log("removing last child");
    document.querySelector('#hero_module').lastElementChild.remove();
})
