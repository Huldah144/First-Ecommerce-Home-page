import { useState} from 'react'
import '../../Assets/css/login.css'
import ButClose from './ButClose'

const Login = () => {
    const [name, setName] = useState('');

    const submitForm = (event) =>{
        event.preventDefault();
        
        console.log(name)

    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        // setInput(values => ({...values, [name]:value }))
    }
    return (
        <div className='container-log card'>
           
            <form className='log-form' action=""  onSubmit={submitForm}>
            <ButClose />
                <div className='log-div'>
                    <label className='log-control'>Username</label>
                    <input type="text" placeholder='username' className='log-input' />
                </div>
                <div className='log-div'>
                    <label className='log-control'>Email</label>
                    <input type="text" placeholder='Email' className='log-input' />
                </div>
                <div className='log-div'>
                    <label className='log-control'>Password</label>
                    <input type="text" placeholder='password' className='log-input' />
                </div>
                <button className='btn-submit'>Submit</button>
            </form>

        </div>
    )
}

export default Login
