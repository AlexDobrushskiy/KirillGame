let ballTop = 0;
let ballLeft = 0;
const speed = 7;
function isBallInside() {
 	if (ballTop<0 || ballTop >500) {
 		return false;
 	}
 	if (ballLeft<0 || ballLeft >700) {
 		return false;
 	}
 	return true;
}

$(document).ready( function () {
	$(document).keypress(function(e) {
		switch(e.which) {
		  case 97: // left-a
		  	if (ballLeft>0) {
		  		ballLeft = ballLeft -speed;
		  	}
		    break;
		  case 119: // up-w
		  	if (ballTop>0) {
		  		ballTop = ballTop -speed;
		  	}
		    break;
		  case 100: // right-d
		  	if (ballLeft<670) {
		  		ballLeft = ballLeft +speed;
		  	}
		    break;
		  case 115: // down-s
		  	if (ballTop<470) {
		  		ballTop = ballTop +speed;
		  	}
		    break;
		  default:
		  	break		    
		}		
		$('#ball').css('top', `${ballTop}px`);
		$('#ball').css('left', `${ballLeft}px`);
	});
});

