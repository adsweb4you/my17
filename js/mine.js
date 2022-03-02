let years = 3;

document.getElementById("app").innerHTML += `მე ვსწავლობ it step აკადემიაში    ${years}   წელია` ;

let sm = document.getElementById("apps");
 

// =============  data type ============== //

let str = "გიორგი"; //string
let num = 300; // number
let arr = ["19.12.1950", "19.06.1999", "19.06.1999"]; //array
let obj = {color:["red", "grey", "white"]}; //object
let tr = true; //boolean
let fal = false; //boolean
let unde =  undefined; //undefined
let nulls = null; //null
let nan = NaN; //NaN
let fun = function(){}; // function

// =============  end data type ============== //





let teststring = `          მეს ვსწავლობ @ front-end პროგრამირებას    ${num} front-end  Front-End   it step აკადემიაში       `;
// let img = 'img/slider.png';
// let card = `<div class="card">
//   <img src="${img}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${teststring}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;


// load.innerHTML = card;

console.log(teststring.slice(2));
/* =============  string method  
teststring.search("@") // ეძებს სიმბოლოს და  აბრუნებს მის ინდექსს
(teststring.slice(15,-15) // სტრინგის ჭრა
teststring.replaceAll("front-end", "back-end") // სტრინგში მნიშვნელობების ჩანაცვლება
 teststring.match(/front-end/gi) // ეძებს სიმბოლოებს ან სიტყვებს და გადაყავს მასივში
teststring.split(" ") // გადაყავს სტრინგი მასივში
teststring.toUpperCase() // სტრინგის სიმბოლოების გადადიდება
teststring.startsWith("მეს") // ამოწმებს იწყება თუ არა სტრინგი კონკრეტული მნიშვნელობით
teststring.endsWith("მეს")  // ამოწმებს მთავრდება თუ არა სტრინგი კონკრეტული მნიშვნელობით
teststring.trim()// შლის სიცარიელეს მარჯვენა და მარცხენა მხარეს
  end  string method ============== */ 


  let y = "18";
  let x = "6";
  // let z = y * x;

  // console.log( Number(y) +  Number(x))


  function   mycalc(valute){
    let num1 = 25;
    let num2 = 25;

     return `${num1 + num2} ${valute}`;
  }

  console.log(mycalc("₾"));
  console.log(mycalc("$"));
  console.log(mycalc("€"));

 
  function $(selector) {
    return document.getElementById(selector);
  }

  function html(selector) {
      return  innerHTML = selector;
  } 

  $("s1").style.backgroundColor = "red";
  $("s2").style.backgroundColor = "green";
  $("s3").style.backgroundColor = "blue";
  $("s4").style.backgroundColor = "yellow";

  // create function
 function myfun() {
  //  alert('asd');
 }

 //create virable  == function
 let ts = myfun();

//  
 ts

 function ss(a, b) {
   return a * b;
 }

console.log(ss(5,5))
console.log(ss(5,2))
console.log(ss(5,8))
console.log(ss(5,2))

function  bigtext(text) {
  return text.toUpperCase();
}

console.log(bigtext('asjkdhsjkhfsjdkhfsd'))



let gl = "global";

function changeVir(){
  gl = "new global";
}

changeVir();

console.log(gl);

function changeText(text, str, name){
  return text.replaceAll(str, name);
}

console.log(changeText("მე ვსწავლობ @ front-end პროგრამირებას ", "ვსწავლობ", "ვსწავლობდი"))


function card(){
  let mycards = `
  <div class="card" >
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `

  load.innerHTML = mycards;
}

card();

function conver(x,y, round){
  return (x * y).toFixed(round)
}

console.log(conver(25.7, 35.780, 1));
console.log(conver(25.7, 35.780, 2));
console.log(conver(25.7, 35.780, 3));


let name2 = (name2 , xz) => {
   return  console.log(name2) 
}

name2("მნიშვნელობა")

let Phone = {
  brand:"Xiamo",
  model:"poco 3",
  color:"mate black",
  camera:"40mp",
  price:1500,
  discount:false,
  img:"https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_neu.jpeg",
  calcs:function(count){
    return this.price * count;
  }

}

// ყინავს ობიექტს , აღარ შეგვიძლია მასში ჩარევა ცვლილების შეტანა
Object.freeze(Phone);


Phone.model = "poco 4x";

delete Phone.model;

// იღებს ყველა თვისებას და გადაყავს მასივში
let onlyprop = Object.keys(Phone);


// იღებს ყველა თვისების მნიშვნელობას და გადაყავს მასივში
let onlyval = Object.values(Phone);

// იღებს ყველა თვისებას და მის მნიშვნელობას   გადაყავს მასივში
let allent = Object.entries(Phone);

console.log(allent )


let ClassRoom = ["ნიკა", "საბა", "თორნიკე", "ლიზი", "თამარი", "სანდრო", "ნიკა", "ანდრია"];

let numbarr = [15, 25, 14, 8888, 9878,77, 354, 1, 6, 8,7]

// let nwarr = ClassRoom.forEach(el => {
//  return el + " TESTS " ;
// })
 
// let nwarr = ClassRoom.map((el, index) => {
//   return el + index   ;
//  })

 



for (let i = 0; i < ClassRoom.length; i++) {
 //content
 let element = ClassRoom[i];
 document.getElementById('stud').innerHTML +=`<p> ${element}  </p>`;
  
}
 

/* ========== array method 

ClassRoom.shift();// მასივის დასაწყისში პირველი ელემენტის წაშლა
ClassRoom.pop();// მასივის   ბოლო ელემენტის წაშლა

ClassRoom.unshift("გიორგი"); // მასივის დასაწყისში ახალი ელემენტის ჩამატება
ClassRoom.push("ალექსანდრე"); // მასივის ბოლოს ახალი ელემენტის ჩამატება


ClassRoom.splice(3,2, "ზურა", "სალომე"); // მასივში ახალი ელემენტის წაშლა და ჩამატება

let newarr = ClassRoom.some(function(el){
   return el == "ნიკა";
}) // ამოწმებს მასივის ერთი წევრი თუ მაინც აკმაყოფილებს პირობას აბრუნებს boolean


let newarr = ClassRoom.every(function(el){
   return el.length >  2;
}) // ამოწმებს მასივის ყველა თუ აკმაყოფილებს პირობას აბრუნებს  boolean

let newarr = ClassRoom.find(function(el){
   return el  == "ნიკაs";
}) // ეძებს მასივის შიგნით  გადაცემული პირობის მიხედვით აბრუებს 1 პირველ ელემენტს 

let newarr = ClassRoom.filter(function(el){
   return el  == "ნიკაs";
}) // ეძებს მასივის შიგნით  გადაცემული პირობის მიხედვით აბრუებს  ახალ მასივს

ClassRoom.sort() // სორტირება A_z
ClassRoom.sort().reverse()  // სორტირება Z_a


let newarr = numbarr.sort((a,b) =>{
  return a - b
}); // რიცხვების სორტირება ზრდადობით
 

// let nwarr = ClassRoom.forEach(el => {
//  return el + " TESTS " ;
// }) გადაუვლის მასივის ყველა ელემენტს  არ ქმნის ახალ მასივს
 
// let nwarr = ClassRoom.map((el, index) => {
//   return el + index   ;
//  }) გადაუვლის მასივის ყველა ელემენტს  ქმნის ახალ მასივს

======== */


let Products = [
  {
    title:"Apple AirPods 3 White",
    price:699,
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0156556_apple-airpods-3-white_550.jpeg",
    color:"#000",
    descr:"Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Force sensor",

  },

  {
    title:"Apple AirPods 5 White",
    price:699,
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0156558_apple-airpods-3-white_550.jpeg",
    color:"#000",
    descr:"Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Force sensor",

  },

  {
    title:"Apple AirPods 4 White",
    price:600,
    cat:"სპორტი",
    img:"",
    active:true,
    color:"2000/25/07",
    descr:"Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Force sensor",

  },

]

// Products = Products.filter(element =>{
//   return element.price == 888;
// })


Products.forEach(el => {
 
  let btns = el.price == 699 ? 'btn-danger' : 'btn-primary';

  let tsts = el.cat == "სპორტი" &&  el.active == true ? 'სპორტი'  : ''

  let mycard1 = `
  <div class="col-lg-4">
  <div class="card" >
  <img src="${el.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el.title}</h5>
    <p class="card-text">${el.descr}</p>
    <p class="btn ${btns}">${el.price}</p>
    ${tsts}
    <button class="btn  " style="background-color:${el.color}"> </button>
   </div>
  </div>
</div>
  `

  document.getElementById("apps").innerHTML += mycard1;
})


if(3 == 4){
  console.log('if');
}else if(5 > 6){
  console.log('else if');
}else if(8 < 5){
  console.log("else if 1")
}else{
  console.log("else")
}

let xs = "ტესტ";

switch (xs) {
  case 25:
    console.log(xs)
    break;

    case 15:
      console.log(xs)
      break;

      case "ტესტ":
        console.log(xs)
        break;

        case 44:
          console.log(xs)
          break;

          case 99:
            console.log(xs)
            break;

  default:

    console.log("default")

    break;
}

let sms = 1;

let mysms = sms == 0 ? 85 : 44;


console.log(mysms);

/* logical

=  // მინიჭების ოპერატორი
==  // შედარების ოპერატორი (ადარებს ერთმანეთს მხოლოდ მნიშვნელობებს)
===  // შედარების ოპერატორი (ადარებს ერთმანეთს   მნიშვნელობებს და ტიპებს)
>    // მეტობა
<     // ნაკლებობა
>=     // მეტია ან ტოლია
>=      // ნაკლებია ან ტოლია
!        // შებრუნების ოპერატორი (არ)
||        // ან ოპერატორი (or)
&&         // და ოპერატორი
*/

let d = new Date();

let year = d.getFullYear(); // გვიბრუნებს წელს
let month = d.getMonth() + 1; // გვიბრუნებს თვეს
let day = d.getDate(); // გვიბრუნებს რიცხვს
  d.setHours(21);
let hour = d.getHours(); // გვიბრუნებს საათს
let min = d.getMinutes(); // გვიბრუნებს წუთს
let sec = d.getSeconds(); // გვიბრუნებს წამს

 
console.log(d.getHours()  );
 

let  currday = d.getDay();
let mydey ;

switch (currday) {
  case 0:
    mydey = "კვირა"
    break;

    case 1:
      mydey = "ორშაბათი"
      break;

      case 2:
        mydey = "სამშაბათი"
        break;

        case 3:
          mydey = "ოთხშაბათი"
          break;

          case 4:
            mydey = "ხუთშაბათი"
            break;

            case 5:
              mydey = "პარასკევი"
              break;

              case 6:
                mydey = "შაბათი"
                break;

  default:
    mydey = "კვირის დღე გაურკვეველია"
    break;
}

console.log(mydey);