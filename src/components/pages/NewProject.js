import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.scss';

function NewProject() {
    return (
        <div className={styles.NewprojectContainer}>
            <h1>Create Project</h1>
            <p>Create your Project and than add the services</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;