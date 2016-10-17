//Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"
// Output the number of characters in the sonnet
// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string



var sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet);

var orphans = sonnet.indexOf("orphans");
console.log(orphans);

var sonnet_length = sonnet.length;
console.log(sonnet_length);

var sonnet_winter = sonnet.replace("winter", "yuletide");
console.log(sonnet_winter);

var sonnet_large = sonnet_winter.replace(/ the | The |The /g, " a large ");
console.log(sonnet_large);

sonnet = sonnet_large;

var insert_sonnet_large = document.getElementById("sonnet");
insert_sonnet_large.innerHTML = sonnet_large;






































