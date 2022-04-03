// Javascript para enviar Whatsapp
function enviarWhatsApp(numero)
{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var url="https://api.whatsapp.com/send?phone="+numero+"&text=Hola%20Ersa%20Online:";

}
else{
    var url="https://web.whatsapp.com/send?phone="+numero+"&text=Hola%20Ersa%20Online:";

}
  window.open(url)
  cerrarChat();
}

// HTML
// <input 
//     class="input-msg" 
//     name="input" 
//     placeholder="Enviar un mensaje" 
//     autocomplete="off" 
//     autofocus="" 
//     onclick="javascript:enviarWhatsApp(5493624666666)">
// </input>