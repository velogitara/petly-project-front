import { useSignUpMutation } from 'redux/authState';
import { toast } from 'react-toastify';

const useSignUp = async ({ name, email, password, phone }) => {
  const [signUp] = useSignUpMutation();

  try {
    await signUp({ name, email, password, phone }).then(response => {
      if (response?.status !== 201) {
        toast.error(response.error.data.message);
      }
      toast.success('Successfully registered.');
    });
  } catch (error) {
    console.log(error);
  }
};

export { useSignUp };
