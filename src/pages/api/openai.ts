import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { answer, customQ } = req.body as {
      answer: string;
      customQ: string;
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: customQ,
        },
        {
          role: 'user',
          content: `${answer}`,
        },
      ],
    });

    if (!response.choices) return;

    res.json({
      success: true,
      message: response.choices,
    });
  }

  res.status(404).json({});
}
