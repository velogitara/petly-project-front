import sponsors from './sponsors.json';
import { Container } from 'helpers';
import OurFriendsStyledComponents from './OurFriendsPage.styled';
const { OurFriendsCard, OurFriendsTitle, OurFriendsList, OurFriendsBoxContent, OurFriendsName } =
  OurFriendsStyledComponents;

const OurFriendsPage = () => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <Container>
      <OurFriendsTitle>Our friend</OurFriendsTitle>
      <OurFriendsList>
        {sponsors.map((el, idx) => {
          const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;

          return (
            <OurFriendsCard key={idx}>
              <OurFriendsName>
                <a href={url || '#'}></a>
                {title}
              </OurFriendsName>
              <OurFriendsBoxContent>
                <img src={imageUrl} alt={title + ' logo'} />
                <div>
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
                </div>
              </OurFriendsBoxContent>
            </OurFriendsCard>
          );
        })}
      </OurFriendsList>
    </Container>
  );
};

export default OurFriendsPage;
