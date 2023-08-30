const crsr=document.querySelector("#crsr");
const main=document.querySelector("#main");

main.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    // console.log(dets.x);
})