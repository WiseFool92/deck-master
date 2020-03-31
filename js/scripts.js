$(document).ready(function() {
  $("form#deck").submit(function(event) {
    event.preventDefault();
    var suits = ["of spades", "of hearts", "of diamonds", "of clubs"];
    var number = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    suits.forEach(function(deck){
     $('.output').append("<li>" + deck + "</li>");
    });
  });
});

// Above code doesnt fully function

// Below Code shows using loops to repeat and display what is inside the array

// $(document).ready(function() {
//   var arr = ["hi", "hey", "hello", "what's up?", "later"];
//   arr.forEach(function(element, index) {
//     $("#header" + (index + 1)).text(index + 1);
//     $("#header" + (index + 1)).click(function() {
//       $("#paragraph" + (index + 1)).text(element);
//     });
//   });
// });




// Below code 1 & 1A do the same thing

// 1) Shows forEach interaction and how it can be concisely made into a map()

// var arr = [1,2,3];
// var doubledArr = [];
// arr.forEach(function(el){
//   doubledArr.push(el * 2);
// });

// 1) A. Shows a map()

// var doubledArr = arr.map(function(el) {
//   return el * 2;
// })

