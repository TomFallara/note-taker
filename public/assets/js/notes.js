// const notes = require('express').Router();
// const { v4: uuidv4 } = require('uuid');


// // GET Route for retrieving all the notes
// notes.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST Route for a new UX/UI note
// notes.post('/', (req, res) => {
//   console.log(req.body);

//   const { noteTitle, noteText } = req.body;

//   if (req.body) {
//     const newNote = {
//       noteTitle,
//       noteText,
//       note_id: uuidv4(),
//     };

//     readAndAppend(newNote, './db/db.json');
//     res.json(`note added successfully 🚀`);
//   } else {
//     res.error('Error in adding note');
//   }
// });

// module.exports = notes;
