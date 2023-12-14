/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var dayCounter = 0;




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeDays(day){
    const DAY_BUTTON = document.getElementById(day);

    if (!DAY_BUTTON.classList.contains('clicked')) {
        DAY_BUTTON.classList.add('clicked');
        dayCounter++;
    }
    else {
        DAY_BUTTON.classList.remove('clicked');
        dayCounter--;
    }
    calculateCost();
}
document.getElementById('monday').addEventListener('click', function () {
    changeDays('monday');
});

document.getElementById('tuesday').addEventListener('click', function () {
    changeDays('tuesday');
});

document.getElementById('wednesday').addEventListener('click', function () {
    changeDays('wednesday');
});

document.getElementById('thursday').addEventListener('click', function () {
    changeDays('thursday');
});

document.getElementById('friday').addEventListener('click', function () {
    changeDays('friday');
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays () {
   const DAY_BUTTON = document.querySelectorAll('.blue-hover');

   DAY_BUTTON.forEach(function(DAY_BUTTON){
        DAY_BUTTON.classList.remove('clicked');
   });

   dayCounter = 0;
   calculateCost();

}

document.getElementById('clear-button').addEventListener('click', function(){
    clearDays();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




function changeRate(changedRate) {

    costPerDay = changedRate;
    const HALF = document.getElementById('half');
    const FULL = document.getElementById('full');

    

    if (changedRate == 20){

        HALF.classList.add('clicked');
        FULL.classList.remove('clicked');
    } else {
        HALF.classList.remove('clicked');
        FULL.classList.add('clicked');
    }
    calculateCost(); 
}
document.getElementById('half').addEventListener('click', function() {
    console.log('half clicked');
    changeRate(20);
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


document.getElementById('full').addEventListener('click', function() {
    changeRate(35);
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculateCost() {
    const totalCost = document.getElementById('calculated-cost');
    const sum = dayCounter * costPerDay;
    totalCost.innerHTML = sum;
}