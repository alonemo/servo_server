const express = require("express");
const router = express.Router();
const servos = [
  {
    name: 'Servo-1',
    position: 0,
  },
  {
    name: 'Servo-2',
    position: 0,
  },
  {
    name: 'Servo-3',
    position: 0,
  },
  {
    name: 'Servo-4',
    position: 0,
  },
  {
    name: 'Servo-5',
    position: 0,
  },
  {
    name: 'Servo-6',
    position: 0,
  },
  {
    name: 'Servo-7',
    position: 0,
  },
  {
    name: 'Servo-8',
    position: 0,
  },
  {
    name: 'Servo-9',
    position: 0,
  },
  {
    name: 'Servo-10',
    position: 0,
  },
  {
    name: 'Servo-11',
    position: 0,
  },
  {
    name: 'Servo-12',
    position: 0,
  },
];

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
    servos: servos
  });
});

router.post("/moveServo", async (req,res) => {
  for(let i = 0; i < servos.length; i++){
    servos[i].position += req.body.servos[i].position;
  }
  return res.status(200).json({servos: servos});
})

module.exports = router;
