# Decision Record für die Auswahl des Frontend Frameworks

## Status

Accepted.

## Context

Frontent Frameworks helfen dabei komplexe UI-Elemente einfach umzusetzen.
Zu den populärsten gehören u.a. Vue.js, React, Angular und neuerdings Svelte.

## Decision

Für dieses Projekt wird SvelteKit vorgeschlagen.

Im Gegensatz zu Frameworks wie React oder Vue.js greifen Svelte-Applikationen zur Laufzeit auf keine frameworkspezifischen Module zurück. Der Code wird zur Übersetzungszeit vom Svelte-Compiler in JavaScript-Code übersetzt, der von keinen externen Programmbibliotheken abhängig ist.

Es gilt außerdem als sehr beliebt bei Entwickler*innen.

## Consequences

Zu erwarten sind:

* schnelles Aufsetzen und Weiterentwicklung von Anwendung und Komponenten
* gute Performance der Anwendung
* kleine Bundle-Size
* schlanke Anwendung mit wenigen bis keinen zusätzlichen UI-Bibliotheken
* eine gute Developer Experience bei der Entwicklung

Nachteile könnten sich ergeben durch:

* eine kleinere Community im Vergleich zu React o.ä.
* weniger libraries
