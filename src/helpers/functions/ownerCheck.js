const ownerCheck = ({ userId, noticeOwner }) => {
  return userId === noticeOwner;
};

export { ownerCheck };
