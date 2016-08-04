function donutFinance(cr, dr){
	balance = cr-dr;
	Morris.Donut({
		  element: 'donutFinance',
		  data: [
		    {label: "Total Credits: $", value: cr},
		    {label: "Total Debits: $", value: dr},
		    {label: "Current Balance: $", value: balance}
		  ],
		  colors: ['#34A852', '#EA4335', '#4A8CF6']
		});
}

function donutServices(all, pending){
	var complete = all-pending;
	Morris.Donut({
		element: 'donutServices',
		data: [
		       {label: "All Services: ", value: all},
		       {label: "Pending: ", value: pending},
		       {label: "Complete: ", value: complete}
		],
		colors: ['#5C5D5F', '#EA4335', '#34A852']
	});
}

function donutTodayFinance(cr, dr){
	balance = cr-dr;
	Morris.Donut({
		element: "donutTodayFinance",
		data: [
		       {label: "Total Credits: $", value: cr},
		       {label: "Total DEbits: $", value: dr},
		       {label: "Current Balance: $", value: balance}
		],
		colors: ['#34A852', '#EA4335', '#4A8CF6']
	});
}

function donutTodayServices(all, pending){
	var complete = all-pending;
	Morris.Donut({
		element: 'donutTodayServices',
		data: [
		       {label: "All Services: ", value: all},
		       {label: "Pending: ", value: pending},
		       {label: "Complete: ", value: complete}
		],
		colors: ['#5C5D5F', '#EA4335', '#34A852']
	});
}


(function donutFinanceData(){
	var ajax = new XMLHttpRequest();
	var totalCr = 0;
	var totalDr = 0;
	ajax.onreadystatechange = function(){
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				for (var i in jsonRecords){
					totalCr = jsonRecords[i].sumCredits;
					totalDr = jsonRecords[i].sumDebits;
					var cr = parseFloat(totalCr);
					var dr = parseFloat(totalDr);
					donutFinance(cr, dr);
					
				}
				
								 
			}
		}		
	}
	ajax.open('GET', './payments/accountdetails', true);
	ajax.send();
})();


//SERVICES
(function donutServicesData(){
	var ajax = new XMLHttpRequest();
	var allServices = 0;
	var pendingServices = 0;
	var completeServices = allServices-pendingServices;
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				
				for(var i in jsonRecords){
					allServices = jsonRecords[i].allServices;
					pendingServices = jsonRecords[i].pendingServices;
					var all = parseFloat(allServices);
					var pending = parseFloat(pendingServices);
					donutServices(all, pending);
				}
			}
		}
	}
	ajax.open('GET', './services/serviceAnalysis', true);
	ajax.send();
	
})();


(function donutTodayFinanceData(){
	var ajax = new XMLHttpRequest();
	var totalCr = 0;
	var totalDr = 0;
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				
				for(var i in jsonRecords){
					totalCr = jsonRecords[i].sumCredits;
					totalDr = jsonRecords[i].sumDebits;
					var cr = parseFloat(totalCr);
					var dr = parseFloat(totalDr);
					donutTodayFinance(cr, dr);
				}
			}
		}
	}
	ajax.open('GET', './payments/todayPaymentSummary', true)
	ajax.send();
})();

(function donutTodayServicesData(){
	var ajax = new XMLHttpRequest();
	var allServices = 0;
	var pendingServices = 0;
	var completeServices = allServices-pendingServices;
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				
				for(var i in jsonRecords){
					allServices = jsonRecords[i].allServices;
					pendingServices = jsonRecords[i].pendingServices;
					var all = parseFloat(allServices);
					var pending = parseFloat(pendingServices);
					donutTodayServices(all, pending);
				}
			}
		}
	}
	ajax.open('GET', './services/todayServicesSummary', true);
	ajax.send();
	
})();

function graph(){
	
	Morris.Area({
		  element: 'lineGraph',
		  data: [
		    { y: '2006', a: 90, b: 20 },
		    { y: '2007', a: 75,  b: 65 },
		    { y: '2008', a: 50,  b: 40 },
		    { y: '2009', a: 75,  b: 65 },
		    { y: '2010', a: 50,  b: 40 },
		    { y: '2011', a: 75,  b: 65 },
		    { y: '2012', a: 100, b: 90 }
		  ],
		  xkey: 'y',
		  ykeys: ['a', 'b'],
		  labels: ['Series A', 'Series B']
		});
	
};
