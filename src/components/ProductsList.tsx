import styles from '../styles/work.module.css';

export const ProductsList = ({ products }) => {
  return (
    <div className={styles.products}>
      <strong>Products: </strong>
      {products.map((product) => {
        return (
          <div className={styles.product} key={product}>
            {product}
          </div>
        );
      })}
    </div>
  );
};
