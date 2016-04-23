var select= process.argv[2];
var input = process.argv[3];
var inputID = process.argv[4];

var mysql = require('mysql');
 var con = mysql.createConnection({

host : 'localhost',
user : 'root',
password : 'root',
database : 'Bamazon',
port : 8889
});

// lets you pick one  of these functions
switch(select){
  case 'view-products':
  viewProducts();
  break;
  case 'view-low-inventory':
  lowInventory();
  break;
  case 'add-to-inventory' :
  addInventory();
  break;
  case 'add-new-product':
  addProduct();
}
  
// lets you see the database
  function  viewProducts(){

con.query('SELECT * FROM Products',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	console.log(rows);
});
  }

// lets you see inventory that quantity is below 5
function lowInventory(){
con.query('SELECT * FROM Products  WHERE StockQuantity < 5',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	console.log(rows);
});

}
//  add inventory 
function addInventory(){
con.query('UPDATE  Products SET StockQuantity ="' + input + '"WHERE ItemID =' + inputID,function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	
  	console.log(rows);
});

}
// add a new row that consist of id, product, department, price and quantity
function addProduct(){
con.query('INSERT INTO Products VALUES(' + input + ')' , function(err, rows){
	 if(err) throw err;
	console.log('Data received from Db:\n')
console.log(rows);
});

}
