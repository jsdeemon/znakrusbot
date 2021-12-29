import React from 'react';
import { Dialog, DialogStep, Text, Image, useImage, useBotContext } from '@urban-bot/core';
import TelegramBot from 'node-telegram-bot-api'
import { TELEGRAM_TOKEN, CHANNEL } from '../render/telegram'


export function Male() {


    const { chat } = useBotContext()
    const bot = new TelegramBot(TELEGRAM_TOKEN, {polling: false});

    if (!chat.username) {
        return <Text>У вас не указан username, поэтому бот не может разместить вашу анкету на канале. Для размещения анкеты вы должны указать свой username в вашем телеграм профиле. Для этого перейдите в меню настройки - изменить профиль - и укажите имя пользователя.</Text>;
        }

    return (
       
        <Dialog
         onFinish={(answers) => {
           //  console.log(answers);
             let message = `🧔\n(1) Имя: ${answers.name}\n(2) Возраст: ${answers.age}\n(3) Семейное положение: ${answers.familystatus}\n(4) Дети: ${answers.children}\n(5) Рост: ${answers.height}\n(6) Вес: ${answers.weight}\n(7) Образование: ${answers.education}\n(8) Место работы: ${answers.workplace}\n(9) Профессия: ${answers.profession}\n(10) Возраст для кандидатки: ${answers.сandidatage}\n(11) Город проживания: ${answers.city}\n(12) Обращаться: @${chat.username}\n\n--------------------------------------------\n(13) Дополнительная информация:\n\n${answers.about}`

             bot.sendMessage(CHANNEL, message)
             bot.sendMessage(chat.id, `Ваша анкета опубликована на канале https://t.me/znakruschannel`)
         }}>
            <DialogStep
                content={<Text>Привет, как вас зовут?</Text>} 
                id="name"
              //  onNext={(name) => console.log(name)}
            >
                <DialogStep
                    content={<Text>Cколько вам лет?</Text>}
                    id="age"
                >
                    <DialogStep 
                        content={<Text>Из какого вы города?</Text>}
                        id="city"
                    >
                         <DialogStep 
                        content={<Text>Ваше семейное положение?</Text>}
                        id="familystatus"
                    >
                          <DialogStep 
                        content={<Text>Есть ли у вас дети?</Text>}
                        id="children"
                    >
                          <DialogStep 
                        content={<Text>Укажите ваш рост:</Text>}
                        id="height"
                    >
                         <DialogStep 
                        content={<Text>Укажите ваш вес:</Text>}
                        id="weight"
                    >
                        <DialogStep 
                        content={<Text>Укажите ваше образование (например, высшее):</Text>}
                        id="education"
                    >
                         <DialogStep 
                        content={<Text>Укажите ваше место работы (например, супермаркет):</Text>}
                        id="workplace"
                    >
                        <DialogStep 
                        content={<Text>Укажите вашу профессию (например, экономист):</Text>}
                        id="profession"
                    >
                         <DialogStep 
                        content={<Text>Укажите возраст кандидатки (например, 25-30):</Text>}
                        id="сandidatage"
                    >
                        
                      <DialogStep 
                        content={<Text>Напишите любую дополнительную информацию, например, кого хотите найти? Также можете написать пару слов о себе</Text>}
                        id="about"
                    />
                </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
          
        </Dialog>
    
    );
}