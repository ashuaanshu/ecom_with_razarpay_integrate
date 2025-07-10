import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='min-h-screen bg-gray-300 flex justify-center '  style={{
            backgroundImage:"url('/abc.jpg')"
        }}>
            <div className='flex items-center'>
                <form action="" className='shadow-2xl p-8 border-2 opacity-50 hover:opacity-100 bg-amber-200'>
                    <h1 className='font-bold text-2xl text-center p-8'>Login</h1>
                    <div className='pb-4 font-semibold text-lg'>
                        <label>Email:</label>
                        <input type='text'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='border-1 w-full mt-2' />
                    </div>
                    
                    <div className='pb-4 font-semibold text-lg'>
                        <label>Password:</label>
                        <input type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='border-1 w-full mt-2' />
                        <p className='text-blue-600 font-medium text-center mt-4'><Link to='/signup'> Sign up</Link></p>
                    </div>
                    <div className='flex justify-center p-2'>
                        <button className=' w-full border-1 bg-blue-400 font-semibold text-xl active:scale-90 rounded text-white'>Login</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login