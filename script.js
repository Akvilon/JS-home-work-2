
var namesCount = 5;
var arr = [];
arr.length = namesCount;

for (var i = 0; i < namesCount; i++) {
	arr[i] = prompt("Enter your name:", '');
	if (arr[i] == null) break;
}

var msg = 'Access Denided';
var findName = prompt('Enter login');

if (findName !== null) {
	for (var i = 0; i < namesCount; i++) {
		if (arr[i] == findName) {
		msg = 'Welcome ' + findName + '!';
		}
	}
}
alert(msg);
