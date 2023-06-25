'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';

export default function Greeting() {
	const [signIn, setSignIn] = useState(false);
	const [username, setUsername] = useState('');

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.value !== '') {
			setUsername(e.target?.value);
		}
		console.log(username);
	};
	const submitHandler = (e: SyntheticEvent) => {
		console.log('sign In');
		setSignIn((c) => !c);
		e.preventDefault();
	};

	return (
		<form onSubmit={submitHandler} className='flex items-center justify-end'>
			{signIn === false ? (
				<input
					required
					autoFocus
					maxLength={15}
					type='text'
					placeholder='What is your name?'
					className='border rounded mr-4 p-4 bg-slate-100 text-indigo-500'
					onChange={onChangeHandler}
				/>
			) : (
				<h1 className='text-xl mr-4'>
					Welcome, <em className='text-3xl'>{username}</em> !
				</h1>
			)}
			<button className='border border-indigo-400 rounded bg-indigo-400 p-4 hover:border-pink-200 hover:bg-pink-200 hover:text-indigo-500 w-30'>
				{!signIn ? 'Sign In' : 'Sign Out'}
			</button>
		</form>
	);
}
