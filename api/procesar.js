export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simular error
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error simulado en procesar",
      timestamp: new Date().toISOString()
    });
  }

  // Respuesta normal
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  });
}
