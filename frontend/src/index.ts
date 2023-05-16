import { io } from "socket.io-client"
import { createApp } from "vue"
import App from "./App.vue"

const socket = io("http://localhost:3000")

console.log("i am here")

createApp(App).mount("body")
