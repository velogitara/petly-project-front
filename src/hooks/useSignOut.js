import { useSignOutMutation } from 'redux/authState';
import { toast } from 'react-toastify';

const useSignOut = async () => {
  const [signOut] = useSignOutMutation();

  try {
    await signOut().then(response => {
      if (response?.status !== 204) {
        toast.error(response?.body?.data?.message);
      }
      toast.success('Successfuly logged out.');
    });
  } catch (error) {
    console.log(error);
  }
};

export { useSignOut };
