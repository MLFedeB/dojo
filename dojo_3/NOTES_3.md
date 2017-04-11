# Dojo#3

Participantes (omitido intencionalmente)

## Qué hicimos durante el dojo?

Abordamos el ejercicio [Dojo#3](https://github.com/diegosanchez/dojo/tree/workshop/dojo_3) implementando los dos últimos dos casos de uso (llegamos!).

## Qué ideas surgieron durante y/o problemas el dojo?

1. Checked - Entidades ocultas en el contexto del problema.
2. Checked - Hasta que punto tenemos que modelar nuestro problema?

## Cronología de la actividad

Retomamos la activadad buscando implementar el siguiente caso de uso:

```js 
it("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
    // ...
});
```

Este caso de uso nos forzó a definir (a priori) una nueva entidad llamada ```Bomb```.  Esta entidad es tal que se evidencia con facilidad, de hecho todos los participantes la habían detectado. Entonces escribimos lo siguiente: 

```js 
it("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
    var bomber = new Bomber( new Cell() );
    var cellWithBrick = new Cell( new Brick() );


    var bomb = bomber.leavesBomb();
    bomb.ticks();
});
```

Dado que la bomba no detona inmediatamente vimos la necesidad de que esta tenega una formar de medir tiempo antes de detonar. Aquí surgió la necesidad de que la bomba responda el mensaje ```Bomb>>tick```; encargado de contabilizar tiempo antes de que esta **EXPLOTE** (esta palabra evidencia algo, que?).

En este punto nos planteamos si es la bomba que destruye lo que tienía alrededor? Existe en la realidad otra entidad que no estamos modelando?. Pensando, pensando, .... observando el problema, ... detectamos (con esfuerzo) la existenica de una nueva entidad que es ```Explasion``` que es la que realmente destruye! Esto nos condujo a la siguiente solución:


```js 
it("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
    var bomber = new Bomber( new Cell() );
    var cellWithBrick = new Cell( new Brick() );


    var bomb = bomber.leavesBomb();
    bomb.ticks();
    var explotion = bomb.ticks();
    explotion.damages(cellWithBrick);

    chai.assert.isTrue( cellWithBrick.isEmpty() );
});
```

Cuál es la destancia entre el código y la realidad? Muy poca, no?! Lindo!

> Es importante describir estas entidades ocultas ya que son suceptibles de adoptar comportamiento ante posibles cambios de requerimientos. 

La ausencia de esta entidad implica que un cambio de hipotético de requerimiento tal como "La bomba explota y destruye en forma de estrella" este terminará, inexorablemente, implementándose en la clase ```Bomb```, con las implicancias que esto tiene (la bomba comienza a acumular más de una responsabilidad) (Cuestión 1).


Habiendo escrito esta prueba y el código que la hace pasar continuamos con el último caso de uso. Ojo! **Throw != Leave**

```js 
it("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
    var bomber = new Bomber( new Cell() );
    var cellWithBrick = new Cell( new Brick() );

    var trayectory = bomber.throwsBomb( cellWithBrick );
    trayectory.swishs();
    var explotion = trayectory.swishs();

    explotion.damages(cellWithBrick);

    chai.assert.isTrue( cellWithBrick.isEmpty() );
});
```

Se repite la historia. Oculta existe la entidad trayectoria. También la creamos. 

Entonces, hasta que punto tenemos que crear entidades? Hasta que punto nuestro modelo tiene que representar la realidad? Me gustaría tener un respuesta más asertiva... Es una pregunta que no tiene una respuesta correcta o incorrecta para todos los problemas. La respuesta es.... *depende!* (Cuestión 2)

Enuncio esto a modo de guía (se desprende de mis experiencias) y les propongo que la consideren con ojo crítico.

> Nuestro modelo debería modelar todos, toooodos los objetos del negocio bajo modelado.

Por ejemplo: 
- El jostick del juego no pertenece al modelo de negocio que estamos modelando => no se justificaría modelarlo.

Respecto a:
- Bomber
- Bomb
- Wall o Brick
- Cell
- Explosion 
- Trayectory
- Bagulaa

Son todas entidades en el juego están presentes (al menos todas las necesarias para resolver los casos de uso que nos planteamos resolver).


Les comparto una implementación de estos casos de uso: 
- Entidades: https://github.com/diegosanchez/dojo/tree/master/dojo_3/javascripts
- Casos de uso: https://github.com/diegosanchez/dojo/blob/master/dojo_3/javascripts/test/solution.js


### To be continued...
