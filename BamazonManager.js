var select= process.argv[2];
var input = process.argv[3];


var mysql = require('mysql');
 var con = mysql.createConnection({

host : 'localhost',
user : 'root',
password : 'root',
database : 'Bamazon',
port : 8889
});


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
  function  viewProducts(){

con.query('SELECT * FROM Products',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	console.log(rows);
});
  }

function lowInventory(){
con.query('SELECT * FROM Products  WHERE StockQuantity < 5',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	console.log(rows);
});

}

function addInventory(){
con.query('UPDATE  Products SET StockQuantity ="' + input + '"WHERE StockQuantity = 0',function(err,rows){
  if(err) throw err;

  	console.log('Data received from Db:\n');
  	
  	console.log(rows);
});

}

function addProduct(){
con.query('INSERT INTO Products VALUES(' + input + ')' , function(err, rows){
	 if(err) throw err;
	console.log('Data received from Db:\n')
console.log(rows);
});

}
