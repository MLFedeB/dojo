# Dojo#2

Participantes

| Nombre y Apellido | Actividad |
| ----------------- |:---------:|
| David Machado     | Codeo     |
| Gaston Montes     | "         |
| Lucia Garbarini   | "         |
| Ricardo Bebilacua | "         |
| Heraldo Rodriguez | Oyente    |
| Fede Bazán        | "         |

## Qué hicimos durante el dojo?

Abordamos el ejercicio [Dojo#2](https://github.com/diegosanchez/dojo/tree/workshop/dojo_2) codificando solo los dos primeros tests y comenzamos a pensar el 3re test.

## Qué ideas surgieron durante y/o problemas el dojo?

0. Porqué utilizar TDD?
1. No quiero codear de más - gmontes
2. Como declaro una interface? - gmontes
3. Como nos afectan los cambios de requerimientos sobre el modelo planteado?
4. Cuantas entidades creamos (inicialmente)?
5. Strings vs Entidades
6. Almacén de datos *vs* Contratos
7. Utilización de tipos primitivos como entidades de modelo
8. Publicación de todos los atributos de una clase vía ```getter``` y ```setter```
9. Nombres de métodos y Clases
10. La solución que planteamos *no es performante* - hrodriguez

Como verán surgieron varias cuestiones que sin tener presente el contexto no se pueden llegar a entender.  Para lograr un mayor entendimiento, a continuación voy describiendo la cronología de la actividad y voy a mencionar donde y cuando surgieron las cuestiones antes mencionadas y en ese momento comento los distintos puntos de vista que surgieron.

## Cronología de la actividad

Propusimos la utilización de TDD para facitilar el diseño de las entidades de negocio (Cuestión 0).

Al término de codificar la clase ```spreadSheet``` con el fin de que los dos primeros tests diernan "verde" llegamos a un modelo que podría resumirse en el siguiente diagrama UML.

> Link al diagrama




