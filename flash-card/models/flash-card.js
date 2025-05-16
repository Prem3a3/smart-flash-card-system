const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
