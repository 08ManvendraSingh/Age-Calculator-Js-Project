var count=[31,28,31,30,31,30,31,31,30,31,30,31];
function age(){
	var btime=new Date(document.getElementById('born').value);
	var byear=btime.getFullYear();
	var bmonth=btime.getMonth();
	var bdate=btime.getDate();

	var ptime=new Date();
	var pyear=ptime.getFullYear();
	var pmonth=1+ptime.getMonth();
	var pdate=ptime.getDate();
}