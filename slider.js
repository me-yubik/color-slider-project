const result = document.querySelector(".result input");
const btn = document.getElementById("copy");
const sliders = document.querySelectorAll(".slider input[type='range']");
const rcolor = document.getElementById("red");
const gcolor = document.getElementById("green");
const bcolor = document.getElementById("blue");

let generate = () => {
    let rcolorvalue = rcolor.value;
    let gcolorvalue = gcolor.value;
    let bcolorvalue = bcolor.value;

    let finalcolor = `rgb(${rcolorvalue}, ${gcolorvalue}, ${bcolorvalue})`;
    result.value = finalcolor;
    document.body.style.backgroundColor = finalcolor;
};
let copycolor= () =>
{
    result.select();
    document.execCommand("copy");
    copy.innerText="copied!";
    setTimeout(() => {
        copy.innerText= "copy color";
    }, 1000); 
}; 

sliders.forEach((inp) => {
    inp.addEventListener("input", generate);
});

window.addEventListener("load",generate);
copy.addEventListener("click", copycolor);
