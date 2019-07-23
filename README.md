# Fisio Marcy

Pagina web per istruzioni sulle sessioni di fisioterapia.

## How to create a React project with Ant:
```bash
$ npx create-react-app fisiomarcy
$ cd fisiomarcy
$ npm install --save antd
$ npm install babel-plugin-import --save-dev
```

Then you ca use Ant straight away but you have to import its css every time.
The suggested solution is to use their [babel-plugin-import](https://github.com/ant-design/babel-plugin-import).   
So enable auto import of css files with `babel-plugin-import`:
```bash
$ git commit
$ npm run eject
```
Add this code to the babel section in package.json:
```json
"plugins": [["import", { "libraryName": "antd", "style": "css" }]]
```

But doing the `eject` is never the best solution solution, thus I might try to just
import the main Ant css file in `public/index.html`

## Deploy
```bash
$ npm run deploy
```

## Copyright
Copyright 2019 puntonim (https://github.com/puntonim). No License.