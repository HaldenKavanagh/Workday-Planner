// ensures that the dom loads before the code

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
    // iterates through each hour row, converting the hourEl elements to jquery objects and integers, wich can be compared to the actual time from dayJs.
    hourEl.each(function () {
      var currentHourEl = $(this);
      var currentHour = parseInt(currentHourEl.attr("id"));
      currentHourEl.removeClass("past present future");
      // assignes classes to the hourEl elements
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
