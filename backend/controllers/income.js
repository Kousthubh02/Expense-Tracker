const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    // Validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    // Create a new instance of the IncomeSchema
    const newIncome = new IncomeSchema({
      title,
      amount,
      category,
      description,
      date,
    });

    // Save the new income
    await newIncome.save();

    res.status(200).json({ message: 'Income Added' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  
  // console.log(id);
  try {
    const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
    if (deletedIncome) {
      res.status(200).json({ message: 'Income deleted' });
    } else {
      res.status(404).json({ message: 'Income not found' });
    }
  } catch (error) {  
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}







