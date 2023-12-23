function distanceFromHqInBlocks(local) {
        let result 
        if (local > 42) {
            result = local - 42
        }  else {
            result = 42 - local
        } return result
}
function distanceFromHqInFeet(local2) {
    distanceFromHqInBlocks(local2)
    let resultInFeet
    if (local2 > 42) {
        resultInFeet =  (local2 - 42) * 264
    } else {
        resultInFeet = (42 - local2) * 264
    } return resultInFeet
}
function distanceTravelledInFeet(start, destination) {
    let distanceInFeet
    if (destination > start) {
    distanceInFeet = (destination - start) * 264 
    } else { 
        distanceInFeet = (start - destination) * 264
    } return distanceInFeet
}
function calculatesFarePrice(start, destination) {
    let farePrice
    let distanceFeet
    if(destination > start) {
        distanceFeet = (destination - start) * 264
    } else distanceFeet = (start - destination) * 264
    if (distanceFeet <= 400) {
        farePrice = 0
    } else if(distanceFeet > 400 && distanceFeet <= 2000) {
        farePrice = (distanceFeet - 400) * .02
    } else if(distanceFeet > 2000 && distanceFeet <= 2500) {
        farePrice = 25
    } else if(distanceFeet > 2500) {
        farePrice = 'cannot travel that far'
    } return farePrice
}   