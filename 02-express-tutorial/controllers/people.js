const { people } = require("./../data")

// app.get("/api/v1/people", logger, (req, res) => {
//     const person = people.map((p) => {
//       const { id, name } = p
//       return { id, name }
//     })
  
//     res.json(person)
//   });
  
//   app.post("/api/v1/people", (req, res) => {
//     if(req.body.name) {
//       people.push({ id: people.length + 1, name: req.body.name });
//       res.status(201).json({ success: true, name: req.body.name });
//     } else {
//       res.status(400).json({ success: false, message: "Please provide a name" });
//     }
//   })

const getPerson = (req, res) => {

}

const addPerson = (req, res) => {

}

module.exports = {getPerson, addPerson}