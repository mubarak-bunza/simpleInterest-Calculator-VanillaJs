// functions
// validateFields
function validateFields(field, error){
    if(isNaN(field.value)){
        error.innerHTML = 'field accept numbers only';
    }else if(!isNaN(field.value)){
        error.innerHTML = '';
    }
}

// simpleInterest
function simpleInterest(pValue, rValue, tValue, timePeriod){
    let principalVar = parseFloat(pValue.value);
    let rateVar = parseFloat(rValue.value);
    let timeVar = parseInt(tValue.value);

    if(pValue.value == "" || rValue.value == "" || tValue.value == ""){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Fields can not be empty!'
        })
    }else{
        if(timePeriod.value == 1){
            result = (principalVar * rateVar * timeVar)/100;
        }else if(timePeriod.value == 2){
            tPeriod = parseInt(time.value)*12; 
            result = (principalVar * rateVar * tPeriod)/100;
        }else{
            result = (principalVar * rateVar * timeVar)/100;
        }
        // resultDiv.style.display = "block";
    }
    return result;
}

// Events
// validating fields for numbers only
principal.addEventListener('keyup',function(){
    validateFields(principal, pError);
});
rate.addEventListener('keyup',function(){
    validateFields(rate, rError);
});
time.addEventListener('keyup',function(){
    validateFields(time, tError);
});

// calculating simple interest
btn.addEventListener('click', function(){
    if(principal.value <= 0){
        pError.innerHTML = 'principal can not be negative or zero'
    }else if(rate.value <= 0){
        rError.innerHTML = 'rate can not be negative or zero'
    }else if(time.value <= 0){
        tError.innerHTML = 'time can not be negative or zero'
    }else{
        simpleInterest(principal, rate, time, timePeriod);
        resultText.innerHTML = '&#8358;'+result+'.00';
        let newValue = result + parseFloat(principal.value); 
        principalValue.innerHTML = '&#8358;'+(newValue)+'.00';
        small.style.display = 'block';
        if(timePeriod.value == 1){
            periodText.innerHTML = 'month(s)';
        }else if(timePeriod.value == 2){
            periodText.innerHTML = 'year(s)';
        }
        timeText.innerHTML = time.value;
    }

});


