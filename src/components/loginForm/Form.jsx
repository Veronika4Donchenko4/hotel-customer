import { Button, Checkbox, Form, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase'
import styles from './form.module.css'

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = ({email,password}) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(()=>navigate( "/") )
            .catch((error) => console.error(error))
      console.log('Success:', email,password);
    };

    return (
        <div className= { styles.login }>
            <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
                width: '380px',
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        
            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        
            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
      );
}
 
