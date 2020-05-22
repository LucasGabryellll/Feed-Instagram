# Recriando o Feed do Instagram

## Rodando o sevidor:
 - 'yarn json-server server.json -d 1000'

## Problemas em carregar as Imagens:
 - Caso as imagens do Feed não apareçam no Android:
  colocar o comando: 'adb reverse tcp:3000 tcp:3000'