// api/quote.js

export default function handler(req, res) {
  const quotes = [
    { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
  ];

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(random);
}
