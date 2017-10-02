var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

router.route('/')
    //http://localhost:3001/calevents - get
    .get(function(req, res, next) {
        mongoose.model('calevent').find({}, function (err, events) {
              if (err) {
                  return console.error(err);
              } else {
                  res.format({ //require 'accept: application/json;' in the request header?
                    json: function(){
                        res.json(events);
                    }
                });
              }
        });
    })
    //http://localhost:3001/calevents - post
    .post(function(req, res) {
        //name = ""
        var date = req.body.date;
        var starttime = req.body.starttime;
        var endtime = req.body.endtime;
        var description = req.body.description;
        mongoose.model('calevent').create({
            date : date,
            starttime : starttime,
            endtime : endtime,
            description : description
        }, function (err, calevent) {
              if (err) {
                  //TODO: needs a better message
                  res.send("Unknown error");
              } else {
                  res.format({
                    json: function() {
                        res.json(calevent);
                    }
                });
              }
        })
    });

  module.exports = router;
