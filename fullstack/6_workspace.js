// 01 Greeting

// YOUR CODE BELOW

const greeting = (name) => {
    if (name)  {
    return `Hello ${name}!`;
    }
  return 'Hello!'
  };

// 02 Do You Play The Theremin

// YOUR CODE BELOW


const doYouPlayTheTheremin = (name) => { 
    if (name[0] === 'S' || name[0] === 's') {
    
       return true; x
  }
    
    return false;
  }
  
// 03 Last Character

// YOUR CODE BELOW

const lastCharacter = (endCharOne, endCharTwo) => {
    if (endCharOne[endCharOne.length - 1] === endCharTwo[endCharTwo.length - 1]) {
            return true; 
      } 
  return false; 
    
  }

  // 04 Max of Three


// YOUR CODE BELOW

const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) return num1;
    if (num2 > num1 && num2 > num3) return num2;
    if (num3 > num1 && num3 > num2) return num3;
  
  };

  // 05 Every Which Way

  // YOUR CODE BELOW

const everyWhichWay = (num1, num2, num3) => {
    if (num1 + num2 === num3) return 'sum';
    if (num1 - num2 === num3) return 'difference';
    if (num1 * num2 === num3) return 'product';
    if (num1 / num2 === num3) return 'fraction';
  
  
  return null;
    
  }