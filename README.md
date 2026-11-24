# Inventario CI
Laboratorio frontend React para CI. Datos en memoria.

## Local (Node 22)
- npm install (genera package-lock.json; incluirlo en Git)
- npm run dev
- npm test
- npm run coverage
- npm run build

## Jenkins
Instalar plugin NodeJS y configurar una instalación llamada NodeJS22 (Node 22). Crear un Pipeline desde SCM Git apuntando al repositorio y a Jenkinsfile. El pipeline inicial ejecuta CI, no despliega. Requiere subir package-lock.json antes de ejecutarlo.

## SonarQube Cloud
Importar el repositorio, seleccionar análisis mediante CI y completar projectKey y organization con los valores reales. Configurar el escáner y el token como credencial secreta de Jenkins, nunca en Git. La etapa Sonar y el bloqueo por Quality Gate se incorporarán después de verificar el pipeline inicial. No hay integración Sonar activa todavía.

## Demostración de fallo
En src/inventario.js, cambiar temporalmente la multiplicación p.precio * p.cantidad por una suma. Ejecutar el pipeline: debe fallar la prueba de cálculo. Revertir el cambio y ejecutar nuevamente. No modificar las pruebas para ocultar el fallo.
