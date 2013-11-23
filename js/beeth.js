

//handleFileSelect is what activates when you press load 

function handleFileSelect()
{
if(window.File && window.FileReader && window.FileList && window.Blob){}
else
{ alert ("sorry not supported"); return;}
input =document.getElementById('fileinput');
if(!input)
{
alert("Enter file");
}
else 
{
var pos=document.getElementById("pos");

pos.value="1";
(document.getElementById("slidex")).value=0;
(document.getElementById("slidey")).value=0;
(document.getElementById("slidez")).value=0;
(document.getElementById("rotx")).value=0;
(document.getElementById("roty")).value=0;
(document.getElementById("rotz")).value=0;
(document.getElementById("datascale")).value=0.5;
(document.getElementById("content")).value="";




file=input.files[0];
fr =new FileReader();
fr.onload=receivedText;
fr.readAsText(file);
alert("File loaded");
}
}
function receivedText()
{
var x=fr.result;

i=x.length-1;
flag=0;
sessionStorage.setItem("filecont",x);
sessionStorage.setItem("FILENAME",input.value);
while(flag==0 && i>0)
{

if((x[i]=="'") && (x[i-1]=='=') && (x[i-2]=="t") && (x[i-3]=="n") && (x[i-4]=="u") && (x[i-5]=="o") && (x[i-6]=="c")) 
{
var j=2;
var vecarr=x[i+1];
while(x[i+j]!="'")
{
(vecarr)=(vecarr)+(x[i+j]);

j=j+1;
}
sessionStorage.setItem("count",vecarr);

flag=1;
}
else
{
}
i=i-1;
}  

return;
}

//for viewing previous
function prev(){
var pos=document.getElementById("pos");
if(pos.value>1){
pos.value=(parseInt(pos.value)-1);
go();
}
else
{
alert("No pages behind");
}

}

function next(){
var pos=document.getElementById("pos");
if((parseInt(pos.value)>=1)&& (parseInt(pos.value) < parseInt(sessionStorage.getItem("count")))){
pos.value=(parseInt(pos.value)+1);
go();
}
else
{
alert("no pages forward");
}


}
function save()
{;
var pos=document.getElementById("pos");

if((parseInt(pos.value))!=parseInt(sessionStorage.getItem("count")))
{
if((parseInt(pos.value))<parseInt(sessionStorage.getItem("count")))
{



var editcon=sessionStorage.getItem("filecont");

var found=editcon.search("count='"+pos.value);

var subedit='';
for(i=found-1;editcon[i]!='<';i--)
{
subedit=subedit+editcon[i];
}
subedit=subedit+"<";


subedit=subedit.split("").reverse().join("");

var subpostedit='';
for(i=found;editcon[i]!='<'&&editcon[i+1]!='/';i++)
{
subpostedit=subpostedit+editcon[i];
}
subpostedit=subpostedit+"</div>"
var finale=subedit+subpostedit;


 
var slidex=document.getElementById("slidex");
var slidey=document.getElementById("slidey");
var slidez=document.getElementById("slidez");
var rotx=document.getElementById("rotx");
var roty=document.getElementById("roty");
var rotz=document.getElementById("rotz");
var datascale=document.getElementById("datascale");
if(document.getElementById("slide").checked)
choice="step slide";
else choice="step";
var content=document.getElementById("content")
var count=pos.value;
count=parseInt(count)

string="<div class='"+choice+"' data-x='"+slidex.value+"' data-y='"+slidey.value+"' data-z='"+slidez.value+"' data-rotate-x='"+rotx.value+"' data-rotate-y='"+roty.value+"' data-rotate-z='"+rotz.value+"' data-scale='"+datascale.value+"' count='"+count+"'>"+content.value+"</div>";

var filecontent=sessionStorage.getItem("filecont");
sessionStorage.setItem("filecont",filecontent.replace(finale,string));
alert("saved the edited presentation");




}
else
{
{
var slidex=document.getElementById("slidex");
var slidey=document.getElementById("slidey");
var slidez=document.getElementById("slidez");
var rotx=document.getElementById("rotx");
var roty=document.getElementById("roty");
var rotz=document.getElementById("rotz");
var datascale=document.getElementById("datascale");
if(document.getElementById("slide").checked)
choice="step slide";
else choice="step";
var content=document.getElementById("content")
var count=sessionStorage.getItem("count");
count=parseInt(count)
count=count+1;
string="<div class='"+choice+"' data-x='"+slidex.value+"' data-y='"+slidey.value+"' data-z='"+slidez.value+"' data-rotate-x='"+rotx.value+"' data-rotate-y='"+roty.value+"' data-rotate-z='"+rotz.value+"' data-scale='"+datascale.value+"' count='"+count+"'>"+content.value+"</div>";
sessionStorage.setItem("count",count);
var cont=sessionStorage.getItem("filecont");
var parta="";
var partt="";
for (i=0;i<cont.length;i++)
{
if(i<cont.length-245)
{parta=parta+cont[i];
}
else
partt=partt+cont[i];}
var final="";
final=parta+string+partt;
	sessionStorage.setItem("filecont",final);	
        alert("Saved new slide");
        pos.value=(parseInt(pos.value)+1);
        alert("New slide "+pos.value);






}}
}}
function submiti()
{
var final=sessionStorage.getItem("filecont");
var blob = new Blob([final], {type: "text/plain;charset=utf-8"});
	var name=sessionStorage.getItem("FILENAME");  
	saveAs(blob,name);
}

function go()
{
var x=document.getElementById("pos");
if(parseInt(x.value) > parseInt(sessionStorage.getItem("count")))
{
alert("not exist");
}
else
{
flag=0;
var con=sessionStorage.getItem("filecont");
i=con.length;
while(flag==0 && i>0)
{

if((con[i]=="'") && (con[i-1]=='=') && (con[i-2]=="t") && (con[i-3]=="n") && (con[i-4]=="u") && (con[i-5]=="o") && (con[i-6]=="c")) 
{
var j=2;
var vecarr=con[i+1];
while(con[i+j]!="'")
{
(vecarr)=(vecarr)+(con[i+j]);
j=j+1;
}




if(vecarr==((document.getElementById("pos")).value))
{
var j;
for(j=i;con[j]!="<";j--)
{}
var k;
for(k=i;con[k]!="<";k++)
{}

var sub=con.slice(j,k);

var cool=sub.split("'");
     
(document.getElementById("slidex")).value=cool[3];
(document.getElementById("slidey")).value=cool[5];
(document.getElementById("slidez")).value=cool[7];
(document.getElementById("rotx")).value=cool[9];
(document.getElementById("roty")).value=cool[11];
(document.getElementById("rotz")).value=cool[13];
(document.getElementById("datascale")).value=cool[15];
(document.getElementById("pos")).value=cool[17];
var ne=cool[18];
var nee=ne.slice(1);
{
len=19;
while(cool.length!=len)
{

nee=nee+"'"+cool[len];

len++;

}
}

(document.getElementById("content")).value=nee;
flag=1;

}
else
{}
}
else
{}
i=i-1;
}  
}
}




