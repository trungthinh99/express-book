// Model tạo khung cho database

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  books: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  genres: {
    type: [String], // Mảng chứa nhiều thêt loại sách, ngoặc vuông và string ở trong
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

let Book = mongoose.model('Book', bookSchema); // Tạo model cho book
let Author = mongoose.model('Author', authorSchema);

module.exports = { Book, Author };
