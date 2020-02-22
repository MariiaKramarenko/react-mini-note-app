import React, {Fragment} from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';

export const Home = () => {
	const notes = new Array(3).fill("").map((_, i) => ({id:i, title:`Note ${i + 1}`}))//как результат возвращаем объект для 
	//каждого элемента,у котогоро поле id будет равно i 
	//и поле title будет высчитывать номер этой записи
	return (
		<Fragment>
		<Form />
		<hr />
		<Notes notes={notes} />
		</Fragment>
		)
}