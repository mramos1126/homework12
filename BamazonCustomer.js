var prompt = require('prompt');
var mysql = require('mysql');
var con = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'Bamazon',
	port: 8889
});
// gets everything from the database
con.query('SELECT * FROM Products', function(err, rows) {
	if (err) throw err;

	console.log('Data received from Db:\n');
	console.log(rows);
	prompt.start();

	// ask the user a question
	prompt.get(['ID', 'Quantity'], function(err, result) {
		
		// this will update the database
		con.query('Update Products Set StockQuantity =' + result.Quantity + ' Where ItemID =' + result.ID, function(err, newRows) {
			//  this will multiply the quantatity you selected and the price of the product. Although I am able to get the total and update the specific id item, it will also give me the total of the other items as well... 
			for (i = 0; i < rows.length; i++){
				if (result.ID = rows[i].price){
					console.log("Total is " + parseFloat(result.Quantity) * parseFloat(result.ID
					 ))}
					else { console.log("Insufficient Quantity")}
				}
			

			console.log('Data received from Db:\n');

			console.log(newRows);
		});
	});
});
