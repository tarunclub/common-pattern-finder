import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.post('/find-common-pattern', (req: Request, res: Response) => {
  const paragraphs: string[] = req.body.paragraphs;

  const wordsArray = paragraphs.map((paragraph) => paragraph.split(' '));

  const commonWords = wordsArray.reduce((accumulator, words) => {
    return accumulator.filter((word) => words.includes(word));
  });

  res.json({ commonParagraphs: commonWords });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
