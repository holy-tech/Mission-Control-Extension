# Mission Control with OpenLens and Crossplane

Simple Lens extension tries to enable a GUI for high level crossplane tooling through openlens interface.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/holy-tech/mission-control-extension.git
ln -s $(pwd)/mission-control-extension ~/.k8slens/extensions/mission-control-extension
```

## Build

To build the extension you can use the `npm` commands manually:

```sh
cd lens-extension-samples/helloworld-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd mission-control-extension
npm start
```

## Uninstall

```sh
rm ~/.k8slens/extensions/mission-control-extension
```

Restart Lens application.
