function toWeirdCase(string){
  //TODO
    var words = string.split(' ');
    var answer = words.map(one);
    return answer.join(' ');
}

function one(string){
  var letters = string.split('');
  for(var index = 0; index < letters.length; index++){
    if(index % 2 ===0){
      letters[index] = letters[index].toUpperCase();
    }
    else{
     letters[index] = letters[index].toLowerCase();
    }
  }  
return letters.join('');
}


