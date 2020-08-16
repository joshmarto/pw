console.log('It works');

$(document).ready(function (){
  $('.reservation-form').click(function (event){
    console.log('Clicked button');

    var nombre = $('.name').val();
    var apellido = $('.lastname').val();
    var email = $('.email').val();
    var fecha = $('.date').val();
    var pax = $('.pax').val();
    var comentario = $('.comment').val();
    var hoy = new Date();
    var stats = $('.status');
    stats.empty();

    if (nombre.length > 0){
      stats.append('<div style="color: white;">Valid name</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Please enter you name</div>');
    }
    if (apellido.length > 0){
      stats.append('<div style="color: white;">Valid lastname</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Please enter you lastname</div>');
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')){
      stats.append('<div style="color: white;">Email valido</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Email invalido</div>');
    }
    if (pax.length != 0){
      stats.append('<div style="color: white;">Valid passengers</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Please enter the number of passengers</div>');
    }
    if (fecha.getDate() > hoy.getDate()){
      stats.append('<div style="color: white;">Valid date</div>');
    } else if (fecha === ""){
      event.preventDefault();
      stats.append('<div style="color: red;">Missing date</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Wrong date</div>');
    }
  })
})
