
var displyTime = document.querySelector ("#currentday");

var currentTime = moment();

displyTime.textContent = currentTime.format("DD MM YYYY hh:mm:ss")

$(".saveBtn").on("click", function() {
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");
localStorage.setItem(time, value);
});

//saved data from localStorage 
// 7am
$("#7am-row .description").val(localStorage.getItem("7am-row"));

// 8am
$("#8am-row .description").val(localStorage.getItem("8am-row"));

// 9am
$("#9am-row .description").val(localStorage.getItem("9am-row"));

// 10am
$("#10am-row .description").val(localStorage.getItem("#10am-row"));

// 11am
$("#11am-row .description").val(localStorage.getItem("11am-row" /* localStorage KEY also the row id */));

// 12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row" /* localStorage KEY also the row id */));

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
$("#6pm-row .description").val(localStorage.getItem("6pm-row"));

// 7pm
$("#7pm-row .description").val(localStorage.getItem("7pm-row"));

// 8pm
$("#8pm-row .description").val(localStorage.getItem("8pm-row"));

// converting time and display

console.log()
