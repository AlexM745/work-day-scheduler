// to wrap the whole functions to wait unitl the DOM elements are rendered first.

//selected dom elements
  let  timeblock = $(".time-block");
  let hour9= $("#hour-9"); 
  let hour10 = $("#hour-10");
  let hour11 = $("#hour-11");
  let hour12 = $("#hour-12");
  let hour13 = $("#hour-13");
  let hour14 = $("#hour-14");
  let hour15 = $("#hour-15");
  let hour16 = $("#hour-16");
  let hour17 = $("#hour-17");
  let blockhour = [ hour9,hour10,hour11,hour12,hour13,hour14,hour15,hour16, hour17,];
  let eventInput = $("input");
  ;
  let events = [];
  console.log("events", events);

  // displays current date on the top of the page in the header section
  const today = dayjs().format("dddd, MMMM D");// get current date and it formatted
  console.log(today);// to check that the date is displayed correctly
  $('#currentDay').text(today);// sends the date information from today to html
 
  //function to help get current hour and change time-block color
   function colorChange (){
    const currentHour = dayjs().format('HH:mm:ss A ');
    const currentHourParse = parseInt(currentHour);
    console.log("current hour",currentHourParse);
    for (var i = 0; i < timeblock.length;i++){
      var timeblockId = timeblock[i].id;
       
      if (timeblockId< currentHourParse ) {
        $(timeblock[i]).addClass("future");
        $(timeblock[i]).removeClass("present");
        $(timeblock[i]).removeClass("past");

      }else if (timeblockId > currentHourParse ){
        $(timeblock[i]).addClass("past");
        $(timeblock[i]).removeClass("future");
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


// TODO: This code should use the id in the containing time-block as a key to save the user input in local storage.HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(document).ready (function(){
//save button click event and function
$(".saveBtn").on( "click",function (event) {
  event.preventDefault();
console.log("this", this);
  let eventText = $(eventInput).val();
  let time = $(this).parent().attr("id");
  console.log("event text", eventText);
  console.log("time",time);
   if (eventText === ""){
    return;
   }

   events.push(eventText);
   eventInput.value = "";
  // storeEvents(); 
  localStorage.setItem("events",JSON.stringify(events,time));
  alert ("Clicked save button");
});


// store to local storage
// function storeEvents() {
//   // stringyfy and set in localstorage
//   localStorage.setItem("events",JSON.stringify(events,time));
  console.log("local storage", localStorage);
// }

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// function to get the stored events from localstorage and is called at the bottom of the page.
function getEvents() {
  let storedEvents = JSON.parse(localStorage.getItem("events"));
  console.log("stored events", storedEvents);
  if (storedEvents !== null){
  events = storedEvents;
}
};




// calls getEvents to retrive data and render it to the page when loaded
getEvents();
});


 
  

  



