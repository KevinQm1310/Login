import React, { useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value){
        if(name == 'usuario'){
            setUser(value);
            setHasError(false);
        }else{
            if(value.lenght < 6){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value)
                setHasError(false);
            }
        }
    };

    function ifMatch(param){
        if(param.user > 0 && param.password > 0){
            if(param.user === 'Kevin' && param.password === '123456'){
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    };

    function handleSubmit(){
        let account = {user, password}
        if(account){
            ifMatch(account);
        }
    };

    return(
        <div className='login-container'>
            { isLogin ?
                <div className='home-container'>
                    <h1>¡Hola, {user}!</h1>
                    <label>Bienvenido a tu espacio en Consigue Ventas.</label>
                </div>
            :
            <div className='login-content'>
                <Title text='Bienvenido' />
                { hasError &&
                <label className = 'label-alert'>
                    Su contraseña y/o usuario son incorrectos 
                    o no están registrados.
                </label>
                }
                <Label text='Usuario' />
                <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                />
                <Label text='Contraseña' />
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                param={passwordError}
                />

                { passwordError &&
                    <label className='label-error'>
                        Contraseña inválida o incompleta
                    </label>
                }

                <div className='Submit-button-container'>
                    <button onClick={handleSubmit} className='submit-button-container'>
                        Inresar
                    </button>
                </div>
            </div>  
            }
        </div>
    )
};

export default Login;