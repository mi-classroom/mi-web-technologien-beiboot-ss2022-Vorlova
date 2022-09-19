# Decision for a Hosting Service

## Status

Accepted.

## Context

One of the first requirements for this project was to have it up and running in a remote live environment, so that other participants of this module could see and try it out as well.

There are several options for hosting an app online, some of which are:

* GitHub Pages

* Setting up a server on ADV Lab (service provided by the TH Köln)

* a Cloud solution like Google Cloud

## Decision

Since the projects are hosted on GitHub, setting up GitHub Pages as a host is rather simple. Within the projects settings it is the easiest option from all of the above.

But, GitHub Pages only supports static pages and thus does not allow for authetications like `.htaccess`.

However, this risk is manageable since the image data, which would primarily be the reason for such safety measures, is not provided via the application. The user needs to upload it themself.

## Consequences

### Pros:

* Simple setup of hosting a website

* Quick deployment

### Cons:

* Works only with static websites

    * `.htaccess` not usable

    * need for different build process
