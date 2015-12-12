$(document).ready(function(){
	$('button').click(function(e){
		e.preventDefault();
	})
	
	var easingSpeed = 500;
	
	$('div#extUsersHome').click(function(){ //da cancellare, solo per demo
		location.href = './extUsersProfile.html';
	});
	
	$('#userMainApp-menu div.ico').click(function(){
		var elIndex = $(this).index();
		$('div.userMainAppContent').hide();
		$('div.userMainAppContent').eq(elIndex).show(easingSpeed);
		
	});
	
	$('div.main div.ico').click(function(){
		var elIndex = $(this).index();
		$('div.main div.ico').css({'background-color':'#ffffff'});
		$(this).css({'background-color':'#008CBA'});
		$('div.miniContent').hide();
		$('div.miniContent').eq(elIndex).show(easingSpeed);
	});
});