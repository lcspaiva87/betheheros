import React,{ useState } from 'react';
import { Link,useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import api from '../../services/api';
import heroesLogo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
  async function handleLogin(e){
        e.preventDefault();
        try {
            const respose = await api.post('sessions',{ id });
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongNome',respose.data.nome); 

            history.push('/profile');
        } catch (err) {
            alert('Falaha no Login tente novamente!')
        }
    }
    return ( 
         
        <div className="logon-container">
            <section className="form">
            <img src={heroesLogo} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID"
                value={id}
                onChange={e =>setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
                
                <Link className="back-link" to="/register">
                    <FiLogIn size={16}  color="#E02041" />
                    Não tenho Cadastro
                </Link>
            </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}