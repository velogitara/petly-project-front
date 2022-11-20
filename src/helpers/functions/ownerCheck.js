const ownerCheck = ({ userId, owner }) => {
  return userId === owner;
};

export { ownerCheck };
