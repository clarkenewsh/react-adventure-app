import Adventure from "./Adventure";
import cssClass from './AdventureList.module.css';

const AdventureList = (props) => {

    // Catch props data 
    const adventures = props.adventures;
    const title = props.title;

    return (
        <section>
            <h1>{ title }</h1>
            <div className={cssClass.adventureList}>
                {adventures.map((adventure) => (
                    <Adventure className="adventure-item" key={adventure.id} adventure={adventure} />
                ))}
            </div>
           
        </section>
    )
}

export default AdventureList
