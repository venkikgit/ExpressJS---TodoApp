// Below function is to set dropdown menu input value
function display(something){
    console.log("it;s working");
    document.querySelector('.textBox').value = something;
}
// To Toggle dropdown menu
let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(){
    dropdown.classList.toggle('active');
})

//Date picker input related
var date = new Date();
var tdate = date.getDate();
if(tdate<10){
    tdate = "0" +tdate;
}
var month = date.getMonth() + 1;//Returns previous month
if(month<10){
    month = "0"+month;
}
var year = date.getFullYear();
var minDate = year + "-" + month + "-"+tdate;
document.getElementById('date').setAttribute('min',minDate);

//To change CSS of different categories of tasks
$(".category:contains('Work')").css({
    backgroundColor: "blue",
    color : "white",
    fontWeight:600
});

$(".category:contains('Personal')").css({
    backgroundColor: "yellow",
    color : "",
    fontWeight:600
});


$(".category:contains('Household')").css({
    backgroundColor: "#F92C05",
    color : "white",
    fontWeight:600
});

$(".category:contains('others')").css({
    backgroundColor: "#05F9F8",
    color : "black",
    fontWeight:600
});