import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [messageApi, contextHolder] = message.useMessage();
	const info = () => {
		messageApi.open({
			type: 'error',
			content: 'Password or mail does not exist'
		});
	};
	const { signIn } = UserAuth();
	const navigate = useNavigate();
	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			navigate('/account');
		} catch (e) {
			info();
			setError(e.message);
			console.log(error);
		}
	};
	const onFinish = values => {
		console.log('Success');
	};
	return (
		<div className='background'>
			{contextHolder}

			<div className='main-wrapper'>
				<Form
					onSubmitCapture={handleSubmit}
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[
							{
								required: true,
								message: 'Please enter your Username!'
							}
						]}
					>
						<Input
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Username'
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Please enter your Password!'
							}
						]}
					>
						<Input
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button '
						>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
