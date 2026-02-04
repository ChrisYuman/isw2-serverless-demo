export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simulación de error si envían "error"
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error simulado de lógica de negocio"
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  });
}
