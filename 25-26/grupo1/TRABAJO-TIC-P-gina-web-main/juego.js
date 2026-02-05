const alv=document.querySelector(".alv");
const atm=document.querySelector(".atm");
const bar=document.querySelector(".bar");
const bet=document.querySelector(".bet");
const acb=document.querySelector(".acb");
const cel=document.querySelector(".cel");
const elc=document.querySelector(".elc");
const esp=document.querySelector(".esp");
const get=document.querySelector(".get");
const gir=document.querySelector(".gir");
const lev=document.querySelector(".lev");
const mal=document.querySelector(".mal");
const osa=document.querySelector(".osa");
const ovi=document.querySelector(".ovi");
const ray=document.querySelector(".ray");
const rm=document.querySelector(".rm");
const rs=document.querySelector(".rs");
const sev=document.querySelector(".sev");
const val=document.querySelector(".val");
const vil=document.querySelector(".vil");

const victoria=document.querySelector(".victoria");
const derrota=document.querySelector(".derrota");

var equipo_secreto=random(19)+1;


function random(n){
    var aleatorio= Math.floor(Math.random()*(n+1));
    return aleatorio;
}

alv.addEventListener("click", ()=>{
    if(equipo_secreto===1){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        alv.style.display="none";
    }
}
);
atm.addEventListener("click", ()=>{
    if(equipo_secreto===2){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        atm.style.display="none";
    }
}
);
bar.addEventListener("click", ()=>{
    if(equipo_secreto===3){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        bar.style.display="none";
    }
}
);
bet.addEventListener("click", ()=>{
    if(equipo_secreto===4){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        bet.style.display="none";
    }
}
);
acb.addEventListener("click", ()=>{
    if(equipo_secreto===5){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        acb.style.display="none";
    }
}
);
cel.addEventListener("click", ()=>{
    if(equipo_secreto===6){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        cel.style.display="none";
    }
}
);
elc.addEventListener("click", ()=>{
    if(equipo_secreto===7){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        elc.style.display="none";
    }
}
);
esp.addEventListener("click", ()=>{
    if(equipo_secreto===8){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        esp.style.display="none";
    }
}
);
get.addEventListener("click", ()=>{
    if(equipo_secreto===9){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        get.style.display="none";
    }
}
);
gir.addEventListener("click", ()=>{
    if(equipo_secreto===10){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        gir.style.display="none";
    }
}
);
lev.addEventListener("click", ()=>{
    if(equipo_secreto===11){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        lev.style.display="none";
    }
}
);
mal.addEventListener("click", ()=>{
    if(equipo_secreto===12){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        mal.style.display="none";
    }
}
);
osa.addEventListener("click", ()=>{
    if(equipo_secreto===13){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        osa.style.display="none";
    }
}
);
ovi.addEventListener("click", ()=>{
    if(equipo_secreto===14){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        ovi.style.display="none";
    }
}
);
ray.addEventListener("click", ()=>{
    if(equipo_secreto===15){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        ray.style.display="none";
    }
}
);
rm.addEventListener("click", ()=>{
    if(equipo_secreto===16){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        rm.style.display="none";
    }
}
);
rs.addEventListener("click", ()=>{
    if(equipo_secreto===17){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        rs.style.display="none";
    }
}
);
sev.addEventListener("click", ()=>{
    if(equipo_secreto===18){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        sev.style.display="none";
    }
}
);
val.addEventListener("click", ()=>{
    if(equipo_secreto===19){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        val.style.display="none";
    }
}
);
vil.addEventListener("click", ()=>{
    if(equipo_secreto===1){
        victoria.style.display="block";
        derrota.style.display="none";
    }else{
        victoria.style.display="none";
        derrota.style.display="block";
        vil.style.display="none";
    }
}
);