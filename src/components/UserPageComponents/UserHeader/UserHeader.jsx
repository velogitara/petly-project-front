import { Header } from './UserHeader.styled';

const UserHeader = ({ text, className = '' }) => {
  return <Header className={className}>{text}</Header>;
};

export default UserHeader;
