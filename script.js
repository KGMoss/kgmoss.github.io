var factList = [
  "The Sacramento-San Joaquin Delta supplies fresh water to 2/3 of the state’s population and millions of acres of farmland.",/*0*/
  "California receives 75 percent of its rain and snow in the watersheds north of Sacramento. However, 80 percent of California’s water demand comes from the southern 2/3 of the state.",/*1*/
  "California’s State Water Project (SWP) supplies water to more than 27 million people and 750,000 acres of farmland.",/*2*/
  "California's 515 alluvial groundwater basins and subbasins contribute approximately 38 percent toward the State's total water supply",
  "California agriculture irrigates more than 9 million acres using roughly 34 million acre-feet of water"];/*3*/


var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;


factButton.addEventListener("click", displayFact);


function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

