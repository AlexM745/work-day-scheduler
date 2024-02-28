// to wrap the whole functions to wait unitl the DOM elements are rendered first.

//selected dom elements
let timeblock = $(".time-block");
let hour9 = $("#hour-9");
let hour10 = $("#hour-10");
let hour11 = $("#hour-11");
let hour12 = $("#hour-12");
let hour13 = $("#hour-13");
let hour14 = $("#hour-14");
let hour15 = $("#hour-15");
let hour16 = $("#hour-16");
let hour17 = $("#hour-17");
let blockhour = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17,];
let eventInput = $("input");
let events = [];
console.log("eventsInput", eventInput);

// displays current date on the top of the page in the header section
const today = dayjs().format("dddd, MMMM D");// get current date and it formatted
console.log(today);// to check that the date is displayed correctly
$('#currentDay').text(today);// sends the date information from today to html

//function to help get current hour and change time-block color
function colorChange() {
  const currentHour = dayjs().format('HH:mm:ss A ');
  const currentHourParse = parseInt(currentHour);
  console.log("current hour", currentHourParse);
  for (let i = 0; i < timeblock.length; i++) {
    var timeblockId = timeblock[i].id;

    if (timeblockId < currentHourParse) {
      $(timeblock[i]).addClass("past");
      $(timeblock[i]).removeClass("future");
      $(timeblock[i]).removeClass("present");

    } else if (timeblockId > currentHourParse) {
      $(timeblock[i]).addClass("future");
      $(timeblock[i]).removeClass("past");
      $(timeblock[i]).removeClass("present");
    } else {
      $(timeblock[i]).addClass("present");
      $(timeblock[i]).removeClass("past");
      $(timeblock[i]).removeClass("future");
    }
  }
};
// helps render the color changes
colorChange();


3
$(document).ready(function () {


  //save button click event and function

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("this", this);
    let eventText = $(this).siblings("input").val();
    let time = $(this).parent().attr("id");
    console.log("event text", eventText);
    console.log("time", time);
    if (eventText === "") {
      return;
    }

    events.push(eventText);

    eventInput.value = "";

    storeEvents(eventText,time);

    alert("Clicked save button");
  });


  // store to local storage
  function storeEvents(text,hour) {
    //   // stringyfy and set in localstorage
    localStorage.setItem(hour, JSON.stringify(text));
    console.log("local storage", localStorage);
  }


  // function to get the stored events from localstorage and is called at the bottom of the page.
  function getEvents() {
    
    for (let i = 9; i < 17; i++){
      const storageValue = JSON.parse(localStorage.getItem(i));
      if ( storageValue !== null) {
        $("#"+i).children("input").val(storageValue);
      }
    }
  };

  // calls getEvents to retrive data and render it to the page when loaded
  getEvents();
});









