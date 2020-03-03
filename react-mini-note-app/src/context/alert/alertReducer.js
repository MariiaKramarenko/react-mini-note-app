import {SHOW_ALERT, HIDE_ALERT} from "../types.js";

const handlers = {//объект ключи котрого -action.type для редьюсера
 [SHOW_ALERT]: (state, {payload}) => ({...payload, visible:true}),//payload содержит данные для алерта,его тип текс и так далее
 [HIDE_ALERT]: state =>({...state, visible:false}),//в случае HIDE_ALERT меняем флаг visible на false(это нужно для анимации алерта)
 DEFAULT: state => state//возвращаем стейт по умолчанию если action не применился 
}


export const alertReducer = (state, action) =>{//редьюсер принимает стейт и экшн
  const handle = handlers[action.type] || handlers.DEFAULT //создаем переменную handle у объекта handlers берем по ключу  action.type handlers.DEFAULT -дефолтное значение
  return handle(state, action)
}