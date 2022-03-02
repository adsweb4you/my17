let next  = document.querySelector('.btn-right');
let prev  = document.querySelector('.btn-left');
let sliders = document.querySelectorAll('.intems');


next.addEventListener('click', function(){
    let active = document.querySelector('.intems.active');


    // if(sliders){
    //     document.querySelector('.prev').classList.remove('prev')
    // }

    if(document.querySelector('.prev') != null){
        document.querySelector('.prev').classList.remove('prev')

        
    }
 
       active.classList.replace('active', 'prev')
    
    if(active.nextElementSibling !== null){
      active.nextElementSibling.classList.add('active')
     
    }else{
        sliders[0].classList.add('active')
    }
   
})

prev.addEventListener('click', function(){
    let active = document.querySelector('.intems.active');


    // if(sliders){
    //     document.querySelector('.prev').classList.remove('prev')
    // }

    if(document.querySelector('.prev') != null){
        document.querySelector('.prev').classList.remove('prev')

        
    }
 
       active.classList.replace('active', 'prev')
    
    if(active.previousElementSibling !== null){
      active.previousElementSibling.classList.add('active')
     
    }else{
        sliders[sliders.length - 1].classList.add('active')
    }
   
})