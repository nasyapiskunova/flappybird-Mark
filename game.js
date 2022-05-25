var cvs = document.getElementById("canvas")
var vid = cvs.getContext("2d")

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipUp = new Image();
var pipDown = new Image();

bird.src = "img/bird.png"
bg.src = "img/bg.png"
fg.src = "img/fg.png"
pipUp.src = "img/pipUp.png"
pipDown.src = "img/pipBottom.png"

var gap = 90

document.addEventListener("keydown", moveUp)

function moveUp() {
    yPos -= 20
    fly.play()
}

var pipe = []
pipe[0] = {
    x: cvs.width,
    y : 0
}

var xPos = 10
var yPos = 150
var grav = 1
var score = 0

function draw() {
    VarDate.drawImage(bg,0,0)

    for(i=0;i<pipe.length;i++) {
        vid.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        vid.drawImage(pipeDown, pipe[i].x, pipe[i].y + pipeUp.height + gap)
        pipe[i].x--

        if(pipe[i].x == 125){
        pipe.push({
            x: cvs.width,
            y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
        })
      }
      if (xPos +bird.width >= pipe[i].x
    	&& xPos <= pipe[i].x + pipeUp.width
    	&& (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height+gap)
    	&& (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + cvs.height - fg.height)){
    		location.reload();
      }
      if (pipe[i].x == 5) {
		score++;
		score_audio.play();
	}
	}

   vid.drawImage(fg,0,cvs.height - fg.height)
   vid.drawImage(bird,xPos, yPos)

     yPos += grav
     vid.fillStyle = "#000"
     vid.font = "24px"
     vid.fillText("Счёт: " + score, 10, cvs.height - 20)
     requestAnimationFrame(draw)
    }

    pipeDown.onload = draw