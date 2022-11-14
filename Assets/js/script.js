
$(function () {

  const timeBox = $(".time-block");
  const currentTime = dayjs().format("H");

  //saving to local storage
  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
  });

  //retrieving local storage
  for (let index = 0; index < localStorage.length; index++) {
      let storageKey = localStorage.key(index);
        $("#" + storageKey).children("textarea").val(localStorage.getItem(storageKey));   
      

  }

  //adding classes of past, present, or future
  for (let index = 0; index < timeBox.length; index++) {
    let hourIndex= timeBox[index].id;
    let currentHour = hourIndex[5] + hourIndex[6];
    if (currentTime == currentHour) {
      $("#" + hourIndex).addClass("present")
    } else if (currentTime > currentHour) {
      $("#" + hourIndex).addClass("past") 
    } else {
      $("#" + hourIndex).addClass("future")
    }
    }



  // displaying current date and time in header
  let now = dayjs().format("dddd, MMMM D, YYYY");
  let x = document.getElementById("header");

  $("#currentDay").text(now);

});
