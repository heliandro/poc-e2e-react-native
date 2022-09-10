# POC E2E no React Native com Detox

O proposito desta poc é demonstar a execução de testes end-to-end utilizando a lib Detox.

As configurações do Detox foram feitas
seguindo a [documentação oficial](https://wix.github.io/Detox/) junto com o [documento de instalação simplificado](https://www.notion.so/Detox-Setup-359cdc2888ad4481b4448f737bef637b), sendo este ultimo criado pelo [canal da Rocketseat](https://www.youtube.com/watch?v=V_BUjfBBYGI).

# Requisitos

Para rodar o projeto é necessario:
* Node v16
* Android Studio
    * Totalmente configurado
    * API 30
    * Emulador Pixel 4 com API 30

# Instalação

Para instalar, execute:
> yarn install

# Build & Run

Para gerar o apk, abrir o emulador e instalar
> yarn android

Para inciar no modo dev (hot reload)
> yarn start

Obs: caso o emulador não tenha sido encontrado, verifique se você criou com o nome e api corretos. Não esqueça de adicionar o nome do emulador no arquivo [.detoxrc.json](.detoxrc.json)

# Testes E2E

Os testes E2E são criados na pasta [e2e](./e2e/) que se encontra na raiz do projeto, pasta esta que foi gerada pelo Detox.

Nosso teste se encontra no arquivo [firstTest.e2e.js](./e2e/firstTest.e2e.js)

Antes de rodar os testes, precisamos efetuar um novo build, execute:
> yarn detox build -c android.emu.debug

Para executar os testes
> detox test -c android.emu.debug

obs: para este passo é necessario ter executado o 'yarn start'



