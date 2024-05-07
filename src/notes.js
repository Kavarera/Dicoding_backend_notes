const { nanoid } = require("nanoid");

const notes =[];
newNote = {
        title:"title", 
        tag: "tags", 
        body: "body", 
        id: nanoid(16),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
notes.push(newNote);
newNote = {
        title:"title", 
        tag: "tags", 
        body: "body", 
        id: nanoid(16),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
notes.push(newNote);
newNote = {
        title:"title", 
        tag: "tags", 
        body: "body", 
        id: nanoid(16),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
notes.push(newNote);
newNote = {
        title:"title", 
        tag: "tags", 
        body: "body", 
        id: nanoid(16),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
notes.push(newNote);


module.exports=notes;