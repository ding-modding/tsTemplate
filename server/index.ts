import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port=5000; 

app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello Express');
})

