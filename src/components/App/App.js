import React from 'react';
import './App.css';
import { useRedux } from 'utils/async.utils';
import { UserType } from 'store/duck/userForm';
import { getMe } from 'services/app.service';

function App() {
    const [form, handleChange] = useRedux(init, 'userForm', UserType)

    function init() {
        return getMe
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nome'>Nome</label>
                <input id='nome' name="nome" value={form.data.nome} onChange={handleChange} />
                <label htmlFor='sobrenome'>sobrenome</label>
                <input id='sobrenome' name="sobrenome" value={form.data.sobrenome} onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default App;
