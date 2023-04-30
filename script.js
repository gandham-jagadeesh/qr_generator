const form = document.getElementById("form");
const qrcode=document.getElementById("qrcode");



function generateQrcode(url,size){
    const qrcode = new QRCode("qrcode",{
        text:url,
        width:size,
        height:size,
    })
 

}

function clearui(){
    qrcode.innerHTML="";

}




function onGenerateSubmit(event){
    event.preventDefault();
    clearui();
    const url=document.getElementById("url").value;
    const size=document.getElementById("size").value;
    if(url == ""){
        alert("please enter a url");
    }
    else{
            generateQrcode(url,size);
            console.log(url,size);

        }
}



form.addEventListener("submit",onGenerateSubmit);