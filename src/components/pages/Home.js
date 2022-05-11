import styles from './Home.module.scss';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.HomeContainer}>
            <h1 className={styles.HomeContainer_title}>Welcome to <span className={styles.HomeContainer_span}>Costs</span></h1>
            <p className={styles.HomeContainer_text}>Start managing your projects right now</p>
            <LinkButton to="/newproject" text="Create Project" />
            <img className={styles.HomeContainer_img} src={savings} alt="" />
        </section>
    )
}

export default Home;