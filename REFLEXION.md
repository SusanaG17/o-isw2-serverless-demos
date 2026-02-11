# Reflexión: Calidad y CI

## 1) ¿Qué tipo de error evita el CI?
El CI evita que se integren cambios que rompen el contrato esperado del sistema.
Por ejemplo, si alguien cambia el endpoint `/api/procesar` (texto, mayúsculas o estructura del JSON)
y las pruebas ya estaban definidas para otro comportamiento, el pipeline falla y bloquea ese cambio.

## 2) ¿Qué tipo de error no evita?
No evita errores que no están cubiertos por pruebas.
Por ejemplo: errores de lógica en casos no probados, problemas de rendimiento, etc.

## 3) ¿Qué pasaría si un equipo ignora el CI?
Se empezarían a mezclar cambios defectuosos en la rama principal.
Eso genera regresiones frecuentes, pérdida de tiempo corrigiendo problemas, menos confianza en el sistema
y releases más riesgosos porque nadie sabe si lo nuevo rompió algo existente.
