import Image from "next/image";
import styles from "../../styles/work.module.css";
import { experience } from "../../data/content.js";

const Work = ({ name, image }) => {
  return (
    <>
      <Image src={image} width={200} height={200} alt={name} />
    </>
  );
};

const ProductsList = ({ products }) => {
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

const work = (props) => {
  return (
    <div className={styles.main}>
      {experience.map(
        ({ company, logo, work, year, products, description, role } = item) => (
          <section key={company} className={styles.work}>
            <div className={styles.image}>
              <Image src={logo} alt={company} className={styles.file} />
            </div>
            <h1 className={styles.header1}>{company}</h1>
            {products && (
              <>
                <ProductsList products={products}></ProductsList>
              </>
            )}
            <blockquote className={styles.blockquote}>{description}</blockquote>
            {/* {work &&
              work.map((item) => (
                <Work
                  key={item.name}
                  name={item.name}
                  image={item.image}
                ></Work>
              ))} */}
            <div className={styles.meta}>
              {year}
              <em>{role}</em>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default work;
