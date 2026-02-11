import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

function mockRes() {
  return {
    statusCode: null,
    body: null,
    status(code) { 
      this.statusCode = code; 
      return this; 
    },
    json(payload) { 
      this.body = payload; 
      return this; 
    },
  };
}

test("Regla de calidad: estructura JSON, formato consistente y mayúsculas obligatorias", () => {
  const req = { query: { nombre: "juan" } };
  const res = mockRes();

  handler(req, res);


  assert.equal(res.statusCode, 200);
  assert.equal(typeof res.body, "object");
  assert.ok(res.body !== null);

  const keys = Object.keys(res.body).sort();
  assert.deepEqual(keys, ["longitud", "resultado"]);
  assert.equal(typeof res.body.resultado, "string");
  assert.equal(typeof res.body.longitud, "number");
  assert.match(
    res.body.resultado,
    /^Nombre procesado:\s[A-ZÁÉÍÓÚÑ]+$/
  );

  const nombreProcesado = res.body.resultado.split(":")[1].trim();
  assert.equal(nombreProcesado, nombreProcesado.toUpperCase());
  assert.equal(nombreProcesado.length, res.body.longitud);
});
