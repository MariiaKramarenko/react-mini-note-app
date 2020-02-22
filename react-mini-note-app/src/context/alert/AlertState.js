import React from 'react';
import {AlertContext} from './alertContext';

export const AlertState = ({children}) =>{//контекст вызова для работы с алертом
	return(
		<AlertContext.Provider>
			{children}
		</AlertContext.Provider>
	)
}