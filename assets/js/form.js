//Input range functionallity
const range = document.getElementById('level');
const experience = document.getElementById('experience');

if (range.oninput = () => {
    if(range.value == 1){
        experience.innerHTML = "Junior (1- year experience)";
    } else if(range.value == 2){
        experience.innerHTML = "Junior (2 years experience)";
    } else if(range.value == 3){
        experience.innerHTML = "Semi-Senior (3 years experience)";
    } else if(range.value == 4){
        experience.innerHTML = "Semi-Senior (4 years experience)";
    } else if(range.value == 5){
        experience.innerHTML = "Senior (5+ years experience)";
    }
});