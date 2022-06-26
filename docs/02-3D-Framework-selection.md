# Decision Record für die Auswahl des 3D Frameworks

## Status

Accepted.

## Context

3D Frameworks helfen dabei komplexe 3D-Elemente einfach in die Webseite zu integrieren.
Zur Auswahl stehen:

* Svelte Cubed

    * basiert auf Three.js

* Svelte GL

    * basiert auf WebGL

* Svelthree

    * basiert ebenfalls auf Three.js, ähnlich zu Cubed aber mit anderem API-Design

* React Svelte Fiber

    * erfordert zusätzlich React

## Decision

Da zusätzliche Frameworks ohne größeren Bedarf nicht erwünscht sind wird auf React Svelte Fiber verzichtet.

Three.js basiert auf WebGL und soll die Implementierung vereinfachen. Daher wird zunächst ein Three.js-Framework erprobt.

Svelthree scheint weniger Dokumentation aufzuweisen und neuer als Svelte Cubed zu sein, daher fällt die Wahl auf Svelte Cubed.

Svelte Cubed fungiert als Wrapper für Three.js, d.h. selbst wenn gewisse Features nicht ausgearbeitet oder gut genug dokumentiert sind, kann man immernoch auf die grundlegende Three.js Funktionalität zurückgreifen.

## Consequences

### Pros:

* unkomplizierte Integration einfacher 3D Elemente

* Three.js als beliebte und gut dokumentierte Basis

### Cons:

* Svelte Cubed als neues Projekt schlecht dokumentiert

