//selected dom elements
let timeblock = $(".time-block");
let events = [];


// displays current date on the top of the page in the header section
const today = dayjs().format("dddd, MMMM D");// get current date and it formatted
console.log(today);// to check that the date is displayed correctly
$('#currentDay').text(today);// sends the date information from today to html

//function to help get current hour and change time-block color
function colorChange() {
  const currentHour = dayjs().format('HH:mm:ss A ');
  const currentHourParse = parseInt(currentHour);
  console.log("current hour", currentHourParse);// turns hour into number
  // for loop to iterate through color changes with current time
  for (let i = 0; i < timeblock.length; i++) {
    var timeblockId = timeblock[i].id;
    // if event is in the past color is grey
    if (timeblockId < currentHourParse) {
      $(timeblock[i]).addClass("past");
      $(timeblock[i]).removeClass("future");
      $(timeblock[i]).removeClass("present");
      // if event is in the future color is green
    } else if (timeblockId > currentHourParse) {
      $(timeblock[i]).addClass("future");
      $(timeblock[i]).removeClass("past");
      $(timeblock[i]).removeClass("present");
    } else {
      $(timeblock[i]).addClass("present");// else event is in the present color is red
      $(timeblock[i]).removeClass("past");
      $(timeblock[i]).removeClass("future");
    }
  }
};
// helps render the color changes
colorChange();

// to wrap the whole functions to wait unitl the DOM elements are rendered first.
$(document).ready(function () {


  //save button click event and function

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();// keeps page from refreshing
    console.log("this", this);// checking what this is
    let eventText = $(this).siblings("input").val();// dom traversal using this
    let time = $(this).parent().attr("id");// dom traversal
    console.log("event text", eventText);
    console.log("time", time);
    if (eventText === "") {
      return;
    }
    // sends eventText and time to localstorage
    storeEvents(eventText, time);

    alert("Event saved");
  });


  // store to local storage
  function storeEvents(text, hour) {
    // stringyfy and set in localstorage
    localStorage.setItem(hour, JSON.stringify(text));
    console.log("local storage", localStorage);
  }


  // function to get the stored events from localstorage and is called at the bottom of the page.
  function getEvents() {
    // for loop to keep and the values of local storage on to the input box after page reload
    for (let i = 9; i < 18; i++) {
      const storageValue = JSON.parse(localStorage.getItem(i));
      if (storageValue !== null) {
        $("#" + i).children("input").val(storageValue);// dom traversal
      }
    }
  };

  // calls getEvents to retrive data and render it to the page when loaded
  getEvents();
});









