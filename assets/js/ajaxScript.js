$(".contact-form").submit(function () {
       		var str = (this).serialize();
       		$.ajax({
       			type: 'POST',
       			url: '/ajaxForm.php',
       			data: str,
       			success: alert("ssdf")
       		});
       }); 
