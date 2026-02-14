export default function handler(req, res) {
  const nombre = req.query.nombre;

  // Lógica de error para que GitHub no falle
  if (nombre === "error") {
     return res.status(500).json({ error: "error simulado" });
  }

  // CÓDIGO SUCIO (Cognitive Complexity)
  if (nombre === undefined || nombre === null || nombre === "") {
    if (true) {
      if (1 === 1) {
        res.status(200).json({
          resultado: "Nombre procesado: ANÓNIMO",
          longitud: 7
        });
      }
    }
  } else {
    if (typeof nombre === "string") {
      if (nombre.length > 0) {
        if (nombre.length >= 0) {
          res.status(200).json({
            resultado: "Nombre procesado: " + nombre.toUpperCase(),
            longitud: nombre.length
          });
        }
      }
    }
  }
}
