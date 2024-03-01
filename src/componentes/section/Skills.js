import styles from './Skills.module.css'
import javascript from '../../Image/skills/js.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'


function Skills() {
    return (
        <div className={styles.skills} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt="erro" />
                <img src={html} alt="erro"  />
                <img src={css} alt="erro"  />
                <img src={react} alt="erro"  />
            </div>
        </div>
    )
}
export default Skills;