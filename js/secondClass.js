$(document).ready(function () {
  // mouse event
  //   $("#test").hover(
  //     function () {
  //       $(this).css("background-color", "tan");
  //     },
  //     function () {
  //       $(this).css("background-color", "purple");
  //     }
  //   );

  // keyboard events

  // 1. keypress
  // 2. keydown ==> keypress
  // 3. keyup

  // $('body').keypress(function(){
  //     $('#para').css('background-color' , 'tan');
  //   // })
  //   $("body").keydown(function () {
  //     $("#para").css("background-color", "purple");
  //   });
  //   $("body").keyup(function () {
  //     $("#para").css("background-color", "");
  //   });

  // form events
  // 1. focus
  // 2. blur
  // 3. change
  // 4. select
  // 5. submit  (form mandatory , submit must be a input element , submit must be inside the form element)

  //   $("#fName")
  //     .focus(function () {
  //       $(this).css("background-color", "lightblue");
  //     })
  //     .select(function () {
  //       $(this).css("background-color", "tan");
  //     })
  //     .blur(function () {
  //       $(this).css("background-color", "pink");
  //     });

  //   $("#sCourse").change(function () {
  //     $(this).css("background-color", "lightblue");
  //   });

  //   $("#sform").submit(function () {
  //     alert("hello world");
  //   });

  // window event
  //   1. load
  //   2. unload  jQuery 3.0
  //  3. scroll
  //  4. resize

  //   $(window).scroll(function () {
  //     $("#para").css("background-color", "tan");
  //   });

  //   $("#para1").scroll(function () {
  //     $("#para1").css("background-color", "lightblue");
  //     $("#para1").css("color", "pink");
  //   });

  //   $(window).resize(function(){
  //       $('#para').css('color' , 'green');
  //   })

  // get methods
  // 1. text
  // 2. html
  // 3. attr
  // 4. val
  // set methods

  // let text_body = $('body').text()
  // let html_body = $('body').html()
  // let attribute = $('.lName').attr('id')

  // $("#sform").submit(function () {

  //     let firstname = $('#fName').val()
  //     alert(firstname);
  //       });
  $("#hide").click(function () {
    // $("body").text("<h2>hello world</h2>");
    // $("body").html("<h2>hello world</h2>");
    // $("#fName").attr("class" , "lName");
    $("#fName").val("hello world");


  });

});
