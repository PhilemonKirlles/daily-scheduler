
const displayTime = document.querySelector("#currentDay");

const currentTime = moment();

displayTime.textContent = currentTime.format("MMMM Do YYYY, h:mm:ss a")



$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");
    
    // save in localStorage
    localStorage.setItem (time, value, btn);
   
});

// load any saved data from localStorage 


// 7am
$("#7am-row .description").val(localStorage.getItem("7am-row" ));
// 8am
$("#8am-row .description").val(localStorage.getItem("8am-row" ));
// 9am
$("#9am-row .description").val(localStorage.getItem("9am-row" ));

// 10am
$("#10am-row .description").val(localStorage.getItem("10am-row"));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row" ));


// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" ));

// 1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row" ));

// 2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row" ));

// 3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row" ));

// 4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row" ));

// 5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row" ));

// 6pm
$("#6pm-row .description").val(localStorage.getItem("6pm-row" ));
// 7pm
$("#7pm-row .description").val(localStorage.getItem("7pm-row"));
// converting time and display

var hour7 = 7;
var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;
var hour18 = 18;
var hour19 = 19;

var currentHour = moment().format('H');

// 7am
if (currentHour < hour7) {
    $("#7pm-text").addClass("future");
} else if (currentHour > hour7) {
    $("#7pm-text").addClass("past");
} else if (currentHour = hour7) {
    $("#7pm-text").addClass("present");
}
// 8pm
if (currentHour < hour8) {
    $("#8pm-text").addClass("future");
} else if (currentHour > hour8) {
    $("#8pm-text").addClass("past");
} else if (currentHour = hour8) {
    $("#8pm-text").addClass("present");
}
// 9am 
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

// 10am 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}

// 1pm
if (currentHour < hour13) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour13) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour13) {
    $("#1pm-text").addClass("present");
}

// 2pm
if (currentHour < hour14) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour14) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour14) {
    $("#2pm-text").addClass("present");
}

// 3pm
if (currentHour < hour15) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour15) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour15) {
    $("#3pm-text").addClass("present");
}

// 4pm
if (currentHour < hour16) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour16) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour16) {
    $("#4pm-text").addClass("present");
}

// 5pm
if (currentHour < hour17) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour17) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour17) {
    $("#5pm-text").addClass("present");
}

// 6pm
if (currentHour < hour18) {
    $("#6pm-text").addClass("future");
} else if (currentHour > hour18) {
    $("#6pm-text").addClass("past");
} else if (currentHour = hour18) {
    $("#6pm-text").addClass("present");
}
// 7pm
if (currentHour < hour19) {
    $("#7pm-text").addClass("future");
} else if (currentHour > hour19) {
    $("#7pm-text").addClass("past");
} else if (currentHour = hour19) {
    $("#7pm-text").addClass("present");
}