interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}


//props, todas as propriedades dentro do props
//sendo possível acessar o que foi enviado do componente pai
export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      {/*repository? nullish coalescing operator, verify if is null */}
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}