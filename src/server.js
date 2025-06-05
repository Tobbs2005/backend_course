import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//get filepath from URL of current module
const __filename = fileURLToPath(import.meta.url);
//get directory naem from file path
const __dirname = dirname(__filename);

//serves HTML file from /public directory
// Tells express to serve all files form public folder as static assets / files.
// Any requests for the css file will be resolved to the public directory.

app.use(express.static(path.join(__dirname, '../public')));


//serving up the html file from /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//Routes
app.use('/auth', authRoutes);
app.use('/todos', authMiddleware, todoRoutes);


app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
});

