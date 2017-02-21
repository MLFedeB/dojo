# Dojo#2

Participantes

| Nombre y Apellido | Actividad |
| ----------------- |:---------:|
| Lucia Garbarini   | Oyente    |
| Fede Ocampo       | "         |
| David Machado     | "         |
| Fede Bazán        | Codeo     |
| Maxi              | Codeo     |
| Alejandro Lare    | Codeo     |
| Lore Prissiani    | Codeo     |
| Pablo Lucadei     | Codeo     |

## Qué hicimos durante el dojo?

Abordamos el ejercicio [Dojo#2](https://github.com/diegosanchez/dojo/tree/workshop/dojo_2) habiendo codificando solo los dos primeros tests y comenzamos a codear el 3re test.

## Qué ideas y/o problemas surgieron durante el dojo?

1. Checked - La solución que planteamos *no es performante* - hrodriguez
2. Checked - Cómo declaro una interface? - gmontes
3. Checked - Escribimos varias clases y estas no se utilizaban en la resolución de ningún caso de uso.
4. En la implementación de las pruebas de integración conceptos como ```Content```'.
5. Checked - Hacia el final del evento, "si bien yo no escribí ifs el usuario de mi API sí lo necesitaría hacer". - alarre
6. Checked - El rango de la sumatoria era una lista (tipo de dato primitivo lista) direcciones de celdas (CellAddress)

## Cronología de la actividad

### Detalle de implementación

Respecto a la (Cuestión 1).

> La performance es un tema que puede ser abordado generando un nuevo conjunto de clases que encapsulen la optimización de la complejidad algorítmica asociada a una estructura de datos.

### Lenguajes Tipados y No Tipados

Comenzamos revisando y contrastando las diferenicas de los diagramas de clases que se habían planteado el [dojo anterior][1]. Surgió el interrogante de porque aparecía una clase ```Content``` en el diagrama de clases. Nos planteamos: "Cuál es la necesidad de definir interfases?", "Es estríctamente necesario esto en otros lenguajes?", "Cuando sí?", "Cuando no?" (Cuestión 2).

Las respuestas a estas preguntas dependerá del lenguaje que implementa el paradigma (en nuestro caso POO): 
- Si consideramos Java, que es un lenguaje tipado y de chequeo estáticos de tipos, vamos a encontrar la necesidad de definir interfaces para poder mantener un nivel de abstracción tal que nos permita sucesivas extensiones a nuestro modelo. Esta es una cuestión inherente al sitema de tipos más que al lenguaje en sí. Ocurre lo mismo en C++.
- Si consideramos Javascript, que es un lenguaje *no* tipado, vemos que no necesitamos definir esta abstracción (```Content```) solo necesitamos que todas las instancias que se almacenan en una celda cumplan un interface que está implícitamente definida para la interacción entre ```Cell``` y ```Content```.

> La necesitad de interfases surge en lenguajes tipados con chequeo estáticos de tipos, por tanto hay que prestar particular atención a la hora de definir interfase entre clases (interfase entendida como punto de interacción entre entidades, no necesariamente tengan que ser una ```interface``` propiamente dicha).


> En lenguajes sin tipos las interface, si bien están implicita, no son requeridas a los efectos de diseñar una solución que pueda ser extendida a futuro.

Luego de este análisis una cosa es evidente:

> Una cosa es el paradigma (Programación Orientada a Objetos) y otra cosa es la implementación del paradigma en distintos lenguajes. La implementación específica impondrá restricciones y prácticas necesarias para implementar el paradigma.

### TDD como metodología de diseño (por más que se enuncié Test Driven Development)

Continuando con la actividad y luego de 30 minutos de codificación llegamos a un punto donde se crearon un conjunto de clases que no resolvían ninguno de los tests de integración que se plantearon. Esto conlleva varias desventajas:
- Hay código que habrá que mantener y no se utiliza (Dead Code).
- Si el código está en nuestra base de código y no se utiliza la cobertura es baja.
- En principio es un código que no aportar a la resolución de ningún caso de uso de nuestro sistema.

Para mititgar todos estos efectos negativos podríamos desarrollar utilizando la técnica de diseñon llamada [TDD](https://en.wikipedia.org/wiki/Test-driven_development) (Cuestion 3). Rápidamente:

> 1. Escribimos el código que evidencia el requermiento. 
> 2. Ejecutamos el tests para garantizarnos que el tests falló.
> 3. Escribimos el **mínimo** código necesario para que el test pase.
> 4. Reorganizamos el código para que cumpla con los criterios de cálidad que corresponda (**Refactor**).
> 5. Volvemos al punto 1. 

### Una cosa es la utilización de los objetos del negocio y otra la construcción y setup de estos

(Cuestión 5)
Hacia el final de la actividad Alejandro Larre planteó la siguiente cuestión (transcribo debajo) basandosé en el siguiente código:

```js
describe("sheet", () => {
    describe("cells", () => {
        it("should populate two cells with numeric values and response the stored values", () => {
            sheet.setValue("a1", 1);
            sheet.setValue("a2", 2);

            chai.expect( sheet.get("a1") )
                .to.be.eql(1);
            chai.expect( sheet.get("a2") )
                .to.be.eql(2);
        });

        it("should polulate cells with a label and a value and response the stored values", () => {
            sheet.setLabel("a1", "Valor:");
            sheet.setValue("a2", 2);

            chai.expect( sheet.get("a1") )
                .to.be.eql("Valor:");
            chai.expect( sheet.get("a2") )
                .to.be.eql(2);
        });
    });
});
```   

Notar que en todos los casos de pruebas existe un método cuya firma es ```setValue``` en función de si el contenido de la celda es un ```Value``` y otro cuya firma es ```setLabel``` si la celda contiene como contenido un Label. Entonces comenta Alejandro: 

> *Si bien nuestro código no plantea ifs para decidir qué contenido debo instanciar, el usuario de mí API sí lo va a necesitar hacer a la hora de utilizar esta librería. Cada vez que quiera agregarle un contenido a la celda tengo que saber que es lo que voy a agregar, ya sea ```Value``` o ```Label```!*

Hay varios aspectos a considerar al respecto tanto sobre lo que dice Ale así como también del código escrito.

#### Uso vs Construcción

El código que se escribe en los casos de pruebas debe ser tál que su utilización sea lo más sencillo posible para fomentar la escritura de los tests. Todos los detalles de contrucción y vinculación entre entidades debe de ser tratado en otro conjunto de tests porque refiere a otra problemática completamente diferente.  Tratamos en este punto de definir las interfases de nuestro modelo tratando de mantenerlas lo más prístinas posibles sin contaminarlas con detalles de construcción.

> La utilización de la API no es la construcción y vice versa.

#### Respecto a setValue/setLabel

Estos son métodos de conveniencia. Una alternativa para no tener que definir estos métodos podría ser:  

```js
    spreadSheet.set("a1", new Value(1));
    spreadSheet.set("a2", new Label("XXX"));
``` 

Para que el usuario no tenga que escribir el código mostrado arriba, se plantean métodos de conveniencia para hacer lo mismo pero con menor esfuerzo: 

```js
    spreadSheet.setValue("a1", 1);
    spreadSheet.setLabel("a2", "XXX");
``` 

#### Respecto a la construcción

Esta cuestión es un tema en sí mismo y dependerá del soporte en el cuál se persista nuestro modelo (JSON, DB Relacionales, DB Orientadas a documentos, etc.). En cualquier caso nuestro modelo puede ser modificado con el fin de adaptarse a cualquiera de estos soportes.
 
### Darle entidad a los conceptos del negocio

Luego pensamos conceptualmente cuales serían las implicaciones de implementar la sumatoria:

```
    sumatoria(a1:a10)
```

Y nos preguntamos cuantas entidades deberían existir de considerar este nuevo cambio de requerimiento. La respuesta es abrumadora, deberíamos crear o haber creado 5 entidades (sí 5):
- Cell
- Value
- CellAddress
- Summatory
- RANGE -> casí imperceptible pero deberíamos modelarla porque es un concepto de nuestro dominio.

Simpre surge la pregunta: *Hasta que punto deberíamos modelar los conceptos del dominio?*

A titulo personal sostengo

> Deberíamos modelar **al menos** todas las entidades del dominio de problema bajo construcción.


### IMPORTANTE

En todo momento hablamos de objetos de negocios entendiendo por esto:

> Los objetos de negocio hacen referencias a los conceptos o entidades que necesitamos representar a los efectos de solucionar un problema particular y no necesariamente al los conceptos de la empresa para la que estamos trabajando.

**NO** necesariamente en nuestra solución referenciamos a objetos de negocio que son utilizados en la compañia.

> Recordar que el proceso de desarrollo involucra un proceso de Modelado (creación de abstracciones para conceptualizar un dominio específico).

### To be continued...

[1]: NOTES.md
