const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// API route returning user data to simulate full-stack interactions
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Vikash Kumar",
    title: "Innovative Software Engineer",
    objective: "Transforming complex challenges into elegant, scalable solutions across web and mobile platforms. Passionate about problem-solving and delivering beautiful code.",
    stats: {
      projectsCompleted: 15,
      leetcodeProblems: "150+",
      cgpa: 8.19
    }
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  // Simulate saving to DB or sending email
  console.log(`Contact request received from ${name} (${email})`);
  res.status(200).json({ success: true, message: "Thank you for reaching out! I'll get back to you soon." });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
