import { Container} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [userName, setUserName] = useState('');

   
    const handleRegister = () => {

        if (userName.toLowerCase().includes('o')) {
            alert("Usuario inválido para registrarse, elija un nombre que no tenga la letra 'O'");
        }else if(userName === ''){
            alert("Por favor, ingrese un nombre de usuario");
        }else {
            alert("¡Usuario registrado correctamente!");
        }
        setUserName('');
    };

    const handleSetUserName = (e) => {
        const user = e.target.value;
        setUserName(user);
        if (user.includes('o') || user.includes('O')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    };


    return (

        <Container>
            
                <input
                    placeholder="Username"
                    aria-label="Username"
                    onChange={handleSetUserName}
                    value={userName}
                />
            <Button
                onClick={handleRegister}>Registrarse
            </Button>
            <p>Nombre de usuario ingresado: {userName}</p>
        </Container>



    )

}
export default Login