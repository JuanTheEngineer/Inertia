import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const account = { username, password, firstName, lastName }

        setIsLoading(true);

        fetch('http://localhost:8000/accounts', {
            method: 'POST',
            headers: {  "Content-type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            console.log('new account created');
            setIsLoading(false);
            history.push('/');
        })        
    }

    return ( 
        <div className="signup">
            <h2>Create account</h2>
            <form onSubmit={ handleSubmit }>
                <label></label>
                <input 
                    type="text"
                    required
                    value={ firstName }
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <label></label>
                <input 
                    type="text"
                    required
                    value={ lastName }
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <br/>
                <label></label>
                <input 
                    type="text"
                    required
                    value={ username }
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <label></label>
                <input 
                    type="password"
                    required
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <label></label>
                <input 
                    type="password"
                    required
                    value={ confirm }
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Confirm"
                />
                { !isLoading && <button>Create account</button> }
                { isLoading && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Signup;