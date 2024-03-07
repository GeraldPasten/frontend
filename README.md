# SVR03-FRONTEND
Este arquetipo fue desarrollado para banorte y apunta a ejemplificar como se desarrolla una aplicacion web medinate Node JS y Angular.

Adicionalmente este arquetipo demuestra la incorporación de una capa de seguridad hacia el contenido de la aplicacion web mediante la redireccion a un formulario login en donde se validara la existencia y credenciales de un usuario dentro de sso.

# Contenido

- [x] Pantalla Login
- [x] Pantalla Home
- [x] Consumo de servicio Rest
- [x] Conexion con SSO
- [x] Redireccion a login SSO
- [x] Obtencion de Token SSO
- [x] Despliegue en ocp / Comandos OC
- [x] Carpeta Openshift
- [x] Parametrizacion

# Tecnologías utilizadas
Angular: (version 12.2.18)
Node Js: (version 16)

# Conexion con RH SSO 
Configuracion para la conexion son RedHat Singles Sign On (RH SSO) mediante Open id Conect 

url => Especificar la URL del servidor de autenticación en un escenario de autenticación.
client-id => Especificar el identificador del cliente (client ID) en un escenario de autenticación.
credentials => Especificar el secreto del cliente (client secret) en un escenario de autenticación.

# Configuraciones en carpeta OpenShift
La carpeta openshift contiene el archivo route-config.yaml, que proporciona configuraciones de rutas para OpenShift. Estas configuraciones se pueden utilizar para exponer los servicios desde OCP.

# Variables de entorno parametrizables desde OCP
Cuenta con las configuraciones necesarias para que el proyecto solicite variables de entorno que se utilizaran para la conexion con SSO y pueden utilizarse o ser utiles para diferentes propositos dentro del proyecto.

# Docker File
Este proyecto cuenta con un archivo Docker file, que indica los pasos necesarios para preparar un ambiente con los requisitos minimos de instalacion y despliegue del arquetipo y se utiliza para su despliegue en ocp. (fundamental).

# Comandos OC 
Estos comandos sirven para desplegar el arquetipo en openshift desde la consola del bastion.

- oc new-build --name  front --binary --strategy docker
- oc set env bc/front URL_GATEWAY= "" SSO_KEYCLOAK="" SSO_REALM="" SSO_CLIENT=""
- oc start-build front --from-dir=. --follow
- oc new-app front
- oc expose service/front

# Comandos compilacion (Local)
A continuación se presentan algunos comandos útiles para utilizar la aplicación:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

