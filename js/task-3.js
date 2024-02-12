
  ## задача 1

function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content) * 2;
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border);
  
  return contentWidth + paddingWidth + borderWidth;
}

getElementWidth("50px", "8px", "4px"); // повертає 62
getElementWidth("60px", "12px", "8.5px"); // повертає 80.5
getElementWidth("200px", "0px", "0px"); // повертає 200

## задача 2

function checkForSpam(message) {
  let lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

// Перевірка роботи функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true