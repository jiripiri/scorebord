# Scorebord

Jiri vult de rest wel aan.

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

I encourage you to use Issues and pull requests. This is much cleaner in the git logs, and easier to read for other people to help you out. ([youtube video](https://www.youtube.com/watch?v=TKJ4RdhyB5Y)). Vscode also has a great extension to do this with a GUI ([youtube video](https://www.youtube.com/watch?v=-nfUgBLBTIo&t=103s)).

## License

Information about the project's license.

## Filesystem

```
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
```

### server
De pythoncode voor de server gaat in __main.py__

### HTML
__Alle__ HTML code voor de main page gaat in __index.html__. Voor alle andere pagina's wordt er een nieuw bestand gemaakt in __\scorebord\docker\server\templates__. De naamgeving van dit bestand is simpelweg de functie van die bestand. 

### Javascript en CSS
Alle __statische__ bestanden (javascript, CSS, en alle andere bestanden die HTML aanpassen) gaan in __\scorebord\docker\server\static__
