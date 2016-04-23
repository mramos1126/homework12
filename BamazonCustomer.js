var prompt = require('prompt');
var mysql = require('mysql');
var con = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'Bamazon',
	port: 8889
});

con.query('SELECT * FROM Products', function(err, rows) {
	if (err) throw err;

	console.log('Data received from Db:\n');
	console.log(rows);
	prompt.start();

	// ask the user a question
	prompt.get(['ID', 'Quantity'], function(err, result) {
		var updatedQuantity = 0;
		// why not just move your update query into this block right here?
		con.query('Update Products Set StockQuantity =' + result.Quantity + ' Where ItemID =' + result.ID, function(err, newRows) {
			console.log('Data received from Db:\n');
			console.log(newRows);
		});
	});
});
