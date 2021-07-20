const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  //valido si el correo o email es válido chequeando el error que obtuve en routes
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validarCampos,
};
