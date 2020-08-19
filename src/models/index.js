var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://admin_1:chukwubunna88@cluster0-yonxb.mongodb.net/test:sample_airbnb', { useNewUrlParser: true, useUnifiedTopology: true }).
mongoose.connect('mongodb://localhost:27017/TodosDB', { useNewUrlParser: true, useUnifiedTopology: true }).
  catch(error => error);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!")
});