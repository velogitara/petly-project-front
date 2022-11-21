import { useUpdateUserInfoMutation } from 'redux/user';
import { toast } from 'react-toastify';

const useUpdateUserInfo = async ({ file = null, data }) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  try {
    await updateUserInfo({ file, data }).then(response => {
      if (response?.status !== 200) {
        toast.error(response.error.data.message);
      }
      toast.success('Successfuly registered.');
    });
  } catch (error) {
    console.log(error);
  }
};

export { useUpdateUserInfo };
