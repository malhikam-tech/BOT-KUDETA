const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
    puppeteer: { headless: true }
});

