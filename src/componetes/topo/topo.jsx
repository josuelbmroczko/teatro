import React, { useEffect, useRef } from 'react';
import videoTeatro from '../../imagens/vidioTopo.mp4';
import { StyleTopoTeatro } from './topo';

export default function TopoTeatro() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play()
                .then(() => {
                    console.log('Vídeo reproduzindo automaticamente');
                })
                .catch(error => {
                    console.error('Erro ao reproduzir vídeo automaticamente:', error);
                });
        }
    }, []);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    };

    return (
        <StyleTopoTeatro id='home'>
            <video ref={videoRef} autoPlay playsInline loop muted>
                <source src={videoTeatro} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            <div className='opcoes'>
                <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToElement('home'); }}>INÍCIO</a></li>
                    <li><a href="#contatos" onClick={(e) => { e.preventDefault(); scrollToElement('contatos'); }}>CONTATOS</a></li>
                     <li><a href="#programacao" onClick={(e) => { e.preventDefault(); scrollToElement('programacao'); }}>PROGRAMAÇÃO</a></li>
                </ul>
            </div>

            <div className='textoBanner'>
                <h1>TEATRO MARAVILHAS</h1>
                <h2>"Onde a magia dos palcos ganha vida."</h2>            
            </div>
        </StyleTopoTeatro>
    );
}
