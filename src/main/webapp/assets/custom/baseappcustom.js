var Custom = Custom || {};

Custom.extend = function(proto, literal){
	var newLiteral = Object.create(proto);
	Object.keys(literal).forEach(function(k) {
		newLiteral[k] = literal[k];
	})
	return newLiteral;
};


Custom.Base = {
		responseTarget : '',
		httpMethod : 'GET',
		async : true,
		httpUrl : '',
		requestParams : '',
		model : '',
		getElement : function(elId) {
			return document.getElementById(elId);
		},
		updateTarget : function(response) {
			var me = this;
			me.getElement(me.responseTarget).innerHTML = response;
		},
		ajaxRequest : function() {
			var me = this;
			var xhr = new XMLHttpRequest();
			
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						me.updateTarget(xhr.responseText);
					}
				}
			}
			xhr.open(me.httpMethod, me.httpUrl, me.async);
			if(me.requestParams) {
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				xhr.send(me.requestParams);
			}else
				xhr.send();
			
		},
		submitForm : function(){
			var me = this;
			var formValues = me.model.filter(function (el) {
				var formEl = me.getElement(el.id);
				if(!formEl)
					return;
				
				if(!formEl.value)
					return;
				
				el.value = formEl.value;
				
				return el;
			}).map(function(el) {
				return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
			}).join('&');
			
			me.ajaxRequest.call({
				httpMethod : 'POST',
				httpUrl : me.httpUrl,
				requestParams : formValues,
				responseTarget : me.responseTarget,
				updateTarget : function(response){
					//me.init();
				}
			});
		},
		successfulregistration : function() {
			var message = "<i style='color:blue'>Registration Successful</i>";
			me.getElement(me.responseTarget).innerHTML = message;
		}
		
};