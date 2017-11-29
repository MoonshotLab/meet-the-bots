const express = require('express');
const router = express.Router();

router.get('/:bot', (req, res) => {
  const bot = req.params.bot;

  res.render('bot', {
    bodyId: 'bot',
    bot: bot
  });
});

module.exports = router;
