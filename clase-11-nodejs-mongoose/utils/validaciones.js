const validarEmail = (email) => {
  emailExpReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return emailExpReg.test(email);
};

const validarNumero = (numero) => {
  return numero && !isNaN(numero);
};

const validarNombre = (nombre) => {
  const nombreExpReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return nombreExpReg.test(nombre);
};

module.exports = {
  validarEmail,
  validarNumero,
  validarNombre,
};
