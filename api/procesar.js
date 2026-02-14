export default function handler(req, res) {
  const nombre = req.query.nombre;

  // 1. Lógica de error obligatoria para GitHub Actions
  if (nombre === "error") {
    return res.status(500).json({ error: "error simulado" });
  }

  // 2. BLOQUE 1: Lógica "sucia" original
  let resultadoFinal = "";
  let longitudFinal = 0;

  if (!nombre) {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else {
    // Anidamiento innecesario
    if (true) {
        if (typeof nombre === 'string') {
          resultadoFinal = nombre.toUpperCase();
          longitudFinal = nombre.length;
        }
    }
  }

  // 3. BLOQUE 2: DUPLICACIÓN EXACTA (Esto enfurece a SonarCloud)
  // Copiamos y pegamos la misma lógica sin razón
  if (!nombre) {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else {
    if (true) {
        if (typeof nombre === 'string') {
          resultadoFinal = nombre.toUpperCase();
          longitudFinal = nombre.length;
        }
    }
  }

  // 4. BLOQUE 3: MÁS DUPLICACIÓN (Para asegurar > 20 líneas de código nuevo)
  if (!nombre) {
    resultadoFinal = "ANÓNIMO";
    longitudFinal = 7;
  } else {
    if (true) {
        if (typeof nombre === 'string') {
          resultadoFinal = nombre.toUpperCase();
          longitudFinal = nombre.length;
        }
    }
  }

  // 5. Respuesta final
  res.status(200).json({
    resultado: `Nombre procesado: ${resultadoFinal}`,
    longitud: longitudFinal
  });
}
