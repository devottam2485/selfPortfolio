console.log("Hello World");

// for Experience page


function exp_year_mouse_in(){
  $(this).css({"color": "red", "font-size": "30px", "transition": "0.3s font-size"});
  if ($(this)[0].className === "re_year")
  {
    console.log($(this)[0].className);
    function show_on_re(){$(".exp_redes_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});}
    $(".exp_redes_container").css({"display": "flex"});
    setTimeout(show_on_re, 300);

  }

  else if ($(this)[0].className === "mrx_year")
  {
    console.log($(this)[0].className);
    function show_on_re(){$(".exp_mrx_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});}
    $(".exp_mrx_container").css({"display": "flex"});
    setTimeout(show_on_re, 300);
  }

  else if ($(this)[0].className === "pfw_year")
  {
    console.log($(this)[0].className);
    $(".exp_pfw_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "prana_year")
  {
    console.log($(this)[0].className);
    $(".exp_prana_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "fortuna_year")
  {
    console.log($(this)[0].className);
    $(".exp_fortuna_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "dqe_year")
  {
    console.log($(this)[0].className);
    $(".exp_dqe_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "ibm_year")
  {
    console.log($(this)[0].className);
    $(".exp_ibm_container").css({"margin-left": "30%", "transition": "0.5s margin-left"});
  }

}

function exp_year_mouse_out(){
  $(this).css({"color": "black", "font-size": "25px", "transition": "0.3s font-size"});
  if ($(this)[0].className === "re_year")
  {

    function show_off_re(){$(".exp_redes_container").css({"display": "none"});}
    $(".exp_redes_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
    setTimeout(show_off_re, 300);
  }
  else if ($(this)[0].className === "mrx_year")
  {
    function show_off_re(){$(".exp_mrx_container").css({"display": "none"});}
    $(".exp_mrx_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
    setTimeout(show_off_re, 300);
  }
  else if ($(this)[0].className === "pfw_year")
  {
    $(".exp_pfw_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "prana_year")
  {
    $(".exp_prana_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "fortuna_year")
  {
    $(".exp_fortuna_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "dqe_year")
  {
    $(".exp_dqe_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
  }

  else if ($(this)[0].className === "ibm_year")
  {
    $(".exp_ibm_container").css({"margin-left": "-800px", "transition": "0.5s margin-left"});
  }
}

$(document).ready(function(){$(".present_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".re_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".mrx_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".pfw_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".prana_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".fortuna_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".dqe_year").hover(exp_year_mouse_in, exp_year_mouse_out);});
$(document).ready(function(){$(".ibm_year").hover(exp_year_mouse_in, exp_year_mouse_out);});

// end of experience page
