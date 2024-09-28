import React from 'react';
import styles from './styles.module.css';
import Button from "../../components/Button";

const ProductCard = ({ title, description, imageUrl, button_1_linkTo, button_1_content, button_2_linkTo, button_2_content  }) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <Button linkTo={button_1_linkTo} content={button_1_content} />
      <br/>
      <Button linkTo={button_2_linkTo} content={button_2_content} />
    </div>
  );
};

export default ProductCard;