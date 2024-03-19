const express = require('express');
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const { Client, Events, GatewayIntentBits, Webhook } = require('discord.js');

function sendRecentsTo(socket) {
    client.channels.fetch('1219455695284473977').then(channel => {
        channel.messages.fetch({  limit: 100  }).then(messages => {
            messages = messages.reverse();
            messages.forEach(message => {
                socket.emit('general', { message: message.content, name: message.author.username, url: message.author.avatarURL()||'https://cdn.discordapp.com/embed/avatars/4.png' });
            });
        });
    });
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.once(Events.ClientReady, readyClient => {
    if(sockets.length > 0) {
        sockets.forEach(socket => {
            sendRecentsTo(socket);
        })
    }
    botReady = true;
	console.log(`bot ready! Logged in as ${readyClient.user.tag}`);
    client.channels.fetch('1219455695284473977').then(channel => {
        channel.createWebhook({name:'Kreation Web Proxy', avatar: 'https://cdn.discordapp.com/embed/avatars/0.png'}).then(webhook => {
            generalwebhook = webhook;
        });
    });
});
client.on(Events.MessageCreate, message => {
    if(message.author.bot) return;

    switch(message.channel.id) {
        case '1219455695284473977':
            send('general', message.content, message.author.displayName, message.author.avatarURL()||'https://cdn.discordapp.com/embed/avatars/4.png');
            break;
    }
});
var generalwebhook;

var sockets = [];
var botReady = false;

function send(channel, message, name, url) {
    sockets.forEach(socket => {
        socket.emit(channel, { message, name, url });
    });
}
function sendToDiscord(message, author) {
    client.channels.fetch('1219455695284473977').then(channel => {
        generalwebhook.send({
            content: message,
            username: author
        });
    });
}

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    sockets.push(socket);
    if(botReady) { 
        sendRecentsTo(socket);
    }
    socket.on('disconnect', () => {
        sockets = sockets.filter(s => s !== socket);
    });
    socket.on('send chat', ({message, author}) => {
      sendToDiscord(message, author);
    });
});

server.listen(3000, function () {
    console.log('kreation discord');
});

client.login(`MTIxOTQ1MjQ1NTg3MjYyNjc5OQ.G-Hhei.JQtfuPJbOvLX5T6MED8ttqmixru43X7Fki5OXA`);