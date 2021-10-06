import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
})