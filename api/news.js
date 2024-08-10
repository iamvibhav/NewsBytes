const axios = require('axios');

module.exports = async (req, res) => {
  const { category } = req.query;
  
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'in',
        category,
        apiKey: process.env.NEWS_API_KEY
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching news' });
  }
};