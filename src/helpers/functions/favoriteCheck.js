const favoriteCheck = ({ userId, favorite }) => {
  if (!userId) {
    return false;
  }
  return favorite.some(item => item === userId);
};

export { favoriteCheck };
