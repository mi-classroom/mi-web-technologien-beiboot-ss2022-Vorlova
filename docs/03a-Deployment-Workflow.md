# Deployment Workflow

## Context

We are required to have the application running live on a server. As *github pages* is chosen as the host, the deployment itself is fairly simple.

However, the build must be static so that the app can run on github pages.

To achieve that, an adapter for static builds is used in the `svelte.config` file.

Additionally, since within the application node modules were imported, specialized settings were needed for a successful static build of the app.

To build a static version of the app, use:

```bash
npm run work-build
```

After that, within the `build` folder, make sure to change the folder name of `_app` to `app`.

Change all imports of the contents of `app` within this folder accordingly.

If all of this is done, copy **only** the contents of the `build` folder into the branch ``gh-pages`` and push the update.

After a minute or so the new build should be up on [Github Pages](https://mi-classroom.github.io/mi-web-technologien-beiboot-ss2022-Vorlova/).
