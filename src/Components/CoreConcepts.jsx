export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="React Core Concept" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
