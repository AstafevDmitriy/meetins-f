import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Input from '../../global/helpers/Input/Input'
import loginIcon from '../../public/images/login.svg'
import passIcon from '../../public/images/pass.svg'
import s from '../../styles/pageStyles/auth.module.scss'

export default function Login(): JSX.Element {
	const { register, handleSubmit } = useForm()
	const sendLoginData = (data: unknown) => {
		alert(JSON.stringify(data, null, '\t'))
	}
	return (
		<div className={s.card}>
			<Head>
				<title>Авторизация</title>
			</Head>
			<h2>Вход</h2>
			<form onSubmit={handleSubmit(sendLoginData)}>
				<Input
					icon={loginIcon}
					placeholder='Логин или телефон'
					type='text'
					id='login'
					style={{ marginTop: '82px' }}
					register={register('login')}
				/>
				<Input
					icon={passIcon}
					placeholder='Пароль'
					type='password'
					id='pass'
					style={{ marginTop: '25px' }}
					register={register('pass')}
				/>
				<button type='submit' className={`${s.submitBtn} btn`}>
					Войти
				</button>
			</form>
		</div>
	)
}
