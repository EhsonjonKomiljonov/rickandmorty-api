import ErrorImg from '../../assets/images/404Error.svg';

export const ErrorPage = () => {
  return (
    <img
      src={ErrorImg}
      alt='Error!!!'
      width={700}
      height={550}
    />
  );
};
