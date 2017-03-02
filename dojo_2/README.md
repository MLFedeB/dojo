## SpreadSheet

El objetivo de este dojo es implementar una hoja de cálulo (reducida) proveyendo la siguiente funcionalidad básica:

- Una celda puede almacenar una etiqueta o un valor numérico.
- Una celda puede almacenar una función 
    - Implementra función entidad
    - Implementar función sumatoria
- Al actualizar una celda todas las fórmulas referenciadas deberían actualizar su valor.

Un ejemplo de Hoja de cálculo (identidad)

|   | a    | b           | c |
|---|------|-------------|---|
| 1 |      | 1           |   |
| 2 |      | 2           |   |
| 3 | Sum: | =id(b1)     |   |

el valor de ```b1``` debe ser 1 y deberá actualizarse según se actualice la celda referenciada

Un ejemplo de Hoja de cálculo (sumatoria)

|   | a    | b           | c |
|---|------|-------------|---|
| 1 |      | 1           |   |
| 2 |      | 2           |   |
| 3 | Sum: | =sum(b1:b2) |   |

el valor de ```b3``` debe ser 3 y deberá actualizarse según se actualice la celda referenciada
### Metodología

Programación orientada a objetos + TDD

### Agenda

1. Planteo de problema
2. Codificación
3. Puesta en común

## Pasos para realizar el workshop 

1. Clonamos el repo:

    ```bash
        git clone https://github.com/diegosanchez/dojo.git
    ```

2. Descargamos el branch remote correspondiente al workshop:

    ```bash
        git checkout workshop
    ```

### Pasos específicos para javascript

1. Instalamos módulos

    ```bash
        npm install
    ```

2. Ejecutamos los tests

    ```bash
        npm run test
    ```
    
    o
    
    ```bash
        make
    ```

#### Qué necesito?

2. node 4.2.3
3. npm  2.14.7


### Pasos específicos para java

1. Ejecutamos los tests

    ```bash
        mvn test
        ( Estando en la carpeta que contiene el pom.xml )
    ```



#### Qué necesito?

1. Maven 3+ ( brew install maven )
2. JDK 1.7 u 1.8## Pasos para realizar el workshop


## Qué necesito?

1. Notebook para realizar workshop (si queres hacerlo, sino podes venir a compartir tus experiencias)
2. Ganas de compartir tu solución.
