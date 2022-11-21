const parseBirthday = birthday => {
  const [year, month, day] = birthday.slice(0, 10).split('-');
  return `${day}.${month}.${year}`;
};

export { parseBirthday };
