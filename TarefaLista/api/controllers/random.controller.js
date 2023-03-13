const random = (req, res) => {
  const { limite } = req.query;

  let numero = Math.floor(Math.random() * limite);

  res.status(200).json({ numero }).end();
};

module.exports = {
  random,
};
