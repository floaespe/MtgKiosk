require(
        [],
        function () {

        	console.log("yo");

        	var bodyClick =  document.getElementById('body');
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'audioSamples/a.mp3');

        	bodyClick.addEventListener('mousedown', function(ev) {
        		console.log('GET a touch')
        		console.log('The target is ' + ev.target);
        		console.log('The target id is ' + ev.target.id);
                
                audioElement.play();
        		//ev.target.trigger = "mouseX is " + ev.offsetX +", and mouseY is " + ev.offsetY;
        		// body...
        	})

        }
);
