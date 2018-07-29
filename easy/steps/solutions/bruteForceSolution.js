function steps(n) {
  let iterator = 1;
  let output = '';

  while(iterator <= n){
    for(let i = 0; i < iterator; i++){
      output += '#';
    };
    for(let j = 0; j < n - iterator; j++){
      output += ' ';
    }
    console.log(output);
    iterator ++;
    output = '';
  };
};