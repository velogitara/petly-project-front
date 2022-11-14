import sponsors from './sponsors.json';
import { Container } from 'helpers';
import StyledComponents from './OurFriendsPage.styled';
const { Card, Title, List, BoxContent, Name, WorkDaysList, InfoTitle } = StyledComponents;

const OurFriendsPage = () => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <Container>
      <Title>Our friend</Title>
      <List>
        {sponsors.map((el, idx) => {
          const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;

          return (
            <Card key={idx}>
              <Name>
                <a href={url || '#'}></a>
                {title}
              </Name>
              <BoxContent>
                <img src={imageUrl} alt={title + ' logo'} />
                <div>
                  <InfoTitle>Time:</InfoTitle>
                  <div>
                    <p>
                      {workDays
                        ? [workDays.find(day => day.isOpen === true)].map(time => {
                            return `${time.from} - ${time.to}`;
                          })
                        : '--------------------------------------'}
                    </p>
                    {workDays ? (
                      <WorkDaysList>
                        {workDays.map((item, index) => {
                          if (item.isOpen) {
                            return (
                              <li key={index}>{`${weekDays[index]} ${item.from} - ${item.to}`}</li>
                            );
                          }
                        })}
                      </WorkDaysList>
                    ) : (
                      false
                    )}
                  </div>
                  <InfoTitle>Adress:</InfoTitle>
                  <p>
                    <a href={addressUrl || '#'}>
                      {address || '--------------------------------------'}
                    </a>
                  </p>
                  <InfoTitle>Email:</InfoTitle>
                  <InfoTitle>
                    <a href={email ? 'mailto:' + email : '#'}>
                      {email || '--------------------------------------'}
                    </a>
                  </InfoTitle>
                  <InfoTitle>Phone:</InfoTitle>
                  <p>
                    <a href={phone ? 'tel:' + phone : '#'}>
                      {phone || '--------------------------------------'}
                    </a>
                  </p>
                </div>
              </BoxContent>
            </Card>
          );
        })}
      </List>
    </Container>
  );
};

export default OurFriendsPage;
