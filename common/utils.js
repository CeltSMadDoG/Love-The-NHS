export function round(x, n) {
  return parseFloat(Math.round(x * Math.pow(10, n)) /Math.pow(10, n)).toFixed(n);
}



export function calculateDistance(distance, unitType) {
  if (unitType === 'miles') {
    return `${round((distance * 0.00062137), 2)}`;
  }
    return `${round((distance / 1000), 2)}`;
}
 
  
  
  


export function getDisplayDay (day) { // 0 -6
  const strDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return strDays[day];

}

export function getDisplayMonth (month) { // 0 -6
  const strMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Sat", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return strMonths[month];

}


// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
