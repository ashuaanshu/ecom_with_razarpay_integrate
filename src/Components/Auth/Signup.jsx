import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile]= useState("")
    const [age, setAge] =useState("")
    const [check, setCheckbox]= useState(false)
    

    return (
        <div className='min-h-screen bg-gray-300 flex justify-center '  style={{
            backgroundImage:"url('/abc.jpg')"
        }}>
            <div className='flex items-center'>
                <form action="" className='shadow-2xl p-8 border-2 opacity-50 hover:opacity-100 bg-amber-200'>
                    <h1 className='font-bold text-2xl text-center p-8'>Sign Up</h1>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Name:</label>
                        <input type='text'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='border-1 w-full mt-2' />
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Email:</label>
                        <input type='text'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        className='border-1 w-full mt-2'/>
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Age:</label>
                        <input type='number'
                        placeholder='Enter Age'
                        value={age}
                        onChange={(e)=>setAge(e.target.value)} 
                        className='border-1 w-full mt-2'/>
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Mobile:</label>
                        <input type='number'
                        placeholder='Enter Mobile number'
                        value={mobile}
                        onChange={(e)=>setMobile(e.target.value)}
                        className='border-1 w-full mt-2' />
                    </div >

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Password:</label>
                        <input type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='border-1 w-full mt-2' />
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Again Password:</label>
                        <input type='password'
                        placeholder='Enter Repeat Password'
                        value={repeatPassword}
                        onChange={(e)=>setRepeatPassword(e.target.value)} 
                        className='border-1 w-full mt-2'/>
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                         <input
                                type='checkbox'
                                value={check}
                                onChange={(e)=>setCheckbox(e.target.checked)}
                                required /> I am agree Term & Condition
                                <p className='text-blue-600 font-medium text-center mt-4'><Link to='/login'>Login</Link></p>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <button className=' w-full border-1 bg-blue-400 font-semibold text-xl active:scale-90 rounded text-white'>Signup</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup