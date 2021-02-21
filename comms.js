const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //

function test(robot, mess, args)
{
    mess.channel.send('Test')
}
function hello(robot, mess, args) 
{
    mess.reply("Привет!")
}

// Список команд //

var comm_list = [{
    name: "test", // Name - название команды, на которую будет реагировать бот
    out: test, // Out - название функции с командой
    about: "Test command" // About - описание команды 
},
{
    name: "hello",
    out: hello,
    about: "Команда для приветствия!"
}
];

module.exports.comms = comm_list;