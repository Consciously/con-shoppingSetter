import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/UI/Spinner';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: ''
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

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

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

export default Login;
