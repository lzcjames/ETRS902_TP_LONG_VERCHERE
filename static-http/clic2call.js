$(document).ready(function() {
	$('#btn').click(function() {
		var caller = document.forms["myForm"]["caller"].value;
		console.log(caller);
		if (caller == "") {
			alert("caller number must be filled out");
			return false;
		}

		var called = document.forms["myForm"]["called"].value;
		console.log(caller);
		if (called == "") {
			alert("number called must be filled out");
			return false;
		}
		
		call();
		
		function call() {
			$.ajax({
				type : "POST",
				url : "http://192.168.141.235:8088/ari/channels",
				dataType : 'json',
				headers : {
					"Authorization" : "Basic " + btoa("toto:pass1")
				},
				data : {
					endpoint : "PJSIP/" + caller,
					extension : called,
					context : "internes",
					priority : "1",
					callerId : caller
				},
				success : function(res, textStatus, xhr) {
					alert(xhr.status);

				}
			})
		}
	})
})