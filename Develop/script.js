// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let  timeblock = $(".time-block");
let hourIds = $("#hour-9, #hour-10, #hour-11, #hour-12 #hour-13, #hour-14, #hour-15, #hour-16, #hour-17");

// displays current date on the top of the page in the header section
const today = dayjs().format("dddd, MMMM D");
console.log(today);// to check that the date is displayed correctly
$('#currentDay').text(today);// sends the date information from today to html
 
$(".saveBtn").on( "click",function saveBtn() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // //
  

    alert ("Clicked save button");
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  //function to help get current hour and change time-block color
  function time (){
    const currentHour = dayjs().format('HH:mm:ss A ');
    console.log(currentHour);
    console.log(timeblock);
    console.log( hourIds);
    for (var i = 0; i < timeblock.length;i++){
      if (currentHour > hourIds ) {
        $(hourIds).addClass("future");
      }else if (currentHour < hourIds){
        $(hourIds).addClass("past");
      } else {
        $(hourIds).addClass("present");
      }
    }
  };

  console.log (time());



 
  

  



