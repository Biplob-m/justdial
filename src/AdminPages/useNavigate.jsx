import { useHistory } from 'react-router-dom';

export function useNavigate() {
  const history = useHistory();

  const navigate = (route) => {
    history.push(route);
  };

  return navigate;
}