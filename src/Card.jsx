import thumbnail from './assets/project-icon.png'
import archetype from './assets/archetype-chronicles-thumbnail.png'


function Card(props) {
    return(
        <div className="card">
            <img className="card-image" src={props.img} alt="profile picture"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
        </div> 
    );
}

export default Card;

// import thumbnail from './assets/project-icon.png'
// import archetype from './assets/archetype-chronicles-thumbnail.png'


// function Card(props) {
//     return(
//         <div className="card">
//             <img className="card-image" src={thumbnail} alt="profile picture"></img>
//             <h2 className="card-title">{props.title}</h2>
//             <p className="card-text">{props.description}</p>
//         </div> 
//     );
// }

// export default Card;