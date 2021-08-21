// variables
let days = document.querySelector('.item_1');
let hours = document.querySelector('.item_2');
let minutes = document.querySelector('.item_3');

let today = new Date();
let wedding_day = new Date(2022, 7, 20, 17, 0, 0);
let calculated_days;
let calculated_hours;
let calculated_minutes;


const remaining_time = () => {
    time_in_seconds = (wedding_day - today) / 1000; //czas w sekundach
    time_in_minutes = Math.floor(time_in_seconds / 60); //czas w minutach
    time_in_hours = Math.floor(time_in_minutes / 60); // czas w godzinach
    time_in_days = Math.floor(time_in_hours / 24); //czas w dniach

    calculated_days = time_in_days;
    calculated_hours = Math.floor((time_in_seconds - time_in_days * 24 * 60 * 60) / 60 / 60);
    calculated_minutes = Math.ceil((time_in_seconds - calculated_days * 24 * 60 * 60 - calculated_hours * 60 * 60) / 60);

    // console.log('dni: ', calculated_days, ', godzin: ', calculated_hours, ', minut: ', calculated_minutes);

    return calculated_days, calculated_hours, calculated_minutes;
}

remaining_time();

// Ustawienie wyświelnanych dni
const display_days = () => {
    
    if (calculated_days /= 1) {
        ingredient = ' Dni';
    } else {
        ingredient = " Dzień";
    }

    display_content = calculated_days + ingredient;
    days.innerHTML = display_content;
}


// Ustawienie wyświelnanych godzin
const display_hours = () => {
    ny = [2, 3, 4];
    for (let i in ny) {
        if (i == calculated_hours) {
            ingredient = ' godziny';
        } else if (calculated_hours == 1) {
            ingredient = ' godzina';
        } else {
            ingredient = ' godzin';
        }
    }
    display_content = calculated_hours + ingredient;
    hours.innerHTML = display_content;
}


// Ustawienie wyświelnanych minut
const display_minutes = () => {
    uty = [2, 3, 4];
    for (let i in uty) {
        if (i == calculated_minutes) {
            ingredient = ' minuty';
        } else if (calculated_minutes == 1) {
            ingredient = ' minuta';
        } else {
            ingredient = ' minut';
        }
    }
    display_content = calculated_minutes + ingredient;
    minutes.innerHTML = display_content;
}

function refreshData()
{
    x = 5;  // 5 Seconds
    today = new Date();
    remaining_time();
    display_days();
    display_hours();
    display_minutes();
    console.log(today)

    setTimeout(refreshData, x*1000);
}


refreshData(); // execute function