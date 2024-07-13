const axios = require('axios');

// Service to submit feedback to Frill.co
const submitFeedback = async (feedback) => {
  try {
    await axios.post('https://api.frill.co/feedback', feedback, {
      headers: { Authorization: `Bearer ${process.env.FRILL_API_KEY}` }
    });
  } catch (error) {
    console.error('Error submitting feedback to Frill.co:', error);
  }
};

module.exports = {
  submitFeedback
};
