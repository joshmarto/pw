function stopDefAction(evt) {
  evt.preventDefault();
  var a = document.getElementById('Descripcion-Antigua');
  var b = document.getElementById('Itinerio-Antigua');
  var c = document.getElementById('Precio-Antigua');
  var d = document.getElementById('Reservacion-Antigua');
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  var button = document.getElementById('DA');
  var button2 = document.getElementById('IA');
  var button3 = document.getElementById('PA');
  var button4 = document.getElementById('RA');
  button.style.color = "black";
  button2.style.color = "white";
  button3.style.color = "white";
  button4.style.color = "white";
  button.style.backgroundColor = "white";
  button2.style.backgroundColor = "#868e96";
  button3.style.backgroundColor = "#868e96";
  button4.style.backgroundColor = "#868e96";
}

function remplazar(target, source, source2, source3) {
  var m = document.getElementById(target);
  if (m.style.display != "none") {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  var x = document.getElementById(source);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById(source2);
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    var z = document.getElementById(source3);
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
}

function mostrar(target, source, source2, source3, btn, btn2, btn3, btn4) {
    var a = document.getElementById(target);
    var b = document.getElementById(source);
    var c = document.getElementById(source2);
    var d = document.getElementById(source3);
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    var button = document.getElementById(btn);
    var button2 = document.getElementById(btn2);
    var button3 = document.getElementById(btn3);
    var button4 = document.getElementById(btn4);
    button.style.color = "black";
    button2.style.color = "white";
    button3.style.color = "white";
    button4.style.color = "white";
    button.style.backgroundColor = "white";
    button2.style.backgroundColor = "#868e96";
    button3.style.backgroundColor = "#868e96";
    button4.style.backgroundColor = "#868e96";
}
