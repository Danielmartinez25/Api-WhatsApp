const verifyToken = (req, res) => {
  console.log("Bienvenido a la verificacion");
};
const receivedMessage = (req, res) => {
  console.log("Bienvenido al Recibo de mensajes");
};
module.exports = {
  verifyToken,
  receivedMessage,
};
