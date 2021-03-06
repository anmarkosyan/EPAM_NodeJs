import express from 'express';
import morgan from 'morgan';
import courseRouter from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRoutes);

export default app;
