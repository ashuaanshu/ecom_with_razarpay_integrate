import React, { useState } from 'react'

const SignupLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [signup, setSignup] = useState(false)
    const [agree, setAgree] = useState(false)

    const toggleHandle = () => {
        setSignup(!signup)
        setEmail("")
        setPassword("")
        setRepeatPassword("")
    }

    const subHandel = (e) => {
        e.preventDefault()

        if(signup && password !== repeatPassword){
            alert("Password not Match")
            return
        }

        if(signup){
            alert("signup Successfull")
            setSignup(false)
        }

        else{
            alert("login successfull")
        }
    }
    return (
        <div className='min-h-screen bg-gray-300 flex justify-center '  style={{
            backgroundImage:"url('/abc.jpg')"
        }}>
            <div className=' flex items-center'>
                <form onSubmit={subHandel} className='shadow-2xl p-8 border-2 opacity-50 hover:opacity-100 bg-amber-200'>
                    <h1 className='font-bold text-2xl text-center p-8'>{signup ? "SignUp" : "Login"}</h1>
                    <div className='pb-4 font-semibold text-lg'>
                        
                        <label >Email</label>
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-1 w-full mt-2'
                            required
                        />
                    </div>

                    <div className='pb-4 font-semibold text-lg'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-1 w-full mt-2'
                            required
                        />
                    </div>
                    {signup ? (
                        <div className='pb-4 font-semibold text-lg'>
                            <label>Repeat Password</label>
                            <input
                                type='password'
                                placeholder='Repeat Password'
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                className='border-1 w-full mt-2'
                                required
                            />
                        </div>) : <></>}

                        {signup ? (<p>
                            <input
                                type='checkbox'
                                value={agree}
                                onChange={(e)=>setAgree(e.target.checked)}
                                required /> I am agree Term & Condition
                        </p>):(<></>)}

                    <div className='flex justify-center p-4'>
                        <button className=' w-full border-1 bg-blue-400 font-semibold text-xl active:scale-90'>{signup ? "SignUp" : "Login"}</button>
                    </div>
                    
                    {signup ?
                        (<span>Already Have Account: <button className='text-blue-500 font-bold cursor-pointer active:scale-90'
                            onClick={toggleHandle}>{signup ? "Login" : "Signup"}</button></span>)
                        :
                        (<p>Don't have Account: <span className='text-blue-500 font-bold '>
                            <button className='cursor-pointer active:scale-90'
                                onClick={toggleHandle}>{signup ? "Login" : "Signup"}</button></span>
                        </p>)
                    }
                </form>
            </div>
        </div>
    )
}

export default SignupLogin