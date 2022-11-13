import Input from 'components/Input';
import Button from 'components/Button';

const HomePage = () => {
  return (
    <>
      <Input styled="inputAuth" placeholder="Email" margin="0 0 16px 0" />
      <Input styled="inputAuth" placeholder="Password" margin="0 0 16px 0" />
      <Button styled="formAuth on" title="Login" margin="0 0 16px 0" />
      <Button styled="formAuth back" title="Back" margin="0 0 16px 0" />
    </>
  );
};

export default HomePage;
