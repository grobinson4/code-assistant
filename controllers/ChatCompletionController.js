const axios = require('axios');
const OpenAI = require('openai').default;
const dotenv = require('dotenv');
dotenv.config();
const createChatCompletions = 'https://api.openai.com/v1/chat/completions';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.chatCompletion = async (req, res) => {
  const { messages } = req.body;
    const model = "gpt-3.5-turbo";
  try {
    const stream = await openai.chat.completions.create({
        model,
        messages,
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
        // console.log(chunk.choices[0]?.delta?.content || "");
        // res.status(200).json({ message: chunk.choices[0]?.delta?.content || "" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

