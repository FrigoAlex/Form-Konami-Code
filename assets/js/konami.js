//My konami code [w,w,s,s,a,d,a,d,x,z]
let code = "";
const validCode = /wwssadadxz/i;
const konamiSec = document.querySelector('.sec-konami');

document.addEventListener('keydown', (e) => {
    code += e.key;
    if (validCode.exec(code)) {
        konamiSec.classList.toggle('active');
        code = "";
    }
});