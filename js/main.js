function oldi()
{
var old=document.getElementById('old');
alert(old.value);
}
function newi()
{
var newi=document.getElementById('new');
var filename=newi.value+".html";
alert(filename);
var string="<!doctype html><html>    <head>        <title>"+newi.value+"</title><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><link href='impress-demo.css' rel='stylesheet' /></head><body><div id='impress' count='0'> ";
string=string+"</div><script>if ('ontouchstart' in document.documentElement) { document.querySelector('hint').innerHTML = '<p>Tap on the left or right to navigate</p>';}</script><script src='impress.js'></script><script>impress().init();</script></body></html>"
var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
	/*alert(blob);*/    
	saveAs(blob,filename);
	window.open("beeth.html");
}




