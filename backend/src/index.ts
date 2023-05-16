import express, { Express } from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import cors from "cors"

const mode = process.env.NODE_ENV || "production"

const __dirname = dirname(fileURLToPath(import.meta.url))

const options = { cors: {} }

if (mode === "development") {
  options.cors = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
}

const app: Express = express()
const server = createServer(app)
const io = new Server(server, options)

app.use(cors())
app.use(express.static(resolve(__dirname, "../../frontend/dist")))

io.on("connection", socket => {
  console.log("new connection", socket.id)

  socket.on("disconnect", () => {
    console.log("connection lost", socket.id)
  })
})

server.listen(3000)
