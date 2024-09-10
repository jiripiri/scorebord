# Project Name

## Description

A brief description of the project goes here.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Filesystem](#filesystem)

## Installation

Instructions on how to install and set up the project.

## Usage

Instructions on how to use the project.

## Contributing

Guidelines on how to contribute to the project.

## License

Information about the project's license.

## Filesystem

..\SCOREBORD\DOCKER
├───server
│   │   main.py
│   │
│   ├───static
│   │       script.js
│   │       styles.css
│   │
│   └───templates
│           index.html
│
└───tests

### server
De pythoncode voor de server gaat in main.py.

### HTML
__Alle__ HTML code voor de main page gaat in __index.html__. Voor alle andere pagina's wordt er een nieuw bestand gemaakt in __\scorebord\docker\server\templates__. De naamgeving van dit bestand is simpelweg de functie van die bestand. 

### Javascript en CSS
Alle __statische__ bestanden (javascript, CSS, en alle andere bestanden die HTML aanpassen) gaan in __\scorebord\docker\server\static__
