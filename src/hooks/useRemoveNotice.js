import { useRemoveNoticeMutation } from 'redux/notices';
import { toast } from 'react-toastify';

const useRemoveNotice = async ({ noticeId }) => {
  const [removeNotice, { isSuccess }] = useRemoveNoticeMutation();

  try {
    await removeNotice({ noticeId }).then(response => {
      if (response?.status !== 201) {
        toast.error(response.error.data.message);
      }
      if (isSuccess) {
        toast.success(response?.body?.message);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { useRemoveNotice };
