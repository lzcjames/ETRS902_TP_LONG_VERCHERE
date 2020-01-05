$(document).ready(
		function() {

			function list_endpoints() {
				$.ajax({
					type : "GET",
					url : "http://192.168.141.235:8088/ari/endpoints",
					dataType : 'json',
					headers : { 
						"Authorization" : "Basic " + btoa("toto:pass1")
					},
					success : function(data) {

						data.forEach(function(element) {
							$('.table tbody').append(
									'<tr><td>' + element.resource + '</td>'
											+ '<td>' + ' (' + element.state
											+ ')</td></tr>');
						});
					}
				})
			}
			list_endpoints();

			setInterval(function() {
				$('.table tbody tr').remove();
				$('.table tbody td').remove();
				list_endpoints();
			}, 5000);
		})