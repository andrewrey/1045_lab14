let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;
const MID = width / 2;
const GROUND = 400;

function drawBackground() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "blue";
  ctx.fillRect(0, GROUND, width, 100); // ground

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(570, -10, 80, 0, 2 * Math.PI); //sun
  ctx.fill();
}

function drawSnowman() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(MID, GROUND - 265, 40, 0, 2 * Math.PI); // head
  ctx.fill();
  ctx.beginPath();
  ctx.arc(MID, GROUND - 160, 70, 0, 2 * Math.PI); // upper torso
  ctx.fill();
  ctx.beginPath();
  ctx.arc(MID, GROUND, 100, 0, 2 * Math.PI); // lower torso
  ctx.fill();
  //   buttons /////
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(MID, GROUND - 150, 7, 0, (Math.PI / 180) * 360);
  ctx.arc(MID, GROUND - 170, 7, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(MID - 15, GROUND - 275, 5, 0, 2 * Math.PI); // left eye
  ctx.arc(MID + 15, GROUND - 275, 5, 0, 2 * Math.PI); // right eye
  ctx.fill();

  /// Nose ////
  ctx.beginPath();
  ctx.moveTo(MID, GROUND - 270);
  ctx.lineTo(MID + 5, GROUND - 260);
  ctx.lineTo(MID - 5, GROUND - 260);
  ctx.closePath();
  ctx.fillStyle = "orange";
  ctx.fill();
  //   ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(MID, GROUND - 230, 20, 180 * (Math.PI / 180), 0); // smile
  ctx.stroke();
  ctx.moveTo(MID - 50, GROUND - 160);
  ctx.lineTo(MID - 140, GROUND - 160); // left arm
  ctx.stroke();
  ctx.moveTo(MID + 50, GROUND - 160);
  ctx.lineTo(MID + 140, GROUND - 200); // right arm
  ctx.stroke();
  ctx.moveTo(MID - 50, GROUND - 300);
  ctx.lineTo(MID + 50, GROUND - 300); // brim of hat
  ctx.stroke();
  ctx.fillRect(MID - 30, GROUND - 340, 60, 40);
}

drawBackground();
drawSnowman();
