var cake = {
  name: "German Chocolate Cake",
  ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
  topping: "coconut frosting",
  bakeTemp: "425 degrees",
  bakeTime: "45 minutes",
  customer: "Tommy",
  decorate: function(updateFunction) {
    var status = "Decorating with " + this.topping + ". Ready to eat soon!"
    updateFunction(status)
    var obj = this
    setTimeout(function() {
      updateFunction(serve.call(obj, "Happy Eating!", obj.customer))
    }, 2000)
  }
}

var pie = {
  name: "Apple Pie",
  ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
  topping: "streusel",
  bakeTemp: "350 degrees",
  bakeTime: "75 minutes",
  customer: "Tammy"
}

function makeCake() {
  var updateCakeStatus = function(statusText) {
    document.getElementsByClassName("status")[0].innerText = statusText
  }
  mix.call(cake, updateCakeStatus)
}

function makePie() {
  var updatePieStatus = function(statusText) {
    document.getElementsByClassName("status")[1].innerText = statusText
  }
  mix.call(pie, updatePieStatus)
}

function updateStatus(statusText) {
  this.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  var obj = this
  setTimeout(function() {
    cool.call(obj, updateFunction)
  }, 2000)
  updateFunction(status)
}

function mix(updateFunction) {
  var status = "Mixing " + this.ingredients.join(", ")

  cake.decorate.bind(this)
  var obj = this
  setTimeout(function() {
    bake.call(obj, updateFunction)
  }, 2000)
  updateFunction(status)
}

function cool(updateFunction) {
  var status = "It has to cool! Hands off!"
  var obj = this
  setTimeout(function() {
    cake.decorate.call(obj, updateFunction)
  }, 2000)
  updateFunction(status)
}

function makeDessert() {
  if (this.text == "Make Pie") {

    makePie()

  } else if (this.text == "Make Cake") {

    makeCake()
  }

  //add code here to decide which make... function to call
  //based on which link was clicked
}

function serve(message, customer) {
  //you shouldn't need to alter this function
  return (customer + ", your " + this.name + " is ready to eat! " + message)
}

document.addEventListener("DOMContentLoaded", function(event) {
  //you shouldn't need to alter this function
  var cookLinks = document.getElementsByClassName("js-make")
  for (var i = 0; i < cookLinks.length; i++) {
    cookLinks[i].addEventListener("click", makeDessert)
  }
});
