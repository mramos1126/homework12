var prompt = require('prompt');
var mysql = require('mysql');
 var con = mysql.createConnection({

host : 'localhost',
user : 'root',
password : 'root',
database : 'Bamazon',
port : 8889
});




	prompt.get(['ID' , 'Quantity' ], function (err, result) {

		console.log(result.ID);
		console.log(result.Quantity);
	

con.query('SELECT * FROM Products',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	console.log(rows);
	prompt.start();

	prompt.get(['ID' , 'Quantity' ], function (err, result) {

		console.log(result.ID);
		console.log(result.Quantity);
	});


//________________________________________________________________________________________________________
	// con.query('SELECT * from Products where ItemID =' + result.ID, function(err, newRows){
 //  		console.log('Data received from Db:\n');
 //  		console.log(newRows);
	// });
con.query('Update Products Set StockQuantity =' + result.Quantity +  'Where ItemID =' + result.ID , function(err , newRows){
	console.log('Data received from Db:\n');
 		console.log(newRows);
});


});
});
//________________________________________________________________________________________________________

