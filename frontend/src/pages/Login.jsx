import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Register() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {}, []);

	const { email, password } = formData;

	const changeHandler = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const submitHandler = e => {
		e.preventDefault();

		const userData = {
			email,
			password
		};

		console.log(userData);
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Login user
				</h1>
			</section>
			<section className='form'>
				<form onSubmit={submitHandler}>
					<div className='form__form__control'>
						<label htmlFor='email'>Add your email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={changeHandler}
						/>
					</div>
					<div className='form__form__control'>
						<label htmlFor='password'>Add your password</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={changeHandler}
						/>
					</div>
					<div className='form__form__control'>
						<button className='btn'>Login User</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
