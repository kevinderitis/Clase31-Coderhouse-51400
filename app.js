import express from 'express';
import userRouter from './src/routes/users.js';

const app = express();

app.use('/api/users', userRouter)

const server = app.listen(8080, () => console.log('Server running'))