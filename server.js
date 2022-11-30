
const express = require('express');
const uuid = require('./public/assets/helpers/uuid');
const path = require('path');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('./public/assets/helpers/fsUtils');


const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for json file
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

//Post Route for db.json
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    console.log(title)
    console.log(text)

    // If all the required properties are present
    if (title && text) {
    //Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuid(),
      };

      const response = {
        status: 'success',
        body: newNote,
      };
     
      readAndAppend(newNote, './db/db.json');
    res.json(`Tip added successfully 🚀`);
     
    console.log(response);
    } else {
      res.status(500).json('Error in posting review');
    }
  });

// Wildcard returns the main index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//listener for the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);