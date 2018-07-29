function steps(n, currentStep = 0, output = '') {
  if(n === currentStep) {
    return;
  };
  
  if(output.length === n){
    console.log(output);
    return steps(n, currentStep + 1);
  };

  const add = output.length <= currentStep ? '#' : ' ';
  steps(n, currentStep, output + add);
};