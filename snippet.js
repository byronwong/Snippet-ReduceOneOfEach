// Helper function to tally data
let data = [];

let newArry = data.reduce((accumulator, currentVal) => {
    // IF in the accumulator the item exists then return accumulator unchanged
    // IF item does not exist then push to accumulator then return
    if(accumulator.indexOf(currentVal.item) === -1){
      accumulator.push(currentVal.item); // NOTE: push returns the lenght of an array, so don't prefix return here.
    }
    return accumulator;
  }, []);