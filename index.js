function saturdayFun (act = "roller-skate") {
    return `This Saturday, I want to ${act}!`
}
function mondayWork (thing = 'go to the office') {
    return `This Monday, I will ${thing}.`
} 
function wrapAdjective (para = "*") {
    return function inner (para1 = 'special') {
        return `You are ${para}${para1}${para}!`
    }
}