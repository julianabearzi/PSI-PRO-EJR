const mongoose = require('mongoose');

const uri =
  'mongodb+srv://new-user_22:ccBOOPqjWKL7IUks@cluster0.wvu8y.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log(`Database no connected, error: ${error}`);
  });
