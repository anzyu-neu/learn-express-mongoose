var mongoose = require('mongoose');

var Schema = mongoose.Schema;
/**
 * Data model:
 * objects: books, authors, book instance, genres
 * book has exactly ONE author
 * book can belong to 0 or more genres
 * book has 0 or more book instances/copies
 */

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    author: [{type: Schema.Types.ObjectId, ref: 'Author', required: true}],
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
