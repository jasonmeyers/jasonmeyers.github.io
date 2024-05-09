import Image from 'next/image';
import styles from '../../styles/work.module.css';
import { experience } from '../../data/content';
import WorkExample from '../../components/WorkExample';
import { ProductsList } from '../../components/ProductsList';

const Work = (props) => {
  return (
    <>
      <div className={styles.main}>
        {experience.map(
          ({ company, logo, work, year, products, description, role }) => (
            <section key={company} className={styles.work}>
              <div className={styles.image}>
                <Image src={logo} alt={company} className={styles.file} />
                {work && (
                  <div className={styles.workcontainer}>
                    {work.map((item) => (
                      <WorkExample
                        key={item.imagedescription}
                        imagedescription={item.imagedescription}
                        workImage={item.image}
                      ></WorkExample>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.content}>
                <h1 className={styles.header1}>{company}</h1>
                {products && (
                  <>
                    <ProductsList products={products}></ProductsList>
                  </>
                )}
                <div className={styles.meta}>
                  {role && <div className={styles.role}>{role}</div>}
                  {year && <div className={styles.year}>{year}</div>}
                </div>
                <blockquote className={styles.blockquote}>
                  {description}
                </blockquote>
              </div>
            </section>
          )
        )}
      </div>
    </>
  );
};

export default Work;
