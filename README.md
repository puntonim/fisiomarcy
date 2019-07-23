# Fisio Marcy

Pagina web per istruzioni sulle sessioni di fisioterapia.

## How to create a React project with Antd:
```bash
$ npx create-react-app fisiomarcy
$ cd fisiomarcy
$ npm install --save antd
$ npm install babel-plugin-import --save-dev
```

Then, to enable auto import of css files for Ant components:
```bash
$ git commit
$ npm run eject
```
Add this code to the babel section in package.json:
```json
"plugins": [["import", { "libraryName": "antd", "style": "css" }]]
```

## Copyright
Copyright 2019 puntonim (https://github.com/puntonim). No License.