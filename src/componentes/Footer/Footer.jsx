import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Descrição da Empresa */}
        <div className="section">
          <h3 className="title">Sobre Nós</h3>
          <p className="description">
            O restaurante Bucho Cheio é referência em culinária regional,
            oferecendo pratos tradicionais, frescos e sabores únicos. Desde
            2010, unimos qualidade, tradição e atendimento de excelência para
            satisfazer e encantar nossos clientes, proporcionando uma
            experiência gastronômica inesquecível.
          </p>
        </div>

        {/* Endereço */}
        <div className="section">
          <h3 className="title">Endereço</h3>
          <p className="text">Rua Sabores, 456</p>
          <p className="text">Bairro Delícia, Recife - PE</p>
          <p className="text">CEP: 54321-000</p>
        </div>

        {/* Contatos */}
        <div className="section">
          <h3 className="title">Contatos</h3>
          <p className="text">Telefone: (81) 9876-5432</p>
          <p className="text">WhatsApp: (81) 91234-5678</p>
          <p className="text">Email: contato@buchocheio.com.br</p>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="social">
        <p className="text">
          <a
            href="https://www.facebook.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Facebook
          </a>{' '}
          |{' '}
          <a
            href="https://www.instagram.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Instagram
          </a>{' '}
          |{' '}
          <a
            href="https://www.twitter.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Twitter
          </a>
        </p>
      </div>

      {/* Direitos Autorais */}
      <div className="copyright">
        <p className="text">
          &copy; 2024 Restaurante Bucho Cheio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
