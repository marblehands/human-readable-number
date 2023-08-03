module.exports = function toReadable (number) {  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let str = String(number);
let numberOfDozens = str.length;
let firstIndex = Number(str[0]);
let secondIndex = Number(str[1]);
let thirdIndex = Number(str[2]);

if (numberOfDozens === 1) {
  return units[number];
}

if (numberOfDozens === 2) {
  if (str[0] == 1) {
  return tens[secondIndex];
  } else if (str[1] == 0) {
    return dozens[firstIndex - 2];
  } else {
    return dozens[firstIndex - 2] + " " + units[secondIndex];
  }
}

if (numberOfDozens === 3) {
   if (str[1] == 0 && str[2] == 0) {
    return units[firstIndex] + " " + "hundred";

  } else if (str[1] == 0 && str[2] != 0) {
    return units[firstIndex] + " " + "hundred" + " " + units[thirdIndex];

  } else if (str[1] == 1) {
    return units[firstIndex] + " " + "hundred" + " " + tens[thirdIndex];

  } else if (str[1] >= 2 && str[2] != 0) {
    return units[firstIndex] + " " + "hundred" + " " + dozens[secondIndex - 2] + " " + units[thirdIndex];

  } else if (str[1] >= 2 && str[2] == 0) {
    return units[firstIndex] + " " + "hundred" + " " + dozens[secondIndex - 2];
  }
}

}

