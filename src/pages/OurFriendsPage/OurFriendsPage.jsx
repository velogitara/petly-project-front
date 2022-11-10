import sponsors from './sponsors.json';
const OurFriendsPage = () => {
  return (
    <div>
      <h2>OurFriendsPage</h2>
      <ul>
        {sponsors.map(el => {
          const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;
          return (
            <li>
              <h3>
                <a href={url}></a>
                {title}
              </h3>
              <img src={imageUrl} alt={title + ' logo'} />
              <p>TIME: </p>
              <p>
                Adress:
                <a href={addressUrl || '#'}>
                  {address || '--------------------------------------'}
                </a>
              </p>
              <p>
                Email:
                <a href={'mailto:' + (email || '--------------------------------------')}>
                  {email || '--------------------------------------'}
                </a>
              </p>
              <p>Phone:</p>
              <p>
                <a href={'tel:' + (phone || '--------------------------------------')}>
                  {phone || '--------------------------------------'}
                </a>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurFriendsPage;
