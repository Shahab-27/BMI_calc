const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');


const bmi_ans = document.querySelector('.bmi');
const result  = document.querySelector('.result');

function bmi_checker(weight,height){
    const bmi = Math.round(weight / (Math.pow((height/100),2)))
    bmi_ans.innerHTML = `Your BMI is :  ${bmi}`;
    if(bmi <18.5){
        result.innerHTML = 'You are Underweight';
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        result.innerHTML = 'You are in Normal weight';
    }
    else if(bmi >= 25 && bmi <=29.9){
        result.innerHTML = 'You are Overweight';
    }else{
        result.innerHTML = 'You are having Obesity';
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)
    bmi_checker(weight, height);
});
