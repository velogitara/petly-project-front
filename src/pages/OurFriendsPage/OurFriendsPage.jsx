import sponsors from './sponsors.json';

const OurFriendsPage = () => {
  return (
    <div>
      <h2>OurFriendsPage</h2>
      <ul>
        {sponsors.map(el => {
          const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;
          console.log(workDays ? workDays : '--------------------------------------');
          return (
            <li>
              <h3>
                <a href={url}></a>
                {title}
              </h3>
              <img src={imageUrl} alt={title + ' logo'} />
              <p>TIME:</p>
              <ul>
                {workDays
                  ? workDays.map(day => {
                      if (day.isOpen) {
                        return <li>{`${day.from}-${day.to}`}</li>;
                      }
                    })
                  : '--------------------------------------'}
              </ul>
              <p>Adress:</p>
              <p>
                <a href={addressUrl || '#'}>
                  {address || '--------------------------------------'}
                </a>
              </p>
              <p>Email:</p>
              <p>
                <a href={email ? 'mailto:' + email : '#'}>
                  {email || '--------------------------------------'}
                </a>
              </p>
              <p>Phone:</p>
              <p>
                <a href={phone ? 'tel:' + phone : '#'}>
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
