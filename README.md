# ⚡Et Après...
## Motivation

Improve building your faster **prototyping** by using Vite, TypeScript, React, TailwindCSS

// description du projet

libraries utilisées:

- Vite
- React
  - React Router
- TypeScript
- Tailwind CSS
  - daisyUI
- ESLint
- Prettier

## Set up

Installation des packages

```shell
npm install
```
ou

```shell
npm i
```

Lancement du server de développement
```shell
npm run dev
```


## Vite

[Vite](https://github.com/vitejs/vite) est un outils de construction rapide de front-end.
Selon le [README](https://github.com/vitejs/vite/blob/main/README.md),
il se compose en deux partie principales : 

- Un serveur de développement qui sert vos fichiers sources sur des modules ES natifs, avec de riches fonctionnalités intégrées et un remplacement de module à chaud (HMR) étonnamment rapide.
- Une commande de construction qui regroupe votre code avec Rollup, préconfiguré pour produire des actifs statiques hautement optimisés pour la production.

## React

[React](https://github.com/facebook/react) est une bibliothèque JavaScript permettant de créer des interfaces utilisateur.

En raison de son formidable système de rendu, il existe de nombreux [React Renderor](https://github.com/chentsulin/awesome-react-renderer). React ne peut donc pas être utilisé uniquement pour le Web, mais aussi par [React Native] (https://reactnative.dev/).

## TypeScript

[TypeScript] (https://github.com/microsoft/TypeScript) est une surcouche de JavaScript. C'est juste une des bibliothèques NPM, mais elle fournit un compilateur original.

Lorsque vous utilisez TypeScript avec React, vous pouvez écrire JSX avec TypeScript, appelé TSX. Ensuite, vous pouvez développer des vues écrites par le modèle **Type-Safe**.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) est un framework CSS moderne à vocation utilitaire. Il fournit de nombreuses règles CSS, mais celles-ci sont purgées lors des constructions de production. Les développeurs n'ont donc pas à se soucier de la taille des ressources CSS pour optimiser les performances.

Dans VSCode, je recommande d'utiliser [intellisense extension](https://tailwindcss.com/docs/intellisense).

Lorsque vous décidez d'utiliser Tailwind, vous n'écrivez que des classes CSS à caractère utilitaire, vous n'avez pas à vous en soucier !
## Formatter and Linter

Déjà configuré [ESLint](https://eslint.org/) et [Prettier](https://prettier.io/). Vous pouvez personnaliser les règles.

REMARQUE : Le modèle n'utilise pas [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) et [prettier-eslint](https://github.com/prettier/prettier-eslint). Je recommande donc d'exécuter les commandes individuellement. Par exemple, `prettier && eslint`.

Veuillez lire : https://prettier.io/docs/en/integrating-with-linters.html.

