# Reflexión sobre Calidad y CI

## ¿Qué tipo de error evita el CI?
El CI evita errores de regresión (romper algo que ya funcionaba) y violaciones de contrato (cambiar la estructura de respuesta sin avisar). Al ejecutarse automáticamente en cada commit, asegura que la lógica básica, como la conversión a mayúsculas o la estructura del JSON, se mantenga correcta.

## ¿Qué tipo de error no evita?
El CI no evita errores de lógica que no estén cubiertos por pruebas (si no escribo la prueba, el CI no sabe que está mal), problemas de rendimiento en producción, o errores de configuración de entorno (variables de entorno faltantes en Vercel).

## ¿Qué pasaría si un equipo ignora el CI?
Si se ignora el CI, los errores se acumulan y se descubren hasta que el usuario final usa el sistema (en producción). Esto aumenta el costo de arreglar los bugs y reduce la confianza en el software. La calidad pasa a depender de la memoria de los desarrolladores en lugar de un proceso automatizado.
