import styles from './Card.module.css';
import ButtonB from '../elements/ButtonB';
import { useState } from 'react';

function Card({img, title,tech, description,repo,site}){
   const [info, setInfo] = useState(false);

   function InfoOn(){
    setInfo(true);
   }

   function InfoOff(){
    setInfo(false);
   }
   
   
    return(
        <div className={styles.card} onMouseLeave={InfoOff}>
            <a onMouseEnter={InfoOn} href={site}>
            <img src={img}/>
            </a>

            {info === true &&

            <section>
              <h3>{title}</h3>
              <p><strong>Tecnología: </strong>{tech}</p>
              <p>{description}</p>
              <ButtonB text='Acesse ao repositório' link={repo}/>
            </section>

            }

     
        </div>
    )
}
export default Card;