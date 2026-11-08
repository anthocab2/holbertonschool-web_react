# TypeScript

Ejercicios de TypeScript para el directorio `TypeScript/` del repositorio
`holbertonschool-web_react`. Cada carpeta contiene un proyecto independiente.

## Estado de esta entrega

Se incluye el código de las tareas 0–11 identificadas en el encargo, junto con
las configuraciones disponibles. La tarea 0 y las configuraciones comunes
proceden del ZIP recibido; las tareas 1–11 se prepararon a partir de los
[enunciados históricos enlazados en el encargo](https://raw.githubusercontent.com/cherelemma/alx-backend-javascript/42e2b6584bd61d8cdc21cfb47147b1f8b5a3907b/0x04-TypeScript/README.md).

**Tarea 9:** el usuario confirmó que el enunciado oficial actual exige
`package.json`, pero no proporciona su contenido. `task_4` incluye una
configuración local mínima con TypeScript 4.9.5, scripts de comprobación y
compilación, y un lock para instalaciones reproducibles. Esta configuración
no se presenta como un archivo oficial. El alcance auditado comprende las
tareas 0–11; no se afirma aprobación del checker privado de Holberton.

## Estructura

| Carpeta | Tareas | Contenido |
| --- | --- | --- |
| `task_0` | 0 | Interfaz `Student` y tabla visible con dos estudiantes. |
| `task_1` | 1–4 | Profesores, directores, formato de nombres y `StudentClass`. |
| `task_2` | 5–7 | Fábrica de empleados, predicado de tipos y materias literales. |
| `task_3` | 8 | Tipos y declaraciones ambientales para la biblioteca CRUD. |
| `task_4` | 9–10 | Namespace `Subjects`, combinación de declaraciones y materias. |
| `task_5` | 11 | Créditos con marcas que distinguen sus tipos. |

Los archivos de entrada son `task_N/js/main.ts`. En `task_3/js` también se
encuentran `interface.ts`, `crud.d.ts` y el `crud.js` suministrado por el
enunciado. Las clases e interfaces de las materias están en
`task_4/js/subjects/`.

## Instalación y compilación

Coloca esta carpeta `TypeScript` en la raíz de tu repositorio. Necesitas Node.js
y npm; la verificación local se realizó con Node.js 24.19.0 y npm 11.6.2.

Para `task_0`, `task_1`, `task_2`, `task_3` y `task_5`, ejecuta estos comandos
dentro de cada carpeta. Por ejemplo:

```sh
cd TypeScript/task_0
npm ci
npx tsc --noEmit -p tsconfig.json
npm run build
```

Usa `npm ci` para respetar el `package-lock.json` incluido. Los archivos
`package.json`, `tsconfig.json`, `.eslintrc.js` y `webpack.config.js` comunes
conservan el contenido original del ZIP.

El lock fija `@types/node` en `18.19.0` como dependencia transitiva. La
instalación inicial seleccionó `26.6.5`, cuyo archivo `ffi.d.ts` usa sintaxis
que TypeScript 4.9.5 no puede analizar. Se comprobó una instalación limpia
con el lock corregido, sin cambiar los archivos originales ni reducir las
comprobaciones de tipos. Regenerar el lock puede reintroducir el problema.

Webpack genera `dist/index.html` y `dist/bundle.js`. Para iniciar el servidor:

```sh
npm run start-dev
```

Abre `http://localhost:8080`. En `task_0` aparecerá una tabla con el nombre y la
ubicación de cada estudiante. Usa un servidor a la vez, porque las
configuraciones comparten el puerto 8080. También puedes abrir
`dist/index.html` después de compilar.

## Instalación y ejecución de task_4

Desde `TypeScript/task_4`, con sus propias dependencias:

```sh
npm ci
npm run typecheck
npm run build
node dist/main.js
```

`npm run build` utiliza el `build.cjs` existente. Comprueba los seis archivos
TypeScript, conserva las opciones estrictas y reúne el JavaScript de las
declaraciones del namespace y de `main.ts` en un mismo ámbito de ejecución.
Las referencias de tipos por sí solas no cargan las clases en ejecución;
véase la [documentación oficial de namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html).
La configuración local fija TypeScript 4.9.5 y no necesita Webpack ni las
dependencias de `task_0`. Los archivos TypeScript y `tsconfig.json` se conservan.

La demostración exporta `cpp`, `java`, `react` y `cTeacher`. El profesor tiene
experiencia en C++; las materias Java y React indican que no hay profesor
disponible. Para asignar otro profesor se utiliza el setter, por ejemplo
`cpp.setTeacher = otroProfesor`.

## Lint

ESLint 9 necesita el modo de compatibilidad para utilizar el `.eslintrc.js`
proporcionado, según su [guía oficial de migración](https://eslint.org/docs/latest/use/migrate-to-9.0.0).
Desde cada carpeta que incluya este archivo:

```sh
# Bash
ESLINT_USE_FLAT_CONFIG=false npx eslint js --ext .ts
```

```powershell
# PowerShell
$env:ESLINT_USE_FLAT_CONFIG = 'false'
npx eslint js --ext .ts
```

## Decisiones de implementación

- `Teacher` permite atributos adicionales mediante `unknown`, sin perder los
  tipos de sus propiedades conocidas.
- En la tarea 5 se utiliza `getCoffeeBreak`, como exige `DirectorInterface`.
  Una viñeta histórica lo llama `getToWork`; se siguió el contrato de la interfaz.
- `executeWork` devuelve el resultado del método correspondiente. Para verlo
  en consola, utiliza `console.log(executeWork(createEmployee(200)))`.
- `crud.js` es la biblioteca de demostración del enunciado: imprime operaciones
  y genera un identificador aleatorio; no guarda datos en una base de datos.
- La referencia triple slash de `task_3/js/main.ts` es un requisito del
  ejercicio. Su línea tiene una excepción puntual de ESLint para conservarla.
- `MajorCredits` y `MinorCredits` usan marcas literales distintas. Cada función
  de suma conserva su marca y no modifica sus argumentos.

## Verificación local

Comprobaciones realizadas el 21 de octubre de 2026:

| Comprobación | Resultado |
| --- | --- |
| Instalación limpia con `npm ci` | Correcta; se conservaron los paquetes originales. |
| `tsc --noEmit -p tsconfig.json` | Las seis carpetas sin errores. |
| `npm run build` | Correcto en `task_0`, `task_1`, `task_2`, `task_3` y `task_5`. |
| `task_4/build.cjs` y ejecución de `dist/main.js` | Correctos; namespace y exportaciones disponibles. |
| ESLint con la configuración heredada | Sin errores en las cinco carpetas que la incluyen. |
| Comprobaciones de comportamiento y contratos de tipos | 7 aprobadas, 0 fallidas. |

Las comprobaciones auxiliares, ejecutadas fuera del módulo con `node --test`,
verificaron la frontera salarial de 500, la clase de estudiante, las llamadas
a la biblioteca CRUD real, las tres materias, las marcas de créditos y el
rechazo de usos incorrectos por TypeScript. También se abrió la página
compilada en Chrome y se comprobó que la tabla era visible y contenía las dos
filas esperadas, sin errores de JavaScript.

Entorno: Windows 11 (compilación 26200), Node.js 24.19.0, npm 11.6.2,
TypeScript 4.9.5, webpack 5.112.0, ESLint 9.39.5, Jest 29.7.0 y
Chrome 155.0.8059.85. Los cinco proyectos comunes comparten el mismo
`package.json` y lock; para validarlos se reutilizó la misma instalación de
dependencias mediante enlaces locales que no forman parte de la entrega.
ESLint emite el aviso de retirada futura del formato `.eslintrc`; npm muestra
avisos de paquetes obsoletos al instalar las dependencias del encargo.

El ZIP original no contiene pruebas de Jest. Aunque el paquete declara Jest
29.7.0, `npm test` necesita pruebas para ejecutarlas y no equivale al checker
privado. El enunciado histórico menciona Ubuntu 18.04 y Jest 24.9; las
comprobaciones de esta entrega se realizaron en Windows con las versiones
indicadas aquí.

`node_modules/`, `dist/` y los archivos del encargo original están excluidos
de esta entrega. El proyecto se entrega como archivos locales con su README.
