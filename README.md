Local node_modules Using [npm-link](https://docs.npmjs.com/cli/link)

## Installation
clone main repository
```
$ git clone git@github.com:foundy/npm-test-repo.git
```

clone packages
```
$ git clone git@github.com:foundy/npm-test-package1.git
$ git clone git@github.com:foundy/npm-test-package2.git
```

directory structure
```
./
  npm-test-repo/
  npm-test-package1/
  npm-test-package2/
```

## Quick Start

install dependencies
```bash
$ pushd npm-test-repo
$ npm install
$ popd
```

create global symbolic link
```bash
$ pushd npm-test-package1
$ [sudo] npm link
$ popd

$ pushd npm-test-package2
$ [sudo] npm link
$ popd
```

create a symlink from the local node_modules
```bash
$ pushd npm-test-repo
$ npm link npm-test-package1
$ npm link npm-test-package2
$ popd
```

for Development
```bash
# run
$ cd npm-test-repo
$ npm start

# If any change is detected, it’ll run the compilation again of npm-test-repo
$ vi ../npm-test-package1/index.js
$ vi ../npm-test-package2/index.js
```

for Production
```bash
# build
$ cd npm-test-repo
$ npm run compile

# run
$ NODE_ENV=production npm start
```