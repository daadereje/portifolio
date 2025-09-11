const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Contact endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email details
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your inbox
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
