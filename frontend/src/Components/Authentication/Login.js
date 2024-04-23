import './Login.css'
const Login=()=>{
    return(
        <div>
            <form>
                <label htmlFor="email">Email Address*</label><br/>
                <input name="email" id="email" type="email" placeholder="Enter your email address" required></input>

                <br/>

                <label htmlFor="password">Password*</label><br/>
                <input name="password" id="password" type="password" placeholder="Enter password"  required></input>
                <br/>
                <input type="submit" value="Login" className='Submit' onClick={(e)=>{e.preventDefault()}}></input>
            </form>
            <button className='guest' value="">Get Guest User credentials</button>
            <br/>

        </div>
    )
}
export default Login