# 💻 Interface Instagram
- Feed do instagram no Modo-Dark com animação ao carregar Imagens

<p align="center">
  <img alt="GitHub language count" src=https://github.com/LucasGabryellll/Feed-Instagram/blob/master/src/imageResultado/apresentacao.gif>
  <img alt="GitHub language count" src=https://github.com/LucasGabryellll/Feed-Instagram/blob/master/src/imageResultado/app.png>

  ## ☕ Instalação da Expo-cli:
  - No prompt de comando digitar o comando: `npm install expo-cli --global`
 
  ## ✔️ Rodando o Expo apos instalado:
   - No prompt de comando na `Pasta` do Projeto digitar: `yarn start`
   - Caso não Tenha o yarn pode digitar: `expo start`
 
  ## ✔️ Rodando o sevidor:
  - No vsCode escrever o comando: `yarn json-server server.json -d 1000`

  ## ❗ Problemas em carregar as Imagens:
  Caso as imagens do Feed não apareçam no Android:
   - Digitar o comando: `adb reverse tcp:3000 tcp:3000`
   - `OBS`: O comando so funciona caso esteja utilizando um Emulador,
    se estiver Usando a Expo no Dispositivo Físico não irá funcionar!.

  ## 🚀 Tecnologias Utiliziadas:
  - Expo
  - React Native
