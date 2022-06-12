const inputarea = document.querySelector(`.data`);
const sp1 = document.querySelector(`.span1`);
const sp2 = document.querySelector(`.span2`);
const sp3 = document.querySelector(`.span3`);
const sp4 = document.querySelector(`.span4`);
let str = inputarea.value;
function CheckValue() {
    if (/A - Z/.test(str)) {
        sp1.classList.toggle(`match`);
    }
}
inputarea.addEventListener(`keypress`, CheckValue);
