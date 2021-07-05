const express = require("express")
const cors = require("cors")
const createProxyMiddleware = require("http-proxy-middleware")

const ProxyServer = express()

ProxyServer.use(cors())

ProxyServer.use( "*", createProxyMiddleware({
    target: "http://apix.facepunch.com",
    changeOrigin: true,
    secure: false
}))

ProxyServer.listen( 3899 )