$(function () {



    $('h1').click(function () {
        $(this).html('ახალი ტექსტი')
    })



    $(".box").click(function (e) {
        e.preventDefault();
        // $('.box').css({
        //     "background-color":"green",
        //     "border-radius":"50px",
        //     "transform":"translateY(100%)",
        //     "transition":"all 1.3s"
        // })
        // $('.box').show(2000);
        //$('.box').slideDown();
        // $('.box').fadeIn();

        $('.box').animate({

            "width": "380px",
            "height": "480px",
            "border-radius": "20px",

        }, 700, function () {
            $('.box form').animate({
                "opacity": 1,
                "top": 0
            }, 300)
        })


    });


    $(".hide").click(function (e) {
        e.preventDefault();
        // $('.box').hide(2000);
        //$('.box').slideUp();
        // $('.box').fadeOut()
    });


    $(".tog").click(function (e) {
        e.preventDefault();

      let wid =    $('.box').width(); // კონტენტის ზომა
      let innerwid =    $('.box').innerWidth(); // კონტეინერის ზომა
      let outerwid =    $('.box').outerWidth(); // კონტეინერის  სრული ზომა
      $('.box').width($('.box').width() + 20);

        // $('.box').addClass('bg-red') // კლასის მინიჭება
        // $('.box').removeClass('box') // კლასის წაშლა
        // $('.box').toggleClass('bg-red') // კლასის თოგლი
        // $('.box').removeClass('box').addClass('box-1'); კლასის ჩანაცვლება




        // $('.box').toggle(2000, function(){
        //     $('.box').show(2000);
        // } );
        //$('.box').slideToggle();
        //  $('.box').fadeToggle()


    });

    let o = 0;

    $("#nwinput").click(function (e) {
        e.preventDefault();
        let inputs = `
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white">პაროლი ${o}</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
    `
          $('.append').append(inputs);// ელემენტის დამატება ბოლოს
        //  $('.append').prepend(inputs);  //ელემენტის დამატება თავში
        //$('.append').before(inputs); // ამატებს სელექტორის ზედა მხარეს
        //$('.append').after(inputs); // ამატებს სელექტორის ქვედა მხარეს
        o++;
    });


    $("#empty").click(function (e) { 
        e.preventDefault();
        //$('.append').empty();  // კონტენტის გასუფთავება
        $('.append').remove();  // ელემენტის წაშლა
       
    });

// აბრუნებს მშობელს $('.mychild').parent()
// აბრუნებს ყველა მშობელს $('.mychild').parents('body') 
// აბრუნებს ელემენტის შვილობილ ტეგებს $('.parentcont').children() 
// ეძებს ელემენტს სელექტორის მიხედვით $('.parentcont').find('.mychild');
// გვიბრუნებს ელემენტის ზედა მეზობელ ტეგს $('.mychild').prev()
// აბრუნებს ყველა ზედა მეზობელ ტეგს $('.mychild').prevAll()
// აბრუნებს ყველა ზედა მეზობელ ტეგს (მდე) $('.mychild').prevUntil('.unt')
// გვიბრუნებს ელემენტის ქვედა მეზობელ ტეგს $('.mychild').next()
// აბრუნებს ყველა ქვედა მეზობელ ტეგს $('.mychild').nextAll()
// აბრუნებს ყველა ქვედა მეზობელ ტეგს (მდე) $('.mychild').nextUntil('.unt')
//  აბრუნებს პირველ ელემენტს $('.childiv').first().css('color', 'red');
//  აბრუნებს ბოლო ელემენტს $('.childiv').last().css('color', 'green');
// "არ" ფუნქცია $('.childiv').not('.mychild');

// ელემენტის ფილტრაცია
$('.childiv').filter(function(index, el){
  
    return $(el).text() == "შვილობილი დივები1"
}).css('color', 'green');
 


$('#testinp').attr('type') // გვიბრუნებს ატრიბუტის მნიშვნელობას
$('#testinp').attr({'type': 'password'})  // ცვლის ატრიბუტის მნიშვნელობას
//$('#testinp').removeAttr('required') // ატრიბუტის წაშლა

$(".btnrem").click(function (e) { 
    e.preventDefault();
    $('#testinp').prop('required', true);
    $('.mychild').replaceWith(' <span class="childiv mychild">შვილობილი დივები1</span>');


    $.each($('.childiv'), function (index, element) { 
         console.log($(element).text())
    });


    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {price:$('input[name="price"]').val()},
        dataType: "text",
        success: function (response) {
             console.log(response)
        }
    });


});

// console.log($('.childiv').eq(0))











});


