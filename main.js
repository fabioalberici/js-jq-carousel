$(document).ready(
 function() {
//quando facciamo next scorre in avanti immagine e pallino
 $('.next').click(
   function() {
     immagineDopo();
   }
 )
//quando facciamo prev  scorre all'indietro immagine e pallino
  $('.prev').click(
    function () {
      immaginePrima();
    }
  )
 }
)


//funzione per scorrere le immagini in avanti
function immagineDopo(){
  var immagine = $('.images img.active');
  var pallino = $('.nav i.active');

  immagine.removeClass('active');
  pallino.removeClass('active');

// ora sposto le immagini, specificando il caso
// in cui l'elemento selezionato sia l'ultimo
  if (immagine.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  //se invece non si tratta dell'ultimo
  else {
    immagine.next('img').addClass('active');
    pallino.next('i').addClass('active');
  }
}


//funzione per scorrere le immagini all'indietro

function immaginePrima() {
  var immagine = $('.images img.active');
  var pallino = $('.nav i.active');

  immagine.removeClass('active');
  pallino.removeClass('active');

//ora sposto le immagini, specificando il caso in cui
//l'elemento selezionato sia il primo, e io voglia andare indietro

  if (immagine.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
// se invece si tratta del primo
  else {
    immagine.prev('img').addClass('active');
    pallino.prev('i').addClass('active');
  }
}
