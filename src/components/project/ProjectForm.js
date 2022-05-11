import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.scss';

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([]);

    //usamos o useEffect para evitar um looping de requests, fazendo uma unica requisiçao ao db
    useEffect(()=> {
    //request para api (promise)
    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))

    }, [])

    return (
        <form className={styles.FormContainer}>
            {/* <div>
            <input type="text" name="project_name" id="project_name" placeholder="Ins Project Name"/>
            </div> */}
            <Input type="text" text="Project Name" name="project_name" placeholder="Insert Project Name"/>
            {/* <div>
            <input type="number" name="project_budget" id="project_budget" placeholder="Insert the Project Budget" />
            </div> */}
            <Input type="number" text="Project Budget" name="project_budget" id="project_budget" placeholder="Insert the Project Budget" />
            {/* <div>
            <select name="category_id" id="category_id">
                <option value="select_category" disabled selected>Select Category</option>
            </select>
            </div> */}
            <Select name="category_id" text="Select Category" options={categories}/>
            {/* <div>
                <input type="submit" value="Create Porject" />
            </div> */}
            {/* esse componente de form pode ser reaproveitado, logo nao faz sentido passar o texto aqui,
                o ideal é desestruturar ele por props e passar no componente pai (ex: New Project/ Projetcs)
            */}
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;