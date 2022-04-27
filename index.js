const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(array){
    const x = array.find(array => array.result === "W");
    if (x) {return x.year} 
}
console.log (superbowlWin(record))

functions