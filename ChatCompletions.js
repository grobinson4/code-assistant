const OpenAI = require('openai').default;
const dotenv = require('dotenv');
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "Act as the top coding assistant in the world", content: "I need to create a new class written in C# for users. The class can create accounts, update accounts, delete accounts, add an athlete update an athletes information." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();