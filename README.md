Local node_modules Using [npm-link](https://docs.npmjs.com/cli/link)

## Installation
clone main repository
```
$ git clone git@github.com:foundy/workflow-test.git
```

clone packages
```
$ git clone git@github.com:foundy/workflow-test-package1.git
$ git clone git@github.com:foundy/workflow-test-package2.git
```

directory structure
```
./
  workflow-test/
  workflow-test-package1/
  workflow-test-package2/
```

## Quick Start

install dependencies
```bash
$ pushd workflow-test
$ npm install
$ popd
```

create global symbolic link
```bash
$ pushd workflow-test-package1
$ [sudo] npm link
$ popd

$ pushd workflow-test-package2
$ [sudo] npm link
$ popd
```

create a symlink from the local node_modules
```bash
$ pushd workflow-test
$ npm link workflow-test-package1
$ npm link workflow-test-package2
$ popd
```

for Development
```bash
# run
$ cd workflow-test
$ npm start

# If any change is detected, it’ll run the compilation again of workflow-test
$ vi ../workflow-test-package1/index.js
$ vi ../workflow-test-package2/index.js
```

for Production
```bash
# build
$ cd workflow-test
$ npm run compile

# run
$ NODE_ENV=production npm start
```