import React from 'react'
import { Button, Form ,Input} from 'antd'


const Register = () => {
  return (
    <div className='authentication'>
      <div className="authentication-form card p-3"> 
        <h1 className='card-title'> Nice to Meet you</h1>
        <Form layout='vertical'>
            <Form.Item label='Name' name='name'>
                    <Input placeholder='name'/>
            </Form.Item>
            <Form.Item label='Email' name='email'>
                    <Input placeholder='email'/>
            </Form.Item>
            <Form.Item label='Password' name='password'>
                    <Input placeholder='Password'/>
            </Form.Item>

            <Button className='primary-button mt-3'>Register</Button>
        </Form>
        </div>
    </div>
  )
}

export default Register
