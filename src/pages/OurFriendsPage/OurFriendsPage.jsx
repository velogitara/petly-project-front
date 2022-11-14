import sponsors from './sponsors.json';

const OurFriendsPage = () => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <div>
      <h2>OurFriendsPage</h2>
      <ul>
        {sponsors.map((el, idx) => {
          const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;

          return (
            <li key={idx}>
              <h3>
                <a href={url || '#'}></a>
                {title}
              </h3>
              <img src={imageUrl} alt={title + ' logo'} />
              <p>TIME:</p>
              <div>
                <p>
                  {workDays
                    ? [workDays.find(day => day.isOpen === true)].map(time => {
                        return `${time.from} - ${time.to}`;
                      })
                    : '--------------------------------------'}
                </p>
                {workDays ? (
                  <ul>
                    {workDays.map((item, index) => {
                      if (item.isOpen) {
                        return (
                          <li key={index}>{`${weekDays[index]} ${item.from} - ${item.to}`}</li>
                        );
                      }
                    })}
                  </ul>
                ) : (
                  false
                )}
              </div>
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
