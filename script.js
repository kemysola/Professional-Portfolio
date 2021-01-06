const array =[10,20,30,40,50,60,70,80,90,100];
function sumArray(a,b){
  let sum = 0;
  //requirement a
  if(a< 0 || b < 0){
    return -1;

  }


  //requirement b and c 
  if(a>b || !array.find(no => no ===a|| no === b)){
    return 0;
  }

  //requirement c , using a tenary operator , loop through
  array.map(no => no>=a && no <= b? sum +=no :null)
    return `Answer:${sum}`;
  
}

console.log(sumArray(20,50))