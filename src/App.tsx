import React from 'react';
import {Button, ButtonGroup, Route, Router, useBotContext } from '@urban-bot/core';
import { Info } from './pages/Info';
import { Male } from './pages/Male';
import { Female } from './pages/Female';


export function App() {
    const { chat } = useBotContext();

    return (
      
<>
              
                <ButtonGroup maxColumns={2}
                    title={`Добро пожаловать в бот знакомств канала https://t.me/znakruschannel, ${chat.firstName ?? ''}! Нажмите на кнопку /male если вы парень, или /female -  если девушка.`}
                    isReplyButtons
                 //   isNewMessageEveryRender
                    isResizedKeyboard
                >
                  
                    <Button>/male</Button>
                    <Button>/female</Button>
                    <Button>/info</Button>
                </ButtonGroup>
                <Router>
                   
                    <Route path="/male">
                        <Male />
                    </Route>
                    <Route path="/female">
                        <Female />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                </Router>
                </>
      
    );
}
