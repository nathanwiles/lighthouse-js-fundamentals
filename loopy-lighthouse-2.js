
function loopyLighthouse(range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++){
    let output;
    (i % multiples[0] === 0 && i % multiples[1] === 0) ? output = words[0] + words[1] :
    (i % multiples[0] === 0) ? output = words[0] :
    (i % multiples[1] === 0) ? output = words[1] :
    output = i;
    console.log(output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

