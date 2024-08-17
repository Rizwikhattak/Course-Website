const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  const { firstName, lastName, city, email, phone, education, course, gender } =
    req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Using TLS
    secure: false, // Use TLS
    auth: {
      user: "programmersmarathon@gmail.com", // Your Gmail account
      pass: "dqfl cvof ombw xgwa", // Your app-specific password
    },
  });

  const mailOptions = {
    from: "rizwikhattak4383@gmail.com", // Sender address
    to: "programmersmarathon@gmail.com", // List of receivers
    subject: "New Registration Form Submission", // Subject line
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nCity: ${city}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nCourse: ${course}\nGender: ${gender}`, // Plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
