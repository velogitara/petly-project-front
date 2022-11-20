import { useSignOutMutation } from 'redux/authState';
import { toast } from 'react-toastify';

const useSignOut = async () => {
  const [signOut] = useSignOutMutation();

  try {
    await signOut().then(response => {
      if (response?.status !== 204) {
        toast.error(response.error.data.message);
      }
      toast.success('Successfully logged out.');
    });
  } catch (error) {
    console.log(error);
  }
};

export { useSignOut };
