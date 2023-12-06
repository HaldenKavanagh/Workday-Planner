$(function () {
  var hour = dayjs().hour();
  var hourEl = $(".row");

  console.log(hour);

  checkTime();

  function checkTime() {
    console.log("checking");

    hourEl.each(function () {
      var currentHourEl = $(this);
      var currentHour = parseInt(currentHourEl.attr("id"));

      currentHourEl.removeClass("past present future");

      if (currentHour === hour) {
        currentHourEl.addClass("present");
      } else if (currentHour < hour) {
        currentHourEl.addClass("past");
      } else {
        currentHourEl.addClass("future");
      }
    });
  }

  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));

  var textareas = document.querySelectorAll(".description");
  textareas.forEach((customTextarea) => {
    const key = `${customTextarea.parentElement.id}`;

    customTextarea.value = localStorage.getItem(key) || "";

    const saveButton = customTextarea.parentElement.querySelector(".saveBtn");
    saveButton.addEventListener("click", function () {
      localStorage.setItem(key, customTextarea.value);

      alert("Note saved successfully!");
    });
  });
});
