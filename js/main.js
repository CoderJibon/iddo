
$(document).ready(function(){

			new WOW().init();

			$("input#mail").focus(function(){

				$("label#maill").hide();
			});

			$("input#mail").blur(function(){

				var value = $(this).val();

				if( value.length == 0 ){
					$("label#maill").show();
				}else{
					$("label#maill").hide();
				}

				
			});
			
			$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
			
			


			window.onload = function onLoad() {


			    var circle = new ProgressBar.Circle('.s1', {
			        color: '#42b8dd',
			        duration: 1000,
			        easing: 'easeInOut',
			        strokeWidth : 5
			    });

			    circle.animate(.75);


			     var circle = new ProgressBar.Circle('.s2', {
			        color: '#42b8dd',
			        duration: 1000,
			        easing: 'easeInOut',
			        strokeWidth : 5
			    });

			    circle.animate(.25);


			     var circle = new ProgressBar.Circle('.s3', {
			        color: '#42b8dd',
			        duration: 1000,
			        easing: 'easeInOut',
			        strokeWidth : 5
			    });

			    circle.animate(.80);


			     var circle = new ProgressBar.Circle('.s4', {
			        color: '#42b8dd',
			        duration: 1000,
			        easing: 'easeInOut',
			        strokeWidth : 5
			    });

			    circle.animate(.50);





			};

		});