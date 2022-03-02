let byid = document.getElementById('pid'); //ეძებს ელემენტს რომელსაც აქვს პარამეტრის შესაბამისი id
let byclass = document.getElementsByClassName('myp'); //ეძებს ელემენტებს რომელსაც აქვს პარამეტრის შესაბამისი class (ობიექტის თვისება რომელსაც აქვს მასივი)
let bytag = document.getElementsByTagName('p'); //ეძებს ელემენტებს რომელსაც აქვს პარამეტრის შესაბამისი ტეგი (ობიექტის თვისება რომელსაც აქვს მასივი)

let byquer = document.querySelector('#pid'); //ეძებს ელემენტს   css სელექტორით
let byquerall = document.querySelectorAll('p'); //ეძებს ელემენტებს   css სელექტორით (array)

// for (let i = 0; i < bytag.length; i++) {
//     const element = bytag[i];
//     element.innerHTML = "TST";
// }

byquerall.forEach(p =>{
    p.addEventListener('click', function(event){
 
        this.innerText = "ახალი ტექსტი"
    })
})
 

// byquer.addEventListener("click", function(){
//      this.innerText = "კლიკის ივენთი შესრულდა"
// })

//byid.innerHTML = `<span> სპან </span>`; // არენდერებს html
//byid.innerText = `<span> სპან </span>`; // არენდერებს მხოლოდ ტექსტს


let plus = document.querySelector('.incr');
let minus = document.querySelector('.decr');
let reset = document.querySelector('.reset');
let number = document.querySelector('.num');
plus.addEventListener('click', function(){
    number.innerText++;
})

minus.addEventListener('click', function(){
    number.innerText--;
})


reset.addEventListener('click', function(){
    number.innerText = 0;
})

let mydiv = document.querySelector('.testLcass');

document.querySelector('.myclas').addEventListener('click', function(){
      // mydiv.classList[0]; გვიბრუნებს ელემენტის კლასებს (მასივის სახით)
     // mydiv.classList.add('bg-dark', 'rounded'); ახალი კლასის/ების ჩამატება 
    // mydiv.classList.remove('bg-dark', 'testLcass'); კლასის წაშლა 
   // mydiv.classList.toggle('bg-dark'); კლასის წაშლა / მინიჭება
  // mydiv.classList.contains('bg-dark') კლასის გადამოწმება
 // mydiv.classList.replace('bg-dark', 'bg-danger'); კლასის ჩანაცვლება
 console.log()
})


document.querySelector('.mynavbar').addEventListener('click', function(){
    document.querySelector('.side-nav').classList.toggle('show')
})

document.addEventListener('click', function(event){
 
    event.target.classList[0] == "side-nav" || event.target.classList[1] == "mynavbar"  ?   '' :  document.querySelector('.side-nav').classList.remove('show')
})


let butt = document.querySelector('.attr');

butt.addEventListener('click', function(){

    document.querySelector('html').setAttribute('lang', 'ka');

    //let type = document.querySelector('.myinp').getAttribute('type'); // ატრიბუტის დაბრუნება
    // let type = document.querySelector('.myinp').type // ატრიბუტის დაბრუნება (შემოკლება)
    // document.querySelector('.myinp').setAttribute('value', '55') // ატრიბუტის მინიჭება  
   //  document.querySelector('.myinp').type = "password" // ატრიბუტის მინიჭება   (შემოკლებით)
   // document.querySelector('.myinp').removeAttribute('required') // ატრიბუტის წაშლა
   // document.querySelector('.myinp').setAttribute('value', '')
  // document.querySelector('.myinp').value = '';
  //let dataid = document.querySelector('.myinp').getAttribute('data-id');
 
 
  css('.myinp', {
      backgroundColor:"blue",
      borderRadius:"35px",
      padding:"12px",
      border:"1px solid green"
  }
  )


//   event
})



function css(selector, styles){

    for (const prop in styles) {
        let props = prop;
        let propsval =  styles[prop];
        console.log(props,propsval )
        //document.querySelector(selector).style[prop] = propsval
    }

}


document.querySelector('.thog').addEventListener('click', function(){
    let sinput = document.querySelector('.myinp');

    if (sinput.type == "password") {
        sinput.type = "text"
        this.classList.replace('bi-eye-slash', 'bi-eye')
    }else{
        sinput.type = "password";
        this.classList.replace('bi-eye' ,  'bi-eye-slash')
    }

})


let inner = document.querySelector('#inner');

for (let s = 0; s < 4; s++) {
 let div = document.createElement('div'); // ქმნის html ელემენტს
let h1 = document.createElement('h1');
h1.classList.add('text-white');
h1.textContent = "ჩემი შექმნილი კონტენტი" + s; // ანიჭებს ტექსტს
div.appendChild(h1)
div.classList.add('bg-dark', 'p-3');
div.style.backgroundColor = "red"; 
    //inner.appendChild(div); // კონტენტის დამატება ბოლოს
    inner.prepend(div) // კონტენტის დამატება თავში
}

 
let inputs = document.querySelector('.myinputs');
let tags = document.querySelector('#tags');
inputs.addEventListener('keypress', function(e){
   if (e.keyCode == 13) {
    
    let span = document.createElement('span');
    let i = document.createElement('i');
    i.classList.add('bi',  'bi-x-lg', 'ms-2', 'text-danger');
    span.classList.add('spantags');
    span.textContent = this.value;
    span.appendChild(i)
    this.value = ''
    tags.appendChild(span);
   

   let removed = document.querySelectorAll('.spantags');

   removed.forEach(rem=>{
       rem.addEventListener('click', function(e){
      let confi =   confirm('გსურთ წაშლა?');
 
          if (e.target.nodeName == "I" && confi) {
                  this.remove(); 
          }
      
       })
   })
}
})

let todo = document.querySelector('.todo');
let ul = document.createComment('ul');
let ins = 0;
let outs = document.querySelector('#todooutput');
let cou = document.querySelector('.counts');


todo.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
    let li = document.createElement('li');
    li.classList.add('mycl'+ins);
    let i = '<i class="bi bi-pencil-fill"></i>';
    let del = document.createElement('i');
    del.classList.add('bi', 'bi-trash2');
    del.setAttribute('data-id', ins);
 
    li.innerText  = this.value;
    li.innerHTML += i;
    li.appendChild(del)

    ins++;
    outs.appendChild(li);
    cou.innerText++;
    this.value = ''
   
    del.addEventListener('click', function(){
        cou.innerText--;
        let id = this.getAttribute('data-id');
        document.querySelector('.mycl'+id).remove()
    })
 
   //  let trash = document.querySelectorAll('.bi-trash2');
 
// trash.forEach(tr=>{
//     // tr.addEventListener('click', function(){
//     //     console.log("sad")
//     //     cou.innerText--;
//     //     let id = this.getAttribute('data-id');
//     //     document.querySelector('.mycl'+id).remove();
//     // })
//     console.log(tr);
// })
}
 
})


let chil = document.querySelector('#mycont');
let par = document.querySelector('#par');
// chil.parentElement.style.color = "red"
console.log(chil.nextElementSibling); //შემდეგი ელემენტი
console.log(chil.parentElement); // მშობელი ელემენტი
console.log(par.children); // შვილი ელემენტები (მასივი)
console.log(chil.previousElementSibling); //წინა ელემენტი
 

 
let tabsbutton = document.querySelectorAll('.mytablist');

tabsbutton.forEach(el=>{
    el.addEventListener('click', function(){
     document.querySelector('.mytablist.active').classList.remove('active');
     this.classList.add('active');
      document.querySelector('.datalstab.active').classList.remove('active');
      document.querySelector(this.getAttribute('data-id')).classList.add('active')
    })
    
})