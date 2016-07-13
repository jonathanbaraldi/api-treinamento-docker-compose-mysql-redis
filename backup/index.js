var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

var redis = require('redis');
var mariasql = require('mariasql');



// process.env.MARIADB_PORT_3306_TCP_ADDR,
// process.env.MARIADB_1_ENV_MYSQL_ROOT_PASSWORD 

if (process.env.MARIADB_PORT_3306_TCP_ADDR==undefined) {
	var mariasql_host = '192.168.99.100:32879';
	var mariasql_password = '123';
} else {
	var mariasql_host = process.env.MARIADB_PORT_3306_TCP_ADDR;
	var mariasql_password = process.env.MARIADB_1_ENV_MYSQL_ROOT_PASSWORD;
}

console.log(mariasql_host);

// Configura conexão MariaDB
var connection = new mariasql({
	host     : mariasql_host,
	user     : 'root',
	password : mariasql_password
});


// console.log(process.env.MARIADB_PORT_3306_TCP_ADDR+"<<>>"+process.env.MARIADB_1_ENV_MYSQL_ROOT_PASSWORD);

// console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);
// MÉTODO 1: Usar variáveis de ambiente criadas pelo Docker
// var client = redis.createClient(
//      process.env.REDIS_PORT_6379_TCP_PORT,
//      process.env.REDIS_PORT_6379_TCP_ADDR
// );

// MÉTODO 2: Usar as entradas no host criadas pelo Docker em /etc/hosts (RECOMENDADO)

// var client = redis.createClient('6379', 'redis');


// Parsear o conteudo
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  	extended: true
}));


// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});



// GET
app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Jon's API";
	res.json(data);
	console.log(data);
});

/*
// REDIS
app.get('/redis',function(req,res){
	

	client.incr('counter', function(err, counter) {
    	if(err) return next(err);
    	var data = {
			"Data":""
		};
		data["Data"] = 'This page has been viewed ' + counter + ' times!';
    	res.json(data);
    	console.log(data);
 	});
 	
});
*/

app.listen(8080,function(){
	console.log("Conectado e escutando na porta 8080");
});
