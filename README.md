Local node_modules Using [npm-link](https://docs.npmjs.com/cli/link)

## Installation
clone main repository
```
$ git clone git@github.com:foundy/workflow-test.git
```

clone packages
```
$ git clone git@github.com:foundy/workflow-test-common.git
$ git clone git@github.com:foundy/workflow-test-package1.git
$ git clone git@github.com:foundy/workflow-test-package2.git
```

directory structure
```
.
├── workflow-test
├── workflow-test-common
├── workflow-test-package1
└── workflow-test-package2
```

## Quick Start

shortcut
```bash
$ cd workflow-test
$ npm install
$ [sudo] npm link ../workflow-test-package1
$ [sudo] npm link ../workflow-test-package2
$ [sudo] npm link ../workflow-test-common
```

shortcut is the equivalent of doing
```bash
# install dependencies
$ pushd workflow-test
$ npm install
$ popd

# create global symbolic link
$ pushd workflow-test-package1
$ [sudo] npm link
$ popd

$ pushd workflow-test-package2
$ [sudo] npm link
$ popd

$ pushd workflow-test-common
$ [sudo] npm link
$ popd

# create a symlink from the local node_modules
$ pushd workflow-test
$ npm link workflow-test-package1
$ npm link workflow-test-package2
$ npm link workflow-test-common
$ popd
```

### Run

for Development
```bash
# run
$ cd workflow-test
$ npm start

# If any change is detected, it’ll run the compilation again of workflow-test
$ vi ../workflow-test-package1/index.js
$ vi ../workflow-test-package2/index.js
$ vi ../workflow-test-common/index.js
```

for Production
```bash
# build
$ cd workflow-test
$ npm run compile

# run
$ NODE_ENV=production npm start
```

### Unlink

unlink from an application
```bash
$ cd workflow-test
$ npm unlink workflow-test-package1
$ npm unlink workflow-test-package2
$ npm unlink workflow-test-common
```

unlink from your system
```bash
# unlink package1
$ cd workflow-test-package1
$ [sudo] npm unlink

# unlink package2
$ cd workflow-test-package2
$ [sudo] npm unlink

# unlink common
$ cd workflow-test-common
$ [sudo] npm unlink
```
or
```bash
$ [sudo] npm r workflow-test-package1 -g
$ [sudo] npm r workflow-test-package2 -g
$ [sudo] npm r workflow-test-common -g
```
