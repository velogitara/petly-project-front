import { constants } from 'constants/constants';

const {
  categories: { publicCategories },
} = constants;

const categoryTitleHandler = category => {
  return publicCategories.find(([item]) => item === category)[1] ?? '';
};

export { categoryTitleHandler };
