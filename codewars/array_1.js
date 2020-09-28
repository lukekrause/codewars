// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript


function outString(x) {
    let stringer = x.toString()
    return stringer.split()
  }
  
  const arr = (x) => {
  for (let i = 0; i < x; i++) {
      console.log(outString(i+1))
  }
  }
  
  arr(5)
  
  
  // OBEJCTIVE:
  // arr(5) // => [0,1,2,3,4]