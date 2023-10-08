const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(()=>{
  console.log('Server listening on port:', PORT);
});
