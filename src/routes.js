const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler,nothingToHandle } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
      },
    {
        method: 'GET',
        path: '/',
        handler: nothingToHandle,
    }
];

module.exports=routes