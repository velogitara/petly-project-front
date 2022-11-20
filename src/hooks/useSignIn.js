import { useSignInMutation } from 'redux/authState';
import { toast } from 'react-toastify';

const useSignIn = async ({ email, password }) => {
  const [signIn] = useSignInMutation();

  try {
    await signIn({ email, password }).then(response => {
      if (response?.status !== 200) {
        toast.error(response.error.data.message);
      }
      toast.success('Successfuly logged in.');
    });
  } catch (error) {
    console.log(error);
  }
};

export { useSignIn };
