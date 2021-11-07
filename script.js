let checado = document.querySelector('input[type="checkbox"]');

function checar(){
   
    if(checado.checked == false){
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        document.querySelector('header').style.boxShadow = "0 2px 10px #666666";
        document.querySelector('.container1').style.boxShadow = "0 2px 10px #666666";
        document.querySelector('.container1').style.borderRadius = "10px";
        document.querySelector('footer').style.boxShadow = "0 2px 10px #666666";

        document.querySelector('#app1').style.boxShadow = "0 2px 10px #666666";

    }else{
        document.body.style.backgroundColor = "#555";
        document.body.style.color = "#fff";
        document.querySelector('header').style.boxShadow = "0 0 0 transparent";
        document.querySelector('.container1').style.boxShadow = "0 0 0 transparent";
        document.querySelector('footer').style.boxShadow = "0 0 0 transparent";

        document.querySelector('header').style.borderBottom = "3px solid #fff";
        document.querySelector('.container1').style.border = "3px solid #fff";
        document.querySelector('.container1').style.borderRadius = "10px";
        document.querySelector('footer').style.borderTop = "3px solid #fff";
        document.querySelector('footer').style.boxShadow = "0 0 0 transparent";

        document.querySelector('#app1').style.border = "3px solid #fff";

    }
    
}

function app1(){

    let pialtura = document.querySelector("#pialtura");
    let pisexo = document.querySelector("#pisexo");
    let piresp = document.querySelector("#piresp");
    
    if(pisexo.value == "M"){
        piresp.style.color = "red";
        piresp.value = `${(72.7 * Number(pialtura.value) - 58).toFixed(2)} kg`;
    }else if(pisexo.value == "F"){
        piresp.style.color = "red";
        piresp.value = `${(62.1 * Number(pialtura.value) - 44.7).toFixed(2)} kg`;
    }
}

function app2(){

    let imcaltura = document.querySelector("#imcaltura");
    let imcpeso = document.querySelector("#imcpeso");
    let imcresp = document.querySelector("#imcresp");
    
    imcresp.style.color = "red";
    imcresp.value = `${(Number(imcpeso.value) / (Number(imcaltura.value)*2)).toFixed(1)}`;
    
}