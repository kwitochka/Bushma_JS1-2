//Task1

var a = prompt('Give me an integer: ', a);
var b = prompt('Give me another intenger: ', b);
function pow(a,b){	
	var x = a;
	if (b < 0) {
			x = -1/(a*b);
		return x;
		}
		else if (b==0) {
			x = 1;
		return x;}
	for (var i=1; i<b; i++) {
			x*=a;
		}
		return x;
	}
	
alert(pow(a,b));




// Task2

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

