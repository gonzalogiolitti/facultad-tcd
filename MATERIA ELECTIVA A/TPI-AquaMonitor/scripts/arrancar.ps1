# Arranque en Windows NATIVO (PowerShell). NO PROBADO en esta maquina (se desarrollo en WSL): ver README.
#     powershell -ExecutionPolicy Bypass -File scripts\arrancar.ps1
$ErrorActionPreference = "Stop"
$aqui = Split-Path -Parent $MyInvocation.MyCommand.Path
$raiz = Split-Path -Parent $aqui
$envFile = Join-Path $raiz ".env"
$userdir = Join-Path $raiz "nodered\userdir"
if (-not (Test-Path $envFile)) { throw "Falta $envFile. Copia .env.example a .env y completalo." }
if (-not (Test-Path (Join-Path $userdir "node_modules\node-red"))) { throw "Node-RED no esta instalado. Ejecuta:  cd nodered\userdir ; npm install" }
if (-not (Test-Path (Join-Path $userdir "flows_cred.json"))) { Copy-Item (Join-Path $userdir "flows_cred.plantilla.json") (Join-Path $userdir "flows_cred.json") }
$env:TZ = "America/Argentina/Buenos_Aires"
Set-Location $userdir
node --env-file="$envFile" node_modules\node-red\red.js --userDir "$userdir"
