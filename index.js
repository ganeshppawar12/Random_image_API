const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Route to get a random image
app.get("/api/image/random", async (req, res) => {
    try {
        // Fetch a random image from an external API
        const response = await axios.get("https://picsum.photos/200/300");

        // Redirect to the fetched image URL
        res.redirect(response.request.res.responseUrl);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch image" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
