$(document).ready(function(){
	if ($('.slider>input').length) {
		$('.slider>input').ionRangeSlider({
			type:'single',
			from:25,
			min:0,
			max:100,
			onChange: function (data) {
				if (data.from < 30) {
					$('.shake-constant').removeClass("shake-little");
					$('.shake-constant').removeClass('shake-hard');
					$('.shake-constant').removeClass('shake');
					$('.right__main  video')[0].playbackRate = 0.5;
					$('.right__main  video')[1].playbackRate = 0.5;
					$("#music")[0].playbackRate = 0.5;
					$('.left__main>h1').text("WOJAK PRINTERR GOEES BRRR")
				}
				if (data.from < 30 && data.from > 40) {
					$('.shake-constant').removeClass("shake-little");
					$('.shake-constant').removeClass('shake-hard');
					$('.shake-constant').removeClass('shake');
					$('.right__main  video')[0].playbackRate = 0.8;
					$('.right__main  video')[1].playbackRate = 0.8;
					$("#music")[0].playbackRate = 1;
					$('.left__main>h1').text("WOJAK PRINTERR GOEES BRRR")
				}
				if (data.from > 40 && data.from < 60) {
					$('.shake-constant').removeClass("shake");
					$('.shake-constant').addClass("shake-little");
					$('.shake-constant').removeClass('shake-hard');
					$('.right__main  video')[0].playbackRate = 1.4;
					$('.right__main  video')[1].playbackRate = 1.4;
					$("#music")[0].playbackRate = 1.4;
					$('.left__main>h1').text("WOJAK PRINTERR GOEES BRRRRR");
				}
				if (data.from > 60 && data.from < 80) {
					$('.shake-constant').removeClass('shake-little');
					$('.shake-constant').addClass("shake");
					$('.shake-constant').removeClass('shake-hard');
					$('.right__main  video')[0].playbackRate = 1.8;
					$('.right__main  video')[1].playbackRate = 1.8;
					$("#music")[0].playbackRate = 1.8;
					$('.left__main>h1').text("WOJAK PRINTERR GOEES BRRRRRRRR");
				}
				if (data.from > 80 ) {
					$('.shake-constant').removeClass('shake-little');
					$('.shake-constant').removeClass('shake');
					$('.shake-constant').addClass('shake-hard');
					$('.right__main  video')[0].playbackRate = 2.2;
					$('.right__main  video')[1].playbackRate = 2.2;
					$("#music")[0].playbackRate = 2.2;
					$('.left__main>h1').text("WOJAK PRINTERR GOEES BRRRRRRRRRR");

				}

	        },
		});
	}
	
	$('.right__main  video')[0].playbackRate = 0.8;
	$('.controls>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass('disabled')) {
			$(this).removeClass('disabled');
			 const attr = $("#music").prop("muted");
			   $("#music").prop("muted", !attr);
			    $("#music")[0].volume = 0.3;
		} else {
			 const attr = $("#music").prop("muted");
			  $("#music").prop("muted", !attr);
			$(this).addClass('disabled');
			 $("#music")[0].volume = 0.3;
		}
	});
});