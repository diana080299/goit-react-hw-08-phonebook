import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { selectError } from 'store/auth/authSelector';

const Error = () => {
  const error = useSelector(selectError);
  return <>{Notify.error('Something went wrong', { error })}</>;
};

export default Error;
