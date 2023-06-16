import Markup from "telegraf";

export function mainKeyboard() {
    return Markup.keyboard([
        ['Показать список студентов'],['Добавить студента'],['Удалить студента']
    ])
    .oneTime()
    .resize()
    .extra()
}
mainKeyboard()