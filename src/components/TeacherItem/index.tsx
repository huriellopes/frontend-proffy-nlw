import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/19577851?s=460&u=277be47e587550ad379130f9e2bb59ab2866572e&v=4"
          alt="Huriel Lopes"
        />
        <div>
          <strong>Huriel Lopes</strong>
          <span>Desenvolvimento Web</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        doloremque similique distinctio voluptate veniam laboriosam perferendis
        numquam, laborum beatae molestiae nulla quae accusamus facere minima
        soluta quas perspiciatis itaque quidem!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
