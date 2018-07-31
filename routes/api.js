/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if (!initNum && !initUnit) {return res.send('invalid number and unit'); }
      if (!initNum) {return res.send('invalid number'); }
      if (!initUnit) {return res.send('invalid unit'); }

      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);

    let formatReturnNum = Number.parseFloat(returnNum.toFixed(5));

      var toString = convertHandler.getString(initNum, initUnit, formatReturnNum, returnUnit);

    //console.log(toString);
      res.json(toString);
    });
    
};
