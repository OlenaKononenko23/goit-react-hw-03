import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';

export default function Contact({data:{name,number,id},onDelete}) {
    return (
        <>
             <div className={css.div}>
            <p className={css.p}><FaUser className={css.icon} />{name}</p>
            <p className={css.p}><FaPhone className={css.icon} />{number}</p>
            </div>
            <button  onClick={()=>onDelete(id)}>Delete</button>
        </>
       
    )
}