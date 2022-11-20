const dateHandle = (date, action) => {
  switch (action) {
    case 'parse':
      return Date.parse(date);
    case 'stringify':
      return new Date(date).toISOString();
    default:
      return;
  }
};

export { dateHandle };
