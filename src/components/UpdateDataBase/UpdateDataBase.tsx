import React, {ChangeEvent, useState} from 'react';

export const UpdateDataBase = ()=>{
    const [password, setPassword] = useState('');

    const updatePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
    }


    const submitHandler = async ()=> {
        await fetch( 'asdasd')
    }

    return <form onSubmit={submitHandler}>
        <label>
            Write your password to update Movies Database:<br/>
            <input
                value={password}
                type="password" onChange={updatePassword}/>
        </label>
        <button>Get</button>
    </form>
}