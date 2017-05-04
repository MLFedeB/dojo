## Dojos

### Problemática

1. Cuantos if y/o else if tiene nuestro código? 
2. Utilizamos flags como parámetros? 
3. Escribimos getters/setters por si acaso? 
4. Tenemos métodos o funciones con más de dos parámetros? 
5. Escribimos código duplicado? 
6. Diferenciamos Uso vs Construcción? 
7. Un cambio de requerimiento afecta a varias entidades de nuestro modelo? 
8. El lenguaje que utilizamos en el código es diferente al que utiliza la compañía? 
9. Es difícil escribir nuevos tests?
10. Tenemos métodos que nos permiten preguntarle a un objeto acerca de su estado (```Payment>>isApproved```, ```Payment>>isCreditCard```, ```Shipping>>isSamedayDelivery```, etc.).
11. Sabemos cuál es el impacto de estas prácticas?

Si algunas de estas cosas se tornaron cotidianas, podríamos decir que nuestro código es de mala calidad!

Crees que esto sí degrada o no degrada la calidad del código? Te gustaría discutir porque sí o porque no y eventualmente modificar estas prácticas cotidianas?

### ¿Cómo nos impacta en el día a día estas prácticas?

Estos y otros tantos problemas, que prefiero ignorarlos momentaneamente, generan código difícil de extender y mantener. Como consecuencia un cambio de requerimiento redunda en actualizaciones de código complejas (sino imposible) de abordar en un tiempo razonable.

### Solución 

Entrenarnos en la utilización de un paradigma que mitigue estos síntomas (Programación Orientado a Objetos).

### ¿Cómo?

Desarrollando el dominio del paradigma en un ambiente controlado (**no productivo**). Esto es un Dojo!

### Dojo

#### ¿De que se trata la actividad?
La idea es resolver un problema de modelado orientado a objetos, luego aplicar ciertas distorsiones de requerimientos y ver que tan bien responde nuestro modelo ante esos cambios.

#### ¿Que lenguaje?
En principio Javascript y/o Java.

#### Problemáticas o Ejercicio

Si bien tengo un ejercicios para plantear les propongo que compartan algún problema donde crean que se puede aplicar alguna mejora de código (con anterioridad) y vemos como acotarlo para hacer una sesión de 30 minutos de programación y luego 30 minutos de puesta en común.

#### Comentarios Varios

Se que algunos no van a poder asistir; a estas personas les propongo que sumen algún otro interesado para que participe.

## Es la primera vez que desarrollo en Javascript

Para los que elijan JS como lenguaje para realizar el dojo aquí encontrarán ejemplos de código para:
- Declarar y definir una clase: ([dojo_base/javascript/MyClass.js](dojo_base/javascript/MyClass.js))
- Como definir la igualdad de instancias: ([dojo_base/javascript/MyClass.js](dojo_base/javascript/MyClass.js#L7))
- Como lanzar exceptions: ([dojo_base/javascript/MyClass.js](dojo_base/javascript/MyClass.js#L12))
- Como escribir un test para verificar valor devuelto: ([dojo_base/javascript/test/solution.js](dojo_base/javascript/test/solution.js#L10))
- Como escribir un test para verificar lanzamiento de exception: ([dojo_base/javascript/test/solution.js](dojo_base/javascript/test/solution.js#L15))

