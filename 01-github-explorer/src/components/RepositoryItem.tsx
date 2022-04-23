import { Repository } from "./RepositoryList";

type RepositoryItemProps = {
  repository: Omit<Repository, 'id'>
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (        
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar respositório
      </a>
    </li>
  );
}