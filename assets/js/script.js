
var displyTime = document.querySelector ("#currentday");

var currentTime = moment();

displyTime.textContent = currentTime.format("DD MM YYYY hh:mm:ss")

$(".saveBtn").on("click", function() {
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");
localStorage.setItem(time, value);
});

