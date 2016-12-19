var allNums = [];
var primes = [];

var isPrime = function(number) {
  if (number < 2) {
    return false;
  } else {
    for (var index = 2; index < number; index += 1) {
      if (number % index === 0) {
        return false;
      }
    }
    return true;
  }
}

var removeMultiples = function(array) {
  for (var index = 1; index < array.length; index += 1) {
    if (array[index] % array[0] === 0) {
      array.splice(index, 1);
    }
  }
}

var getPrimes = function(number) {
  for (var index = 2; index < number; index += 1) {
    allNums.push(index);
  }

}

$(document).ready(function() {
  $("form#number-submit").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    $("#input").text(input);
    getPrimes(input);
    removeMultiples(allNums);
    console.log(allNums);
    $(".output").show();
  })
})
