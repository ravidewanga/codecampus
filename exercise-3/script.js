const principal = document.getElementById('principal');
const rate = document.getElementById('rate');
const time = document.getElementById('time');
const cal = document.getElementById('cal');
const showSimpleInterest = document.getElementById('showSimpleInterest');

cal.addEventListener('click',showResult);

function showResult(){
    showSimpleInterest.textContent =  simpleInterest();
}

function simpleInterest(){
    const simpleInterestValue = parseInt( (parseInt(principal.value) * parseInt(rate.value) * parseInt(time.value) )/ parseInt(100));
    return 'Simple interest is :' + simpleInterestValue;
}