// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // var for save buttons
  var saveBtn1 = $('#hour-9')
  var saveBtn2 = $('#hour-10')
  var saveBtn3 = $('#hour-11')
  var saveBtn4 = $('#hour-12')
  var saveBtn5 = $('#hour-1')
  var saveBtn6 = $('#hour-2')
  var saveBtn7 = $('#hour-3')
  var saveBtn8 = $('#hour-4')
  var saveBtn9 = $('#hour-5')
// displays current date and time in header
  var rightNow = $('#currentDay')
  function currentTime() {
    setInterval(function () {
      rightNow.text(dayjs().format('MMM DD, YYYY h A'))
    }, 1000)
  }
  currentTime();

  var comment = document.getElementById("msg")
  var item1 = [];
  // stores input into local storage
  function storeItems() {
    localStorage.setItem('currentItem1', JSON.stringify(item1))
  }
// renders input onto page 
 function renderToDo() {
    var lastToDo = JSON.parse(localStorage.getItem("currentItem1"));
    if (lastToDo !== null) {
      todayToDo = lastToDo;
      document.getElementById("msg").innerHTML = todayToDo
    }else {
      return;
    }
  }
// event listener to save input
  saveBtn1.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText = comment.value.trim();
    if (toDoText === "") {
      return;
    }
    item1.push(toDoText)
    storeItems();
  });

});