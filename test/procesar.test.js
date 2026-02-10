import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

// Helper para simular (mock) los objetos req y res de Vercel/Express
const createMocks = (query = {}) => {
  const req = { query };
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
  return { req, res };
};

test("Reto 2: procesar devuelve mayúsculas y longitud correcta", () => {
  const { req, res } = createMocks({ nombre: "juan" });
  handler(req, res);
  
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, {
    resultado: "Nombre procesado: JUAN",
    longitud: 4
  });
});

test("Reto 1: procesar maneja nombre ausente (usa default)", () => {
  const { req, res } = createMocks({}); // Sin nombre
  handler(req, res);
  
  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
  assert.equal(res.body.longitud, 7); // "anónimo" tiene 7 letras
});

test("Reto 3: Validación de estructura JSON (política de calidad)", () => {
  const { req, res } = createMocks({ nombre: "test" });
  handler(req, res);
  
  // Validamos que las llaves esperadas existan
  assert.ok("resultado" in res.body);
  assert.ok("longitud" in res.body);
});

test("Reto 5: Simulación de error controlado", () => {
  const { req, res } = createMocks({ nombre: "error" });
  handler(req, res);
  
  assert.equal(res.statusCode, 500);
});
