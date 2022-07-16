const form = document.querySelector('.getNumber');
const fact = document.querySelector('.fact');
const num = document.querySelector('.number');


const showFact = (e) => {
    e.preventDefault();
    
    if (num.value === '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${Math.floor(Math.random() * 100)}/trivia`);

        xhr.onload = function () {
            if(this.status == 200) {
                fact.innerHTML = this.responseText;
            }
        }

        xhr.onerror = function () {
            fact.innerHTML = 'An Error Occured...';
        }

        xhr.send();
    } if (num.value != '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${num.value}/trivia`);

        xhr.onload = function () {
            if(this.status == 200) {
                fact.innerHTML = this.responseText;
            }
        }

        xhr.onerror = function () {
            fact.innerHTML = 'An Error Occured...';
        }

        xhr.send();
    }
}

form.addEventListener('submit', showFact);


// YEAR 
const yearForm = document.querySelector('.getYear');
const yearInput = document.querySelector('.year');
const yearText = document.querySelector('.yearText');

yearForm.addEventListener('submit', getYearText);

function getYearText(e) {
    e.preventDefault();

    // getYearText(`http://numbersapi.com/${yearInput.value}/year`)

    // async function getYearText(file) {
    //     let x = await fetch(file);
    //     let y = await x.text();
    //     yearText.innerHTML = y;
    // }

    

    if (yearInput.value === '') {
        fetch(`http://numbersapi.com/${Math.floor(Math.random()*2000)}/year`)
        .then((x) => x.text())
        .then((y) => yearText.innerHTML = y)
    } if (yearInput.value != '') {
        fetch(`http://numbersapi.com/${yearInput.value}/year`)
        .then((x) => x.text())
        .then((y) => yearText.innerHTML = y)
    }
}

