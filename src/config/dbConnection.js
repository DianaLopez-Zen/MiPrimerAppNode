const mysql =require ("mysql");

module.exports = () =>{
	return mysql.createConnection({
		host: "sql9.freemysqlhosting.net",
		user: "sql9331074",
		password: "v42rylvSJk",
		database: "sql9331074"
	});
}