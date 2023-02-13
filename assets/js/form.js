/*
  +------------------------------------+
  |     Input range functionallity     |
  +------------------------------------+
*/
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

/*
  +------------------------------------+
  |      Form submit functionallity    |
  +------------------------------------+
*/

const form = document.querySelector('.form');

const setError = (message,element,tag) => {
    const textError = document.createElement(tag);
    textError.appendChild(document.createTextNode(message));
    element.appendChild(textError);
}

form.onsubmit = (e) => {
    e.preventDefault();
    const alert = document.querySelector('.alert');
    const success = document.querySelector('.success');
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const website = document.getElementById('website').value;
    const terms = document.getElementById('terms').checked;

    alert.classList.remove('show');
    alert.innerHTML = '';
    success.classList.remove('show');

    if(name == '' || lastName == '' || email == '' || password == '' || confirmPassword == '' || phone == '' || age == '' || website == ''){
        setError('All fields are required',alert,'p');
    }
    if(!/^[a-zA-Z ñáéíóú]+$/i.test(name)){
        setError('Name is not valid',alert,'p');
    }
    if(!/^[a-zA-Z ñáéíóú]+$/i.test(lastName)){
        setError('Last name is not valid',alert,'p');
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
        setError('Email is not valid',alert,'p');
    }
    if(password !== confirmPassword){
        setError('Passwords do not match',alert,'p');
    }
    if(!/^\d{4}-\d{4}$/.test(phone.trim())){
        setError('Phone is not valid',alert,'p');
    }
    if(!/^\d{1,3}$/.test(age)){
        setError('Age is not valid',alert,'p');
    }
    if(!/^(http(s)?:\/\/)?((w){3}.)?[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(website)){
        setError('Website is not valid',alert,'p');
    }
    if(!terms){
        setError('You must accept the terms and conditions',alert,'p');
    }
    if(alert.childNodes.length != 0){
        alert.classList.add('show');
    } else {
        success.classList.add('show');
        console.log(`Form submitted:
        Name: ${name}
        Last name: ${lastName}
        Email: ${email}
        Password: ${password}
        Confirm password: ${confirmPassword}
        Phone: ${phone}
        Age: ${age}
        Website: ${website}
        Level: ${range.value}
        Terms: ${terms}
        `);
    }
    

}
