import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/UI/Spinner';

function Register() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const { name, email, password, password2 } = formData;

	const changeHandler = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const submitHandler = e => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register new user
				</h1>
			</section>
			<section className='form'>
				<form onSubmit={submitHandler}>
					<div className='form__form__control'>
						<label htmlFor='name'>Add your name</label>
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={changeHandler}
						/>
					</div>
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
						<label htmlFor='password2'>Confirm your password</label>
						<input
							type='password'
							name='password2'
							id='password2'
							value={password2}
							onChange={changeHandler}
						/>
					</div>
					<div className='form__form__control'>
						<button className='btn'>New User</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
