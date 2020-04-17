import React, {useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import heroesLogo from '../../assets/logo.svg'
import {FiPower,FiTrash2} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css'
export default function Profile(){
    const[incidents,setIncidents] = useState([]);

    const history = useHistory();
    const ongId  = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    useEffect(()=> {
        api.get('profile',{
            headers:{
                Authorization:ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
    },[ongId ]);

   async function handDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                  Authorization: ongId,
                }
              });
              setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar tente novamente')
        }
    }

async function handleLogout(){
    localStorage.clear();

    history.push('/');
}

    return (
        <div className="profile-container">
            <header>
                <img src={heroesLogo} alt="Be The Hero" />
                    <span>Bem vindo,{ongNome}</span>
                <Link className="button" to="/incidents/new">Cadastart nov caso</Link>
                <button  onClick={handleLogout}  type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>casos cadastrados</h1>
            <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASOS:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>
            <strong>Valor: </strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button onClick={()=>handDeleteIncident(incident.id)}  type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
        </div>
    );

}