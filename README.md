# Holberton School — Web React

Repositorio de ejercicios de desarrollo web de Holberton School. Actualmente
incluye el módulo de **TypeScript**, con prácticas de tipado, programación
orientada a objetos, manipulación del DOM y organización de código.

## Contenido

| Módulo | Temas | Documentación |
| --- | --- | --- |
| [TypeScript](./TypeScript/) | Interfaces, clases, funciones, tipos avanzados, declaraciones ambientales y namespaces. | [README del módulo](./TypeScript/README.md) |

```text
holbertonschool-web_react/
├── README.md
└── TypeScript/
    ├── README.md
    ├── task_0/    # Estudiantes y tabla en el DOM
    ├── task_1/    # Profesores, directores y clases
    ├── task_2/    # Empleados, predicados y tipos literales
    ├── task_3/    # Declaraciones de tipos para una biblioteca CRUD
    ├── task_4/    # Namespaces y combinación de declaraciones
    └── task_5/    # Créditos con tipos nominales
```

Cada carpeta de tareas es una unidad de compilación independiente. Las tareas
acumulativas comparten carpeta: los ejercicios 0–11 se agrupan en `task_0`
hasta `task_5`.

## Tecnologías

- TypeScript y JavaScript.
- HTML y API del DOM.
- Node.js y npm para gestionar las dependencias.
- Webpack para compilar los proyectos y ESLint para revisar el código.

## Primeros pasos

Necesitas Git, Node.js y npm. El entorno utilizado para la validación local
fue Node.js **24.19.0** y npm **11.6.2**.

```sh
git clone https://github.com/anthocab2/holbertonschool-web_react.git
cd holbertonschool-web_react/TypeScript/task_0
npm ci
npx tsc --noEmit -p tsconfig.json
npm run build
npm run start-dev
```

Abre [localhost:8080](http://localhost:8080) para ver la tabla de estudiantes.
También puedes abrir `dist/index.html` después de compilar.

La instalación se realiza dentro de cada carpeta, no en la raíz del
repositorio. El mismo flujo se aplica a `task_1`, `task_2`, `task_3` y
`task_5`. Usa `npm ci` para conservar las versiones del lock y ejecuta un
servidor de desarrollo a la vez, ya que comparten el puerto 8080.

`task_4` dispone de `npm ci`, `npm run typecheck` y `npm run build` con
TypeScript 4.9.5 y el compilador local de namespaces, explicados en el
[README de TypeScript](./TypeScript/README.md#instalación-y-ejecución-de-task_4).

## Estado y validación

El código se comprobó localmente mediante revisión de tipos, compilación con
Webpack, lint y siete comprobaciones de comportamiento y contratos de tipos.
Los resultados y las versiones de las herramientas están en la
[documentación del módulo](./TypeScript/README.md#verificación-local).

El usuario confirmó que la **tarea 9** exige `package.json` sin proporcionar
su contenido. `task_4` incluye ahora una configuración local mínima y su lock,
sin presentarlos como archivos oficiales. El alcance auditado es 0–11; las
verificaciones locales no sustituyen el checker privado de Holberton.

## Mantenimiento

Repositorio de [anthocab2](https://github.com/anthocab2).
