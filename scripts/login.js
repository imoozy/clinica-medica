function validateFields(){
    const password = document.getElementById("password").value;
    const senha = 1234;
    if(password === senha){
        console.log("Está liberado entrar");
    }else{
        console.log("Não liberado");
    }
}