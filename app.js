let qrCodigo = select("img");
let qrTexto = select("input");
let qrBoton = select("button");

console.log(texto)
qrBoton.addEventListener("click", generadorQR);

function generadorQR(){

    if(qrTexto.value === ''){
        alert('debe ingresar texto/link para convertir a QR')
    }else{
        
        let size = "1000x1000";
        let datos = qrTexto.value;
        let baseURL = "https://api.qrserver.com/v1/create-qr-code/";

        let url = `${baseURL}?data=${datos}&size=${size}`;

        qrCodigo.src = url;
        document.querySelector('#texto').value= '';
    }
    
}

function select (elemento){
    return document.querySelector(elemento);
}

const validar = (e) => {
    
}

