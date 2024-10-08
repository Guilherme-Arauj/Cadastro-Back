// src/infrastructure/web/app.ts
import express, { Application } from 'express';
import { router as userRouter } from './Routes/UserRoutes'; // Importa as rotas de usuário
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app: Application = express();

app.use(cors());

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Configura as rotas
app.use('/api', userRouter); // Prefixo /api para as rotas de usuário

export default app;
