const sp1 = document.querySelector(`.span1`);
const sp2 = document.querySelector(`.span2`);
const sp3 = document.querySelector(`.span3`);
const sp4 = document.querySelector(`.span4`);
let Input = document.querySelector(`.data`);
Input.oninput = function CheckValue() {
    str = Input.value;
    if (/[A-Z+]/.test(str)) {
        sp1.classList.add(`match`);
    }
    if (/\d+/.test(str)) {
        sp2.classList.add(`match`);
    }
    if (/[^\d\sA-Z]/gi.test(str)) {
        sp3.classList.add(`match`);
    }
    if (str.length > 8) {
        sp4.classList.add(`match`);
    }
};
