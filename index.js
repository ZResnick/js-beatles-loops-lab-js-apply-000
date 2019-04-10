// add solution here


function theBeatlesPlay(musicians, instruments){
  
  let newArr = [];  //create a new array to store our results
  
  for (let i = 0; i < musicians.length; i++){
    let currentMusician = musicians[i];
    let currentInstrument = instruments[i];
    let curString = `${currentMusician} plays ${currentInstrument}`;
    newArr.push(curString);
  }
  return newArr
}

