import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

//помним что в хуке useState,первый парметр -это значение,
//второй параметр -функция которая меняет значение первого параметра
export const Form = () =>{//компонента Form кот принимет в себя вводимое сообщение
	const [value, setValue] = useState('')//создаем стейт с помощью хука с начальным значением пустая строка
	const alert = useContext(AlertContext)//используем контекст вызова Алерта с помощью хука useContext в который передаем сам контекст
	
	const submitHandler = event =>{//бработчик события по нажатию,
		event.preventDefault()//отменяем действие по умолчанию
			if(value.trim()){//метод .trim() вызывается чтобы очистить все проелы, так как value это строка вводима в инпут
              //...тогда мы создаем новый объект note
              alert.show('Note was added', 'success')//показываем алерт передавая ему type = "succes"
              setValue('')//очищаем инпут пустой строкой
			} else {
				alert.show('Enter your note!')
			}
		
	}

	return(
       <form onSubmit={submitHandler} >
       		<div className="form-group">
       		<input type="text" className="form-control" 
       		placeholder="Enter here your note" value={value}
       		onChange = {e => setValue(e.target.value)} 
       		/>
       		</div>
       </form>

		)
}