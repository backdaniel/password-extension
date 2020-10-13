display = document.getElementById('password')

var length = 12;
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var password = "";
for (var i = 0, n = charset.length; i < length; ++i) {
	password += charset.charAt(Math.floor(Math.random() * n));
}
display.innerHTML = password;
