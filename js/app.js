
let button =  document.querySelector('.button')

let sidebar = document.querySelector('.sidebar');
// <i class="bi bi-x"></i>
function rato () {
    sidebar.classList.toggle('active')
    

    if(sidebar.classList.contains('active') == true){
        
        button.innerHTML = '<i class="bi bi-arrow-return-left"></i>'
        
    } else{
        
        button.innerHTML = '<i class="bi bi-arrow-return-right"></i>'
    }



}

button.addEventListener("click", rato)

