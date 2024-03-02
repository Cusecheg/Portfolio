import ButtonB  from    '../elements/ButtonB';
import styles from './Projects.module.css';
import Card from './Card';
import lpdnc from '../../Image/projects/lpdnc.svg';
import portfolio from '../../Image/projects/portfolio.svg';

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projects</h1>
            <Card
            img={lpdnc}
            site='https://benevolent-torrone-2e6dbd.netlify.app/'
            title='LP - DNC'
            tech={'HTML, CSS e JS'}
            description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnología'
            repo='https://github.com/Cusecheg/LandingPage1'
            />
            <Card
            img={portfolio}
            site='https://benevolent-torrone-2e6dbd.netlify.app/'
            title='LP - DNC'
            tech={'HTML, CSS e JS'}
            description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnología'
            repo='https://github.com/Cusecheg/LandingPage1'/>
            
            <ButtonB text='Ver repositorio completo' link='https://github.com/Cusecheg'/>
            
        </div>
    )
}
export default Projects;