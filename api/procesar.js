export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Reto 5: Simulación de falla para pruebas
  if (nombre === "error") {
      return res.status(500).json({ error: "error simulado" });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}
