import React, { useState } from 'react';
import './NossaEquipe.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const eventosTeatro = [
  {
    id: '00',
    nome: 'A Noite das Estrelas',
    img: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3615771-palco-dramatico-vermelho-antiquado-elegante-teatro-foto.jpg',
    descricao: 'Um espetáculo brilhante com performances teatrais inesquecíveis.',
    insta: 'https://www.instagram.com/anoitedasestrelas',
  },
  {
    id: '01',
    nome: 'Comédia em Cena',
    img: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3615771-palco-dramatico-vermelho-antiquado-elegante-teatro-foto.jpg',
    descricao: 'Uma noite de comédia com os melhores atores da cidade.',
    insta: 'https://www.instagram.com/comediasemcena',
  },
  {
    id: '02',
    nome: 'Música e Magia',
    img: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3615771-palco-dramatico-vermelho-antiquado-elegante-teatro-foto.jpg',
    descricao: 'Show musical com apresentações mágicas para todas as idades.',
    insta: 'https://www.instagram.com/musicaemagia',
  },
  {
    id: '03',
    nome: 'Dança das Sombras',
    img: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3615771-palco-dramatico-vermelho-antiquado-elegante-teatro-foto.jpg',
    descricao: 'Um espetáculo de dança contemporânea cheio de emoção e mistério.',
    insta: 'https://www.instagram.com/dancadassombras',
  },
];

const NossaEquipe = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (evento) => {
    setModalData(evento);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div  className="nossa-equipe">
      <h1 className="titulo-secao">Shows e Eventos</h1>
      <p className="descricao-secao">
        Confira os próximos espetáculos e eventos que acontecerão em nosso teatro.
      </p>
      <div className="perfis-de-colaboradores" id="programacao">
        {eventosTeatro.map((evento) => (
          <div key={evento.id} className="perfil" onClick={() => openModal(evento)}>
            <img src={evento.img} alt={evento.nome} className="imagem-colaborador" />
            <h3>{evento.nome}</h3>
            <p>{evento.descricao}</p>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <img src={modalData.img} alt={modalData.nome} className="modal-img" />
              <div className="modal-info">
                <h2>{modalData.nome}</h2>
                <p>{modalData.descricao}</p>
                <div className="modalIco">
                  {modalData.insta && (
                    <a href={modalData.insta} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {modalData.youtube && (
                    <a href={modalData.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NossaEquipe;
