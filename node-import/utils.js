
const simpleInterest = (principal,rate,time) =>{
    const simpleInterestValue = parseInt( (parseInt(principal) * parseInt(rate) * parseInt(time) )/ parseInt(100));
    return simpleInterestValue;
}

exports.simpleInterest = simpleInterest;