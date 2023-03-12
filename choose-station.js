const chooseStations = function (stations) {
  // Your code in here ...
  let selections = [];
  for (let choice of stations){
    if(choice[1] >= 20 && (choice[2] == "community centre" || choice[2] == "school")){
      selections.push(choice[0]);
    }
  }
  return selections;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));