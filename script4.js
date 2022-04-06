function pegarDados(){

  let validText = document.getElementById("cursos").value;
  document.getElementById("validText").innerHTML = validText;

  let checkbox_if = document.getElementById("if");

  let checkbox_at = document.getElementById("at");

  let checkbox_ut = document.getElementById("ut");

  if(checkbox_if.checked){
    document.getElementById("campIf").innerHTML = ("Sistema Octal"); 
    }if(checkbox_at.checked){ 
    document.getElementById("campAt").innerHTML = ("Sistema Binário");
    }if(checkbox_ut.checked){ 
    document.getElementById("campUt").innerHTML = ("Sistema Decimal"); 
    }else
    document.getElementById("campOt").innerHTML = ("Sistema Hexadecimal");

  if (document.getElementById("if2").checked) {
    document.getElementById("campRad").innerHTML = ("O produto é: Álcool Isopropílico");
  } if (document.getElementById("at2").checked) {
    document.getElementById("campRad").innerHTML = ("O produto é: Limpa Contato");
  } if (document.getElementById("ut2").checked) {
    document.getElementById("campRad").innerHTML = ("O produto é: Álcool 70%");
  } if (document.getElementById("ot2").checked) {
    document.getElementById("campRad").innerHTML = ("O produto é: Água");
  } 

  if (document.getElementById("if3").checked) {
    document.getElementById("campRad2").innerHTML = ("True");
  } else if (document.getElementById("at3").checked) {
    document.getElementById("campRad2").innerHTML = ("False");
  }
}
