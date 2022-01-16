import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TitlePage from './../../components/TitlePage';

const clientes = [
    {
        id: 1,
        nome: 'Microsoft',
        responsavel: 'Alex',
        contato: '4647622165',
        situacao: 'Ativo'
    },
    {
        id: 2,
        nome: 'Google',
        responsavel: 'Jack',
        contato: '65456465',
        situacao: 'Cancelado'
    },
    {
        id: 3,
        nome: 'Face',
        responsavel: 'Roberta',
        contato: '1234124',
        situacao: 'Ativo'
    },
    {
        id: 4,
        nome: 'Linkedin',
        responsavel: 'Caio',
        contato: '865768',
        situacao: 'Em análise'
    },
    {
        id: 5,
        nome: 'Teste',
        responsavel: 'Não sei',
        contato: '464762345',
        situacao: 'Ativo'
    }
]

export default function ClienteLista() {

    const navigate = useNavigate();

    const [termoBusca, setTermoBusca] = useState('');

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);
    }

    const clientesFiltrados = clientes.filter((cliente) => {
        return  (
            //cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1
            Object
                .values(cliente)
                .join(' ')
                .toLocaleLowerCase()
                .includes(termoBusca.toLocaleLowerCase())
        );
    });

    const novoCliente = () => {
        navigate('/cliente/detalhe');
    }

    return (
        <>
            <TitlePage title='Cliente Lista'>
                <Button variant='outline-secondary' onClick={novoCliente} >
                    <i className='fas fa-plus me-2'></i>
                    Novo Cliente
                </Button>
            </TitlePage>
            <InputGroup className="mt-3 mb-3">
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl onChange={handleInputChange}
                    placeholder='Buscar por qualquer coluna'
                />
            </InputGroup>
            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Responsável</th>
                    <th scope="col">Contato</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button 
                                        className="btn btn-sm btn-outline-primary me-2"
                                        onClick={() => navigate(`/cliente/detalhe/${cliente.id}`)}
                                    >
                                        <i className='fas fa-user-edit me-2'></i>
                                        Editar
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger me-2">
                                        <i className='fas fa-user-times me-2'></i>
                                        Desativar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
