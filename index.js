const menuBtn=document.querySelector(".hanbargar")
const nav=document.querySelector(".nav")
const bigPhoto=document.querySelector(".big-image")
//
const weight=document.querySelector(".weight")
const height=document.querySelector(".height")
const button=document.querySelector(".click-bmi")
const errorWeight=document.querySelector(".error-weight")
const errorHeight=document.querySelector(".error-height")
const reseltSpan=document.querySelector(".result-span")
let weight_stats=false;
let height_stats=false;
button.addEventListener("click",(e)=>{
    const weight_value=weight.value;
    const height_value=height.value;
    if(height_value==='' || (height_value<=0) || isNaN(height_value)){
        errorHeight.classList.add("display-block");
        height.value=''
    }else{
       height_stats=true;
    }
    if(weight_value==='' || (weight_value<=0) || isNaN(weight_value)){
        errorWeight.classList.add("display-block")
        weight.value=""
    }else{
       weight_stats=true;
    }
    if(weight_value && height_value){
        const bmi=(weight_value /((height_value*height_value)/10000)).toFixed(2)
        console.log(bmi)
        reseltSpan.innerHTML=bmi;
        height.value=''
        weight.value=""
        errorHeight.classList.add("display-none");
        errorWeight.classList.add("display-none")
    }
})

const clickHandleer=(e)=>{
    nav.classList.toggle("nav-active")
}


menuBtn.addEventListener("click",clickHandleer)
