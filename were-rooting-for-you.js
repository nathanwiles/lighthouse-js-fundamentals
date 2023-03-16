const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let bestVeggie = 0;
  for (i = 0; i < vegetables.length; i++){
    let veggie = vegetables[i];
    console.log(veggie[metric]);
    
    if (veggie[metric] > bestVeggie) {
      bestVeggie = veggie[metric];
      winner = veggie.submitter;
    }
  }
 return winner;
};

