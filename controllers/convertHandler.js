/*
*
*
*       Complete the handler logic below
*       
*       
<li>I can convert 'gal' to 'L' and vice versa. <b>(1 gal to 3.78541 L)</b></li>
<li>I can convert 'lbs' to 'kg' and vice versa. <b>(1 lbs to 0.453592 kg)</b></li> 
<li>I can convert 'mi' to 'km' and vice versa. <b>(1 mi to 1.60934 km)</b></li>
<li>If my unit of measurement is invalid, returned will be 'invalid unit'.</li>
<li>If my number is invalid, returned with will 'invalid number'.</li>
<li>If both are invalid, return will be 'invalid number and unit'.</li>
<li>I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.</li>
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result,
    testNum = input.split(/[a-z]+/i).shift();
    let regex = /^\d*\.?\d+(\/\d*\.?\d+)?$/;  // .2  ,   1.2 / .5    ,   1.5  valid nums, enteros fracciones y decimales
    if(regex.test(testNum)){
      result=eval(testNum)
    }
       
    return result;
  };
  
  this.getUnit = function(input) {
    //var result = input.split(/\d+/).pop();
    var firstCharIndex = input.search(/[a-z]+/i),
        result = input.substr(firstCharIndex);
    
    if(/^(gal|l|lbs|kg|mi|km)$/i.test(result)){
      return result;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()){
      case 'gal': // devuelve en L
        result = 'l';
        break;
      case 'l':  // devuelve en gal
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi': // devuelte en Km
        result = 'km';
        break;
      case 'km':  // devuelve en mi
        result = 'mi';
        break;
      }
      return result;
  };

  //var expect = ['gallons','liters','kilometers','miles','kilograms','pounds'];
  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'gal': // devuelve en L
        result = 'gallons';
        break;
      case 'l':  // devuelve en gal
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result ='kilograms';
        break;
      case 'mi': // devuelte en Km
        result = 'miles';
        break;
      case 'km':  // devuelve en mi
        result = 'kilometers';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit.toLowerCase()){
      case 'gal': // devuelve en L
        result = initNum * galToL;
        break;
      case 'l':  // devuelve en gal
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi': // devuelte en Km
        result = initNum * miToKm;
        break;
      case 'km':  // devuelve en mi
        result = initNum / miToKm;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
    var result = {initNum, initUnit, returnNum, returnUnit, 
                  string : initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit)
                 };
    return result;
  };
  
}

module.exports = ConvertHandler;
