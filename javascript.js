//Task1

var a = prompt('Give me an integer: ', a);
var b = prompt('Give me another intenger: ', b);
function pow(a,b){	
	var x = a;
	for (var i=1; i<b; i++) {
		x*=a;
	}
	return x;
}

if (a != null & b != null) {
	alert('It is not an intenger!');
} else {
	alert(pow(a,b));
}




//Task2

var arr = []; //
for (var i = 0; i < 5; i++){
    arr[i] = prompt('Enter name:','');  

}  

var name = prompt('Enter name for confirm :');

function findName(arr, name) {
  
    if (arr.indexOf(name) > -1) {
    confirm(name + ', вы успешно вошли!');} else {
alert('User doesnt exist');
     }}
    

 findName(arr,name);