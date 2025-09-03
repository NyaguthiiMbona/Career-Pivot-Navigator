// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON and enable CORS
app.use(bodyParser.json());
app.use(cors());

// The API key is now securely loaded from an environment variable on the server.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('API key is not set. Please create a .env file and add your API key: GEMINI_API_KEY="your-api-key"');
    process.exit(1);
}

// Endpoint to handle career pivot generation
app.post('/api/generate-pivot', async (req, res) => {
    const { prompt, responseSchema, selectedPivotType } = req.body;

    // Construct the payload for the AI API call
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        tools: [{ "google_search": {} }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: responseSchema
        }
    };
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

    try {
        const apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error('API call failed:', apiResponse.status, errorText);
            throw new Error(`API call failed with status: ${apiResponse.status}`);
        }
        
        const result = await apiResponse.json();
        const jsonString = result.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!jsonString) {
            throw new Error('No content received from the API.');
        }

        const data = JSON.parse(jsonString);

        // Send the parsed data back to the frontend
        res.json(data);

    } catch (error) {
        console.error('Error generating pivot:', error.message);
        res.status(500).json({ error: 'An internal server error occurred.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
