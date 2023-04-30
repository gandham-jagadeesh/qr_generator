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
    const btn = document.getElementById("save_link");
    if(btn){
        btn.remove();
        }

};  

function createButton(img_src){
    const links = document.createElement("a");
    links.id="save_link";
    links.href=img_src;
    links.download="qrcode"
    links.innerHTML="save Image";
    document.getElementById("save_btn").appendChild(links);
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
            setTimeout(() => {
                const img_src=qrcode.querySelector("img").src;
                console.log(img_src);
                createButton(img_src);
            }, 500);

        }
}



form.addEventListener("submit",onGenerateSubmit);