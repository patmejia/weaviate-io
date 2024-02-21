import React, { useState } from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';
import ModalComponent from './modalpopup';

export default function Card(props) {
  const { details } = props;
  const typeClass = details.type.toLowerCase();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={`${styles.knowledgeCard} ${styles[typeClass] || ''}`}>
        <span className={styles.cardType}>{details.type}</span>

        <h3>{details.title}</h3>
        {details.photo && (
          <img src={'/img/site/' + details.photo} alt={details.title} />
        )}
        <span className={styles.cardText}>{details.text}</span>
        <br></br>

        <Link onClick={openModal} className={styles.cardLink}>
          Read more
        </Link>
        <div className={styles.bottomCard}>
          {details.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {isModalOpen && <ModalComponent details={details} onClose={closeModal} />}
    </>
  );
}