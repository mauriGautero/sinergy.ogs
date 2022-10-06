window.onscroll=()=>{
    let posicion=window.pageXOffset || document.documentElement.scrollTop;
    let laptop=document.getElementById('laptop');    
    let goal=document.getElementById('goal');    
    laptop.style.top=posicion * 0.1 +'px'
    goal.style.top=posicion * 0.1 +'px'

}