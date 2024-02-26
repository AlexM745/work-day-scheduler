// to wrap the whole functions to wait unitl the DOM elements are rendered first.
$(document).ready (function(){
//selected dom elements
  let  timeblock = $(".time-block");
  let hourIds = $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17");
  let eventInput = $("input");
  console.log(timeblock);
  console.log( hourIds);
  console.log(eventInput);
  let events = [];

  // displays current date on the top of the page in the header section
  const today = dayjs().format("dddd, MMMM D");// get current date and it formatted
  console.log(today);// to check that the date is displayed correctly
  $('#currentDay').text(today);// sends the date information from today to html
 
  //function to help get current hour and change time-block color
   function colorChange (){
    const currentHour = dayjs().format('HH:mm:ss A ');
    const currentHourParse = parseInt(currentHour);
    console.log(currentHourParse);
    for (var i = 0; i < timeblock.length;i++){
      if (currentHour < 9 ) {
        $(timeblock[i]).addClass("future");

      }else if (currentHour > 17){
        $(timeblock[i]).addClass("past");
      } else {
        $(timeblock[i]).addClass("present");
      }
    }
  };
  // helps render the color changes
  colorChange();





// TODO: This code should use the id in the containing time-block as a key to save the user input in local storage.HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// function to get the stored events from localstorage and is called at the bottom of the page.
function getEvents() {
  let storedEvents = JSON.parse(localStorage.getItem("events"));

  if (storedEvents !== null){
  events = storedEvents;
}
};
// store to local storage
function storeEvents() {
  // stringyfy and set in localstorage
  localStorage.setItem("events", JSON.stringify(events));
}

//save button click event and function
$(".saveBtn").on( "click",function (event) {
  event.preventDefault();

  let eventText = $(eventInput).val();
   if (eventText === ""){
    return;
   }

   events.push(eventText);
   eventInput.value = "";
  storeEvents(); 

  alert ("Clicked save button");
});

// calls getEvents to retrive data and render it to the page when loaded
getEvents();
});


 
  

  



