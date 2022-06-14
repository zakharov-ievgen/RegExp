const sp1 = document.querySelector(`.span1`);
const sp2 = document.querySelector(`.span2`);
const sp3 = document.querySelector(`.span3`);
const sp4 = document.querySelector(`.span4`);
let input = document.querySelector(`.data`);
input.oninput = function CheckValue() {
    let str = input.value;
    if (/[А-ЯЁA-Z]/.test(str)) {
        sp1.classList.add(`match`);
    } else {
        sp1.classList.remove(`match`);
    }
    if (/\d+/.test(str)) {
        sp2.classList.add(`match`);
    } else {
        sp2.classList.remove(`match`);
    }
    if (/[^\d\sA-Z]/gi.test(str)) {
        sp3.classList.add(`match`);
    } else {
        sp3.classList.remove(`match`);
    }
    if (str.length > 8) {
        sp4.classList.add(`match`);
    } else {
        sp4.classList.remove(`match`);
    }
};
