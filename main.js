$(document).ready(
 function() {
//quando facciamo next scorre in avanti immagine e pallino
 $('.next').click(
   function() {
     alert('ok')
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
