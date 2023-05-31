 // program 01...........
 // var mark=parseInt(prompt("Enter Your Mark"));
 
 // if(mark<33){
	 // console.log("F");
 // }else{
	 // console.log("Pass");
 // }
 
 
//program 02

var bangla=parseInt(prompt("Bangla Mark"));
var english=parseInt(prompt("English Mark"));
var math=parseInt(prompt("Math Mark"));
var islam=parseInt(prompt("islam Mark"));

var obtainMark=bangla+english+math+islam;

document.write('Bangla='+bangla+'<br>');
document.write('English='+english+'<br>');
document.write('Math='+math+'<br>');
document.write('Islam='+islam+'<br>');
document.write('Total Mark='+obtainMark+'<br>') ;

//grading section

if(bangla<33 || english<33 || math<33 || islam<33){
	document.write('Your Grade:'+"F");
}
else if(obtainMark>=320){
	document.write('Your Grade:'+"A+");
	
	
}
else if(obtainMark>=280){
	document.write('Your Grade:'+"A");
}
else if(obtainMark>=240){
	document.write('Your Grade:'+"A-");
}
else if(obtainMark>=200){
	document.write('Your Grade:'+"B");
}
else if(obtainMark>=160){
	document.write('Your Grade:'+"C");
}
else if(obtainMark>=132){
	document.write('Your Grade:'+"D");
}



