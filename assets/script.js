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

  var comment2 = document.getElementById("msg2")
  var item2 = [];
  function storeItems2() {
    localStorage.setItem('currentItem2', JSON.stringify(item2))
  };
  function renderToDo2() {
    var lastToDo2 = JSON.parse(localStorage.getItem("currentItem2"));
    if (lastToDo2 !== null) {
      todayToDo2 = lastToDo2;
      document.getElementById("msg2").innerHTML = todayToDo2
    }else {
      return;
    }
  };
  saveBtn2.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText2 = comment2.value.trim();
    if (toDoText2 === "") {
      return;
    }
    item2.push(toDoText2)
    storeItems2();
  });

  var comment3 = document.getElementById("msg3")
  var item3 = [];
  function storeItems3() {
    localStorage.setItem('currentItem3', JSON.stringify(item3))
  };
  function renderToDo3() {
    var lastToDo3 = JSON.parse(localStorage.getItem("currentItem3"));
    if (lastToDo3 !== null) {
      todayToDo3 = lastToDo3;
      document.getElementById("msg3").innerHTML = todayToDo3
    }else {
      return;
    }
  };
  saveBtn3.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText3 = comment3.value.trim();
    if (toDoText3 === "") {
      return;
    }
    item3.push(toDoText3)
    storeItems3();
  });

  var comment4 = document.getElementById("msg4")
  var item4 = [];
  function storeItems4() {
    localStorage.setItem('currentItem4', JSON.stringify(item4))
  };
  function renderToDo4() {
    var lastToDo4 = JSON.parse(localStorage.getItem("currentItem4"));
    if (lastToDo4 !== null) {
      todayToDo4 = lastToDo4;
      document.getElementById("msg4").innerHTML = todayToDo4
    }else {
      return;
    }
  };
  saveBtn4.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText4 = comment4.value.trim();
    if (toDoText4 === "") {
      return;
    }
    item4.push(toDoText4)
    storeItems4();
  });
  var comment5 = document.getElementById("msg5")
  var item5 = [];
  function storeItems5() {
    localStorage.setItem('currentItem5', JSON.stringify(item5))
  };
  function renderToDo5() {
    var lastToDo5 = JSON.parse(localStorage.getItem("currentItem5"));
    if (lastToDo5 !== null) {
      todayToDo5 = lastToDo5;
      document.getElementById("msg5").innerHTML = todayToDo5
    }else {
      return;
    }
  };
  saveBtn5.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText5 = comment5.value.trim();
    if (toDoText5 === "") {
      return;
    }
    item5.push(toDoText5)
    storeItems5();
  });
  var comment6 = document.getElementById("msg6")
  var item6 = [];
  function storeItems6() {
    localStorage.setItem('currentItem6', JSON.stringify(item6))
  };
  function renderToDo6() {
    var lastToDo6 = JSON.parse(localStorage.getItem("currentItem6"));
    if (lastToDo6 !== null) {
      todayToDo6 = lastToDo6;
      document.getElementById("msg6").innerHTML = todayToDo6
    }else {
      return;
    }
  };
  saveBtn6.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText6 = comment6.value.trim();
    if (toDoText6 === "") {
      return;
    }
    item6.push(toDoText6)
    storeItems6();
  });
  var comment7 = document.getElementById("msg6")
  var item7 = [];
  function storeItems7() {
    localStorage.setItem('currentItem7', JSON.stringify(item7))
  };
  function renderToDo7() {
    var lastToDo7 = JSON.parse(localStorage.getItem("currentItem7"));
    if (lastToDo7 !== null) {
      todayToDo7 = lastToDo7;
      document.getElementById("msg7").innerHTML = todayToDo7
    }else {
      return;
    }
  };
  saveBtn7.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText7 = comment6.value.trim();
    if (toDoText7 === "") {
      return;
    }
    item7.push(toDoText7)
    storeItems7();
  });
  var comment8 = document.getElementById("msg8")
  var item8 = [];
  function storeItems8() {
    localStorage.setItem('currentItem8', JSON.stringify(item8))
  };
  function renderToDo8() {
    var lastToDo8 = JSON.parse(localStorage.getItem("currentItem8"));
    if (lastToDo8 !== null) {
      todayToDo8 = lastToDo8;
      document.getElementById("msg8").innerHTML = todayToDo8
    }else {
      return;
    }
  };
  saveBtn8.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText8 = comment8.value.trim();
    if (toDoText8 === "") {
      return;
    }
    item8.push(toDoText8)
    storeItems8();
  });
  var comment9 = document.getElementById("msg9")
  var item9 = [];
  function storeItems9() {
    localStorage.setItem('currentItem9', JSON.stringify(item9))
  };
  function renderToDo9() {
    var lastToDo9 = JSON.parse(localStorage.getItem("currentItem9"));
    if (lastToDo9 !== null) {
      todayToDo9 = lastToDo9;
      document.getElementById("msg9").innerHTML = todayToDo9
    }else {
      return;
    }
  };
  saveBtn9.on('click', '.btn', function(event) {
    event.preventDefault();
    var toDoText9 = comment6.value.trim();
    if (toDoText9 === "") {
      return;
    }
    item9.push(toDoText9)
    storeItems9();
  });

  var currentHour = dayjs().hour()
  var hour9 = $('#hour-9')
  hour9 = dayjs().hour(9)
  function blockColor9() {
    if (currentHour > 9 ) {
      $('#hour-9').addClass('past')
    } else if (currentHour < 9) {
      $('#hour-9').addClass('future')
    }else {
      $('#hour-9').addClass('present')
    }
  }
  
});