import React from "react"; 
import '../styles/accordion.scss';

const Accordion = ({id, title, description}) =>  { 

    return (
        <main className="accordion-wrapper" key={id}>
            <h4 className={`accordion-title accordion-title-${id}`} onClick={() => {
                // accordion expansion and closure
                const accordion = document.querySelector(`.accordion-title-${id}`);
                const content = accordion.nextElementSibling;
                if (content.style.maxHeight) { 
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }  
            }}>{title}</h4>
            <div className="accordion-body-wrapper">
                <p>{description.replaceAll('<br/>','')}</p>
            </div>
        </main>
    );
}

export default Accordion;
 