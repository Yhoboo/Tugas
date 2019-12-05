const selectSlide= document.querySelector ('.presentSlide');
const jumbo = document.querySelector ('.jumbo');

selectSlide.addEventListener('click', function(e){
    if(e.target.className == 'slideSelect'){
        jumbo.src = e.target.src;
    }
})