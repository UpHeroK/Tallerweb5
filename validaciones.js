function validar(){
    var nombre= document.getElementById('name').value;
    var apellido = document.getElementById('lname').value;
    var adress = document.getElementById('adress').value;
    var ccuser= document.getElementById('ccuser').value;
    var ccpass= document.getElementById('ccpass').value;
    var conf= document.getElementById('ccpass2').value;
    var email=document.getElementById('email').value;
    var adr=/^(cll)+(\s*)(\w+)$|(cra)+(\s*)(\w+)$|(av)+(\s*)(\w+)$|(trans)+(\s*)(\w+)$/;
    var pas=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[/#%&])([A-Za-z\d/#%&]|[^ ])+$/;
    
    if (nombre.length > 25)
    {
        document.getElementById('error1').innerHTML="*Mucho texto*";
        return false;
    }else if(nombre == ''){
        document.getElementById('error1').innerHTML="*Campo nombre vacío*";
        return false;
    }else if(apellido == ''){
        document.getElementById('error2').innerHTML="*Campo Apellido vacío*";
        return false;
    }if (apellido.length > 25)
    {
        document.getElementById('error2').innerHTML="*Mucho texto*";
        return false;
    }if (!adr.test(adress)){
        document.getElementById('error3').innerHTML="*La dirección no es válida*";
        return false;

    }if (ccuser.length < 10){
        document.getElementById('error4').innerHTML="*El campo ta chiquito*";
        return false;
    
    }if (ccuser.length > 20){
    document.getElementById('error4').innerHTML="*El campo ta grande*";
    return false;
    }if (ccpass.length > 20 || ccpass.length < 10 || !pas.test(ccpass)){
        document.getElementById('error5').innerHTML="*La contraseña debe tener entre 15 y 20 cáracteres entre ellos mayusculas, numeros y simbolos.*";
        
        return false;

    }
    if (ccpass!=conf){
        document.getElementById('error6').innerHTML="*Las contraseñas no coinciden*";
        
        return false;

    } 
    if (email.lenght=='' || email.lenght >120){
        document.getElementById('error7').innerHTML="*Correo no válido*";
        
        return false;
    }


        
    

    

}

