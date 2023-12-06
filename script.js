// ensures that the dom loads before my code

$(function () {
  // variable declorations

  var hour = dayjs().hour();
  var hourEl = $(".row");
  var today = dayjs();
  var textareas = document.querySelectorAll(".description");

  // sets the current day at the top of the page

  $("#currentDay").text(today.format("MMM D, YYYY"));

  // checks the time and applies classes to the hour div elements to change their color based on time

  checkTime();

  function checkTime() {
    // iterates through each hour row
    hourEl.each(function () {
      // converts the current hourEl into a jquery object, wich jquery methods can be used upon
      var currentHourEl = $(this);
      // turns the id in each hourEl into an integer, wich can be compared to the dayjs hour variable
      var currentHour = parseInt(currentHourEl.attr("id"));
      // removes the classes from each hour row
      currentHourEl.removeClass("past present future");
      // assignes classes to the elements based on their time in relation to the actual time
      if (currentHour === hour) {
        currentHourEl.addClass("present");
      } else if (currentHour < hour) {
        currentHourEl.addClass("past");
      } else {
        currentHourEl.addClass("future");
      }
    });
  }
  // for each textarea, a unique key is returned wich is equal to the id of the parent element
  textareas.forEach((customTextarea) => {
    const key = `${customTextarea.parentElement.id}`;
    // sets the initial value of the textaria from localstorage. if there is none, an ampty string is returend
    customTextarea.value = localStorage.getItem(key) || "";
    // adds an event listener to the save button that triggers a function
    const saveButton = customTextarea.parentElement.querySelector(".saveBtn");
    saveButton.addEventListener("click", function () {
      // sets and item in localstorage with the key generated above, and the content as the user input in the textarea element
      localStorage.setItem(key, customTextarea.value);
      alert("Note saved successfully!");
    });
  });
});
