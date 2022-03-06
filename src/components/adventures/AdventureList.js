import Adventure from "./Adventure";
import cssClass from './AdventureList.module.css';

const AdventureList = ({ title, adventures, deleteHandler }) => {

    return (
        <section>
            <h1>{ title }</h1>
            <div className={cssClass.adventureList}>
                {adventures.map((adventure) => {
                   return <Adventure className="adventure-item" key={adventure.id} adventure={adventure} deleteHandler={deleteHandler}/>
                })}
            </div>
           
        </section>
    )
}

export default AdventureList
