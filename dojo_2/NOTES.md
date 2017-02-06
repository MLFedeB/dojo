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

0. Checked - Porqué utilizar TDD?
1. Checked - No quiero codear de más - gmontes
2. Cómo declaro una interface? - gmontes
3. Checked - Cómo nos afectan los cambios de requerimientos sobre el modelo planteado?
4. Checked - Cuántas entidades creamos (inicialmente)?
5. Checked - Strings vs Entidades (Utilización de tipos primitivos como entidades de modelo)
6. Checked - Almacén de datos *vs* Contratos
7. Checked - Publicación de todos los atributos de una clase vía ```getter``` y ```setter```
8. Checked - Nombres de métodos y Clases
9. La solución que planteamos *no es performante* - hrodriguez

Como verán surgieron varias cuestiones que sin tener presente el contexto no se pueden llegar a entender.  Para lograr un mayor entendimiento, a continuación voy describiendo la cronología de la actividad y voy a mencionar dónde y cuándo surgieron las cuestiones antes mencionadas y en ese momento comento los distintos puntos de vista que surgieron.

## Cronología de la actividad

Propusimos la utilización de TDD para facitilar el diseño de las entidades de negocio (Cuestión 0) además esto nos permite codificar lo mínimo y necesario para poder cumplir con los requerimientos y **la única manera de expresar un requerimiento nuevo debería ser a través de un test** (Cuestión 1). 

Al término de codificar la clase ```spreadSheet``` con el fin de que los dos primeros tests dieran "verde" llegamos a un modelo que podría resumirse en el siguiente diagrama UML.

![Diagram#0](diagrams/Diagrama%20%230.png)

### Varias cuestiones a notar sobre este diagrama:
El nombre del método ```Cell>>getTag``` no tiene razón de ser en el contexto del problema. Si lo que se quiere referir es la dirección o el nombre de la celda un nombre más apropiado podría ser ```Cell>>getAddress```. Por otro lado este método devuelve un ```String```  que se puede considerar un dato primitivo del lenguaje, este hecho evidencia la ausencia de una entidad del modelo de negocio que es la dirección de la celda ```CellAddress``` (Cuestión 5).

> Es deseable utilizar entidades de negocio en lugar de datos primitivos del lenguaje.  Esto nos permite absorber los cambios de requerimientos futuros. 

El nombre de los atributos ```Cell>>x``` y ```Cell>>y``` son igualmente oscuros. Sería más apropiado ```Cell>>column``` y ```Cell>>row``` (Cuestión 8).

> El lenguaje utilizado en el modelo debería distar **muy poco** de la realidad o mejor dicho **NO** distar de la realidad, no presentar **fricción** a la hora de interpretarlo.  Esto nos permite escribir código que se lea como si fuera un libro. Cualquier persona debería estar en condiciones de leerlo y entenderlo.

En principio este modelo carece de varias entidades que exiten en la terminología del problema que estamos modelando (incluso cuando sólo consideramos los dos primeros tests de integración). Algunas de las entidades que existen (**y no diseñamos o representamos**) puden ser: ```CellAddress```, ```Label```, ```NumericValue``` y ```CellContent```.

En ausencia de estas entidades Lucia se encontró con problemas a la hora de incorporar un nuevo requerimiento en su modelo (Cuestión 3). 

> Un modelo que carece de entidades propias de la terminología que modela tienen problemas de adoptar/absorber nuevos requerimientos. Deberíamos modelar como mínimo todas las entidades del modelo de negocio que estamos diseñando.

Teniendo en cuenta estas deficiencias se planteo el siguiente diagrama de clases:

![Diagram#1](diagrams/Diagrama%20%231.png)

Con este diagrama de clases modelamos la realidad de nuestro problema con mayor presición. Y con qué finalidad? Que nuestro modelo pueda absorver los cambios de requerimientos futuros.

Si bien no implementamos este modelo surgió la necesidad de agregarle a la celda ```Cell>>getAddress``` y ```Cell>>getContent```.

> En general es deseable enriquecer la interface de las entidades de nuestro modelo en lugar de exponer sus propiedades a través de getters y/o setters.  Esto es perjudicial a la hora de cambiar la implementación de la clase que expone sus atributos, además la exposición de atributos puede romper el encapsulamiento. Adicionalmente exponer atributos viola el principio de diseño de 'Ocultamiento de la información' (Cuestión 6,7).

#### Pendiente 1 (Cuestión 9)
Hacia el final del dojo surgió la idea de que el código no es performante. Dejando de un lado la discusión técnica quiero enfatizar el hecho de que este dojo se plantea en un contexto en el cual se extraman y enfatizan la aplicación de técnicas de programación orientada a objetos sin importar otros factores.  Dicho esto les dejo dos preguntas para abordar en el próximo dojo:

1. Cómo podríamos abordar este problemática manteniendo la utilización del paradigma? 
2. Es realmente relevante esta discución? Sí, no, no, sí? Porqué?

#### Pendiente 2 (Cuestión 5)

Durante la actividad se planteó la necesidad de definir una interfase para resolver el promblema. La pregunta que surge es: Qué necesidad hay de definir interfase? Porqué? Hay alternativas? Cuando?

### To be continued...
