import React, {useReducer} from 'react';//{useReducer} -хук для использования редьюсера
import {AlertContext} from './alertContext';
import {SHOW_ALERT} from "../types";
import {HIDE_ALERT} from "../types";
import {alertReducer} from "./alertReducer";

export const AlertState = ({children}) =>{//контекст вызова для работы с алертом
	const [state, dispatch] = useReducer(alertReducer, {visible: false})//созд массив и указываем что исп редьюсер alertReducer, второй параметр-initial state
	
    const show = (text, type = "warning") =>{
    	dispatch({
    		type: SHOW_ALERT,
    		payload: {text, type}
    	})
    }

    const hide = ()=> dispatch({type: HIDE_ALERT})


	return(
		<AlertContext.Provider value={{show, hide, alert: state}}>
			{children}
		</AlertContext.Provider>
	)
}