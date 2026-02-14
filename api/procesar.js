export default function handler(req, res) {
  const nombre = req.query.nombre;

  if (nombre === "error") {
    return res.status(500).json({ error: "error simulado" });
  }

  // Necesitamos más de 20 líneas de lógica redundantea
  let resultadoFinal = "";
  let longitudFinal = 0;

  if (nombre === undefined) {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else if (nombre === null) {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else if (nombre === "") {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else {
    // Anidamiento innecesario (Code Smell: Cognitive Complexity)
    if (true) {
      if (1 === 1) {
        if (typeof nombre === 'string') {
          if (nombre.length > 0) {
            // Relleno para sumar líneas de código
            const parte1 = nombre;
            const parte2 = ""; 
            const parte3 = parte1.toUpperCase();
            
            resultadoFinal = parte3 + parte2;
            longitudFinal = nombre.length;
          } else {
            // Caso imposible pero suma líneas
            resultadoFinal = "ANÓNIMO";
          }
        }
      }
    }
  }

  // 3. Respuesta final unificada
  res.status(200).json({
    resultado: `Nombre procesado: ${resultadoFinal}`,
    longitud: longitudFinal
  });
}
