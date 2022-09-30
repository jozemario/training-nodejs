# Training NodeJS
NodeJS Design Patterns and Module Federation



<details><summary>Project Structure</summary>
<p>

![Alt text](./architecture.dio.svg)
<img src="./architecture.dio.svg">

#### Ecosystem:
```
shell: SSR server [ "express": "^4.17.1","react": "^18.1.0" ]
xshell: standalone application NextJS 12 + React 18
remote1: standalone application React 18 + Webpack 5
remote2: standalone application React 18 + Webpack 5
store: standalone application React 18 + Webpack 5
```
</p>
<p>

#### Structure:

```
Module Federation Server Side Rendering example using React Suspense.

A basic shell application loading remote components and rendering them server side.

shell is the host application which includes the SSR server.
remote1 standalone application which exposes Content component and consumes Image from remote2
remote2 standalone application which exposes Image component.
store standalone application which exposes Store component.
```
</p>
</details>

<details><summary>Development</summary>
<p>

#### Setup repository
```
github clone git@github.com:jozemario/training-nodejs.git
cd training-nodejs/
git checkout develop
```
#### Setup project
```
# Install all the dependencies.
yarn 
# Build the packages
yarn build
# Run in the shell and remote1 and remote2 folders to start the servers
yarn serve

This will build the packages and and serve them on ports 3000, 3001 and 3002 respectively.

localhost:3000 (SHELL)
localhost:3000 (XSHELL)
localhost:3001 (STANDALONE REMOTE1)
localhost:3002 (STANDALONE REMOTE2)
localhost:3003 (STANDALONE STORE)
```
</p>
</details>


