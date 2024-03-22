import { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'geovany@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
       const { name, value } = target; 
       setFormState({
          ...formState,
          [ name]: value
       });
    }

    useEffect( () => {
        console.log('useEffect called!');
    }, []);

  return (
    <div>
        <h1>Simple Form</h1>

        <hr />
        <input type="text"
        className='form-control mt-2'
        placeholder='username'
        name='username'
        value={ username } 
        onChange={ onInputChange }/>
        
        <input type="email"
        className='form-control mt-2'
        placeholder='geovany2815@gmail.com'
        name='email'
        value={email}
        onChange={ onInputChange }/>
    </div>
  )
}
