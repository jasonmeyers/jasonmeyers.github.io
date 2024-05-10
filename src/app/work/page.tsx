import Image from 'next/image';
import styles from '../../styles/work.module.css';
import { experience } from '../../data/content';
import WorkExample from '../../components/WorkExample';
import { ProductsList } from '../../components/ProductsList';
import Link from 'next/link';

const Work = (props) => {
  return (
    <>
      <div className={styles.main}>
        {experience.map(
          ({ company, logo, work, year, products, description, role, url }) => (
            <section key={company} className={styles.work}>
              <div className={styles.image}>
                <Link href={url} target="_blank" className={styles.link}>
                  <Image src={logo} alt={company} className={styles.file} />
                </Link>

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
                  {year && (
                    <div className={styles.year}>
                      {year}
                      {role && <span className={styles.role}>{role}</span>}
                    </div>
                  )}
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
