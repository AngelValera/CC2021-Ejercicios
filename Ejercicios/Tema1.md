## Ejercicios Tema 1: Arquitecturas software para la nube

---

#### Ejercicio 1: Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

La aplicación que he decidido coger como ejemplo, se trata de una aplicación que tuve que realizar como práctica final para la asignatura de Desarrollo de Aplicaciones para Internet. La aplicación se puede consultar en este [repositorio](https://github.com/AngelValera/Practica_7_DAI).

Esta aplicación consistía en una web en la que un usuario previamente registrado e identificado en el sistema podía añadir varios bares y además añadir a dichos bares sus principales tapas. También podía añadir comentarios, tanto a los bares como a las tapas. Por último, una vez añadida la información del bar podía ver mediante un mapa su localización exacta.

Según lo anterior, podemos deducir que el patrón que utiliza esta aplicación está basado en una arquitectura basada en capas. Encontraríamos la capa con la interfaz de usuario o capa de presentación, otra capa sería la que incluiría la lógica de la aplicación y por último, la capa de acceso a los datos.

Para evolucionar esta aplicación a una nueva aplicación cuyo patrón esté basado en una arquitectura basada en microservicios, lo primero sería distinguir todas y cada una de las funcionalidades y tratarlas de manera independiente. Por ejemplo, podríamos tener un primer microservicio con la parte visual de la aplicación (frontend), otro microservicio se encargaría de la autentificación de los usuarios. Por otro lado, podríamos definir un microservicio para las operaciones que se realizasen sobre los bares y de igual manera otro para las operaciones relacionadas con las tapas y los comentarios (backend). Por último, tendríamos otro microservicio que se encargaría de la base de datos.

---

#### Ejercicio 2: En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

En la aplicación elegida en el ejercicio anterior y partiendo del desglose en microservicios descrito, no habría problema en definir en varios lenguajes cada uno de esos microservicios. Por ejemplo, podríamos usar JavaScript y hacer uso de su framework React para el microservicio encargado del frontend. Por otro lado, podríamos usar python para las operaciones con bares, tapas y comentarios haciendo uso del framework Django.

En cuanto al almacenamiento de datos, si bien es cierto que las bases de datos SQL como PostgreSQL, que es la que utilicé para esta aplicación, ofrecen grandes ventajas en cuanto a la integridad de los datos, presentan una gran desventaja en cuanto a la escalabilidad de los mismos. Por tanto, lo mas conveniente sería usar una base de datos no relacional como podría ser MongoDB. Éstas son bases de datos mucho más abiertas y flexibles y permiten adaptarse a necesidades de proyectos de una forma más sencilla que los modelos de Entidad Relación.
