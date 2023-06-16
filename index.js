import express from 'express';
import { Telegraf } from 'telegraf';
import { mainKeyboard } from './keyboard.js';
const token = "5870836430:AAEctefIc_KKVkTWcESfOMwkiWk1Rf4eTiw"

const app = express();
const bot = new Telegraf(token);

bot.start((ctx) => {
    ctx.reply('Добро пожаловать!', mainKeyboard())
})

bot.hears('Показать список студентов', (ctx) => {
})
bot.hears('Добавить студента', (ctx) => {
    ctx.reply('Введите имя и фамилию студента:');
    bot.hears((ctx) => {
        ctx.reply('Студент успешно добавлен!');
    });
})

bot.hears('Удалить студента', (ctx) => {
    ctx.reply('Введите номер студента:');
    bot.hears((ctx) => {
    })
})
bot.launch()