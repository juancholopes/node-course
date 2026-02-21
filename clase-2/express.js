const express = require('express')
const os = require('node:os')
const cluster = require('node:cluster')
const ditoJSON = require('./pokemon/content.json')
const app = express()

app.disable('x-powered-by') // Un extra de seguridad para no revelar que estamos usando Express
const PORT = process.env.PORT ?? 3000

function calcularCantidadWorkers (cpuInfo = os.cpus()) {
  if (!Array.isArray(cpuInfo) || cpuInfo.length === 0) return 1

  const totalNucleos = cpuInfo.length
  const velocidadPromedio = Math.round(
    cpuInfo.reduce((acumulado, cpu) => acumulado + cpu.speed, 0) / totalNucleos
  )

  const limitePorEnv = Number(process.env.MAX_WORKERS)
  const maximoPermitido = Number.isFinite(limitePorEnv) && limitePorEnv > 0
    ? limitePorEnv
    : totalNucleos

  const recomendado = velocidadPromedio < 2200
    ? Math.max(1, totalNucleos - 1)
    : totalNucleos

  return Math.max(1, Math.min(recomendado, maximoPermitido))
}

function escalarProcesosSegunCPU (iniciarWorker) {
  const cpus = os.cpus()
  const workers = calcularCantidadWorkers(cpus)

  if (cluster.isPrimary) {
    console.log(`CPU detectadas: ${cpus.length}`)
    console.log(`Workers a crear: ${workers}`)

    for (let i = 0; i < workers; i++) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(
        `Worker ${worker.process.pid} finalizó (code=${code}, signal=${signal}). Reiniciando...`
      )
      cluster.fork()
    })

    return
  }

  iniciarWorker()
}

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditoJSON)
})

escalarProcesosSegunCPU(() => {
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on http://localhost:${PORT}`)
  })
})
