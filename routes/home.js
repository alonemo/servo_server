const express = require("express");
const router = express.Router();
const servos = [
  {
    name: 'Servo-1',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-2',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-3',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-4',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-5',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-6',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-7',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-8',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-9',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-10',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-11',
    position: 0,
    speed: 0,
  },
  {
    name: 'Servo-12',
    position: 0,
    speed: 0,
  },
];


router.get("/", async (req, res, next) => {
  return res.status(200).json({
    message: "OK",
    servos: servos
  });
});

router.post("/moveServo", async (req,res) => {
  for(let i = 0; i < servos.length; i++){
    servos[i].position = req.body.servos[i].position;
    servos[i].speed = req.body.servos[i].speed;
  }
  return res.status(200).json({message: "OK", servos: servos});
});

router.post("/resetServos", async (req,res) => {
  for(let i = 0; i < servos.length; i++){
    servos[i].position = 0;
  }
  return res.status(200).json({message: "OK", servos: servos});
});

router.post("/stopScript", async(req,res) => {
  return res.status(200).json({message: "STOPED!"});
});

module.exports = router;
