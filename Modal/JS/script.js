const btnModal = document.querySelector("#open-modal");
const btnClose = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector(".modal-body")

const body = document.body;

function openModal(){

    btnModal.addEventListener("click", function(){
        modal.style.opacity = "10" ;
        body.append(modal);
        body.style.transition ="3s";
        body.style.background ="grey";
      
       
    })

    
}
openModal();

function closeModal(){
    btnClose.addEventListener("click", function(){
        modal.style.opacity ="0";
        modal.style.transition = "3s"
        setTimeout(function() {
            modal.remove();
        }, 1500);
        body.style.transition ="2s";
        body.style.background="gainsboro";
        
        
        

        
    })
   
}

closeModal();