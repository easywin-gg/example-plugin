# Example Plugin

Use this repository as example/template plugin.


## Installation

 - Clone this repository using git.
 - Update submodule sdk
 - Install the dependencies.
 - Change in tsconfig.json outDir to your computer username.

```sh
$ git clone https://github.com/rank1-gg/example-plugin.git
$ git submodule init
$ cd example-plugin
$ git submodule update --remote --merge
$ yarn or npm install
```

### Dev
 
Start auto compile
```sh
$ yarn tsc -w
```