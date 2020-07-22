const express = require('express')
const server = express();
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./App');

server.use('/asset', express.static('node_modules/vue/dist'));
server.use('/App.js', express.static('App.js'));

server.get('*', (req, res) => {
  const app = createApp();
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <body>
        ${html}
         <script src="/asset/vue.js"></script>
         <script src="/App.js"></script>
        </body>
      </html>
    `)
  })
})

server.listen(8080)