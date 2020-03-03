import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";


export const Form = () =>{
	const [value, setValue] = useState('')//создаем стейт с помощью хука с начальным значением пустая строка
	const alert = useContext(AlertContext)//вызываем контекст алерта хуком
	
	const submitHandler = event =>{
		event.preventDefault()//отменяем действие по умолчанию
		alert.show(value, 'succes')
	}

	return(
       <form onSubmit={submitHandler} >
       		<div className="form-group">
       		<input 
       		type="text" 
       		className="form-control" 
       		placeholder="Enter here your note"
       		value={value}
       		onChange = {e => setValue(e.target.value)} />
       		</div>
       </form>

		)
}