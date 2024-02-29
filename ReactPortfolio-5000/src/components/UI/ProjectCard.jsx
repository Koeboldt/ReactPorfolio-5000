function ProjectCard(props) {
    return (
      <div>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div >{props.description}</div>
        <button href={props.link}> {props.name} </button>
      </div>
    );
  }
  
  export default ProjectCard;