# Mission Control with OpenLens and Crossplane

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/holy-tech/Mission-Control-Extension/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/holy-tech/Mission-Control-Extension/tree/main)

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

## License

Copyright 2023.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
