document.addEventListener('keypress', function() {
    console.log("removing first child");
    document.querySelector('#contain-all').firstElementChild.remove();
})
