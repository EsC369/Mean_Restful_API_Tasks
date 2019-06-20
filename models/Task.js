const mongoose =  require("mongoose");

// User Schema:
const  TaskSchema =  mongoose.Schema({

  title: { 
    type: String, 
    required: true, 
    minlength: 2
  }, 

  description: { 
    type: String, 
    required: true,
    minlength: 2
  },

  created_at: {
    type: Date,
    default: Date.now
  }
  
});

const Task = module.exports = mongoose.model("Task", TaskSchema);