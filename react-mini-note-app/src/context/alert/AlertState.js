import React, {useReducer} from 'react';//{useReducer} -хук для использования редьюсера
import {AlertContext} from './alertContext';
import {SHOW_ALERT} from "../types";
import {HIDE_ALERT} from "../types";
import {alertReducer} from "./alertReducer";

export const AlertState = ({children}) =>{//контекст вызова для работы с алертом
	const [state, dispatch] = useReducer(alertReducer, {visible: false})//созд массив и указываем что исп редьюсер alertReducer, второй параметр-initial state
	
    const show = (text, type = "warning") =>{//функция которая показывает alert
    	dispatch({//она диспатчит экшн
    		type: SHOW_ALERT,//экшн показа алерта
    		payload: {text, type}//payload-объект с данными кот вводится в input, type-тип алерта
    	})
    }

    const hide = ()=> dispatch({type: HIDE_ALERT})//функция которая скрывает алерт, диспатчит экшн


	return(
		<AlertContext.Provider value={{show, hide, alert: state}}>
			{children}
		</AlertContext.Provider>
	)
}