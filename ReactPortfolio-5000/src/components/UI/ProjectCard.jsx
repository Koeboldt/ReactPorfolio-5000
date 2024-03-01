function ProjectCard(props) {
    return (
      <div>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div >{props.description}</div>
        <a href={props.link}><img src={props.image}/></a>
      </div>
    );
  }
  
  export default ProjectCard;