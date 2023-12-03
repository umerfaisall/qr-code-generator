let imgBox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImage");
let qrText = document.getElementById("qrtext");



function generateQr(){
    if(qrText.value.length > 0){
qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
imgBox.classList.add("show-img");
qrText.value = "";
}else{
    qrText.classList.add('error');
    setTimeout(() => {
        qrText.classList.remove('error')
    }, 1000);
    
}
}
