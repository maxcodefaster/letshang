var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/letshang", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ' + db, ' + ', response);
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var EventsSchema = new Schema({
  name: {
    type: String
  },
  message: {
    type: String
  },
  eventtyp: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  }

}, {
  versionKey: false,
  collection: 'events'
});

var UsersSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },

}, {
  versionKey: false,
  collection: 'users'
});


var model = mongo.model('events', EventsSchema, 'events');
/* var userModel = mongo.model('users', UsersSchema, 'users');

var patientZero = new userModel({
  name: 'Zildjian'
});
patientZero.save(function (err) {
  if (err) // ...
    res.send(err);
}); */

app.post("/api/SaveEvent", function (req, res) {
  var mod = new model(req.body);
  if (req.body.mode == "Save") {
    if (req.body.name == null | req.body.message == null | req.body.eventtyp == null | req.body.time == null) {
      res.send({
        data: "Please fill out all fields",
        action: "Will do..."
      });
    } else {
      mod.save(function (err) {
          if (err) {
            res.send(err);
          } else {
            res.send({
              data: "Your Quality Time is about to start",
              action: "Nice!"
            });
          }
        })
      }
  } else {
    model.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        message: req.body.message,
        eventtyp: req.body.eventtyp,
        time: req.body.time
      },
      function (err, data) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            data: "Record has been Updated..!!"
          });
        }
      });


  }
})

app.post("/api/deleteEvent", function (req, res) {
  model.remove({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "Record has been Deleted...",
        action: ":("
      });
    }
  });
})



app.get("/api/getEvent", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})


app.listen(8080, function () {

  console.log('Example app listening on port 8080!')
})
