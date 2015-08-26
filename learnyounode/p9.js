var http = require('http');
var bl = require('bl');

var total = [];
var count = 0;

/*

FUNCIONA OK, PERO HAY 3 METODOS IGUALES

function testEnd(id, data) {
	count++;
	total[id] = data;
	if (count == 3) {
		total.forEach(function(x) {
			console.log(x.toString());
		});
	}
};

http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data){
		if (err) throw err;
		testEnd(0, data);
	}));
});
http.get(process.argv[3], function(response) {
	response.pipe(bl(function(err, data){
		if (err) throw err;
		testEnd(1, data);
	}));
});
http.get(process.argv[4], function(response) {
	response.pipe(bl(function(err, data){
		if (err) throw err;
		testEnd(2, data);
	}));
});
*/


/*

NO FUNCIONA PORQUE DENTRO DEL RESPONSE.PIPE I SIEMPRE VALE 3

for (var i=0; i<3; i++) {
	http.get(process.argv[2 + i], function(response) {
		response.pipe(bl(function(err, data){
			if (err) throw err;
			total[i] = data.toString();
			count++;
			console.log("i=" + i);
			console.log("count=" + count);
			if (count == 3) {
				total.forEach(function(x) {
					console.log(x.toString());
				});
			}
		}));
	});	
}

*/

/*
EN ESTE CASO SI FUNCIONA PORQUE EL I VA VARIANDO
*/
function httpGet(i) {
	http.get(process.argv[2 + i], function(response) {
		response.pipe(bl(function(err, data){
			if (err) throw err;
			total[i] = data.toString();
			count++;
			if (count == 3) {
				total.forEach(function(x) {
					console.log(x.toString());
				});
			}
		}));
	});	
}
for (var i=0; i<3; i++) {
	httpGet(i);
}
