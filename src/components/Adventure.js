const Adventure = (props) => {

    // Catch props data and handleDelete function
    const adventure = props.adventure;

    // const [readMore, setReadMore] = (false);

    return (
        <div className="adventure-details">
            <h3>{ adventure.title }</h3>
            {/* <p>Description: { readMore ? adventure.description : `${adventure.description.subString(0, 10)}`}...
            <button> </button>
            </p> */}
            <p>&#127758;: { adventure.location }</p>
            <p>&#128197;: { adventure.date }</p>
            <p>Creator: {adventure.author}</p>
            {/* <img>{adventure.img}</img> */}
        </div>
    )
}

export default Adventure
