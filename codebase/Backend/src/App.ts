import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import accountRoutes from './routes/accountRoutes';

const App = express();
App.use(cors());
App.use(express.json());
App.use(accountRoutes);

export default App;
