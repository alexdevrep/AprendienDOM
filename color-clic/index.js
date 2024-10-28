document.addEventListener('DOMContentLoaded',function(){
    const buttons= document.querySelectorAll('.boton')
    buttons.forEach(button =>{
        button.addEventListener('click',function(){
            const value =this.getAttribute('value')
            document.querySelector('.color').textContent=value
            
        })
    })
})


