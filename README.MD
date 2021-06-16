## CONFIGURANDO O ESLINT
vamos deletear o arquivo .eslintrc.js na raiz do nosso projeto

## VAMOS ISTALAR NOSSAS DEPEDENCIAS
yarn add eslint -D

## APOS BAIXAR ESSA DEPENDECIA EXECUTE O COMANDO
yarn eslint --init

## AGORA ELE IRA FAZER UMAS PERGUNTAS
na primeira pergunta selecione para achar problemas e força o code style => To check syntax, fid problems, an enforce code style
aqui vamos falar que estamos usando javaScript modules(import.export)
proximo vamos falar o tipo de projeto que vamos usar
proximo não estamos utilizando typeScript caso esteja utilizado habilite
prixomo vamos precionar o space (Press <space> to select, <a> to toggle all, <i> to invert selection)
proximo vamos fazer o uso da popular style guide
proximo utilizar tabem o padrão da Airbnb: httt://github.com/aribnb/javascript
proximo liguagem que vamos usar JavaScript
proximo selecione yes ele esta pergunta se pode istalar alguns caras


## APOS ESSE PROCESSO VAMOS ADICIONAR MAIS ALGUMAS LIBS
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint D

## DEPOIS CONFIGURE SEU eslint
module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react/hooks",
        "jsx-ally",
        "import"
    ],
    //regrar que eslint tem mais nao quermos seguir
    "rules": {
        "prettier/prettier": "error", //para quando algo for delcarado fora do scopo
        "react/jsx-filename-extension":[
            "warn",{
                extensions: [".jsx", ".js"]//para fala quais arquvos vamos aceita em nossa aplicação

            }
        ],
        "import/prefer-default-export": "of", //aqui para permiti que tenhamos componentes ou ate msm functons o nosso export defaul ter apenas ou export
        "no-param-reassign": "off", //aqui vamos permitir a reatribuiçao de paramtros
    }
};


## CONFIGURAÇÃO DO PETTIER
{
    "singleQuote": true,
    "trailingComma": "es5"
}


## ISTALANDO NAVEGAÇÃO PARA TRABALHAR COM ROTEAMENTO DE TELAS
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer


## VAMOS UTILIZAR UMA LIB CSS CHAMADA STYLED COMPONENTS PARA PODEMOS TRABALHAR COM MSM CSS DA WEB
yarn add styled-components

## PARA USARMOS ICOONS EM NOSSA APLICACAOO
npm install react-native-elements
yarn add react-native-vector-iconsnpx react-native link react-native-vector-icons
npx react-native link react-native-vector-icons
