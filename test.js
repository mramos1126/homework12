// require the mysql npm package
var mysql = require('mysql');
// creates the connection that will connect this file to the mysql database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'lifeDB'
});

// initiates the connection that we created earlier
// connection.connect(function(err){
// 	// if there is an error log it
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}
// 	// if not error console.log connected
// 	console.log('connected as id: ' + connection.threadID);

// });

// ============================================================
// Show all Programmers
// ============================================================

// connection.query('SELECT * FROM programmers', function(err, res){
// 	// if error throw error.
// 	if (err) throw err;

// 	// print out contents of the response
// 	console.log(res);
// 	console.log(res[0].name +': '+res[0].role);
// });

// ============================================================
// Update Yintis to Zintis
// ============================================================

// connection.query('UPDATE programmers SET name = "Zintis" WHERE name = "Yintis"', function(err, res){
// 	// if error throw error.
// 	if (err) throw err;

// 	// print out contents of the response
// 	console.log('Update: ' + res.affectedRows + ' rows');
// });

// ============================================================
// Delete Zintis
// ============================================================


// var sql = "DELETE FROM ?? WHERE ?? = ?";
// var inserts = ['programmers', 'name', 'Zintis'];
// sql = mysql.format(sql, inserts);

// connection.query(sql, function(err, res){
// 	// if error throw error.
// 	if (err) throw err;

// 	// print out contents of the response
// 	console.log('deleted ' + res.affectedRows + ' rows');
// 	// console.log(res);
// 	// console.log(res[0].name +': '+res[0].role);
// });

// ============================================================
// Add Jeremiah
// ============================================================

// var values = '"Jeremiah","Backend","node.js","22"';
// var sql = 'INSERT INTO programmers (name , role, programminglanguage, yearsexperience) Values ('+values+')';
// //var inserts = ['programmers', 'name , role, programminglanguage, yearsexperience', '"Jeremiah","Backend","node.js","22"'];

// connection.query(sql, function(err, res){
// 	// if error throw error.
// 	if (err) throw err;

// 	// print out contents of the response
// 	console.log('Affected: ' + res.affectedRows + ' rows');
// 	// console.log(res);
// 	// console.log(res[0].name +': '+res[0].role);

// 	connection.query('SELECT * FROM programmers', function(err, res){
// 		// if error throw error.
// 		if (err) throw err;

// 		// print out contents of the response
// 		console.log(res);
// 		console.log(res[0].name +': '+res[0].role);
// 	});

// });

// ============================================================
// Join
// ============================================================

// var sql = 'SELECT programmers.id, programmers.name, programmers.role, contactinfo.phone, contactinfo.email, contactinfo.address '+
// 'FROM programmers '+
// 'LEFT JOIN contactinfo '+
// 'ON programmers.id=contactinfo.empID '+
// 'ORDER BY programmers.id;'

// connection.query(sql, function(err, res){
// 	// if error throw error.
// 	if (err) throw err;

// 	// print out contents of the response
// 	console.log(res);

// });