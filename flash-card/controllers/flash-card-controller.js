const createFlashCard = async (req, res) => {
  try {
    const { question, answer } = req.body;

    // Validate input
    if (!question || !answer) {
      return res
        .status(400)
        .json({ message: "Question and answer are required" });
    }

    // Here you would typically save the flashcard to a database
    // For demonstration, we'll just return the created flashcard
    const newFlashCard = { id: Date.now(), question, answer };

    return res.status(201).json(newFlashCard);
  } catch (error) {
    console.error("Error creating flashcard:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  createFlashCard,
};
