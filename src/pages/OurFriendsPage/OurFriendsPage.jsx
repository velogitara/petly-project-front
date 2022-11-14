import sponsors from './sponsors.json';
import { Container } from 'helpers';
import StyledComponents from './OurFriendsPage.styled';
const {
  Card,
  Title,
  List,
  BoxContent,
  Name,
  WorkDaysList,
  InfoTitle,
  InfoBox,
  InfoLinks,
  InfoAddress,
  CardPic,
} = StyledComponents;

const OurFriendsPage = () => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const showWorkDays = e => {
    console.log(e.target);
  };

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
                {imageUrl ? <CardPic src={imageUrl} alt={title + ' logo'} /> : false}
                <div>
                  <InfoBox onClick={showWorkDays}>
                    <InfoTitle>
                      Time: <br />
                      {workDays
                        ? [workDays.find(day => day.isOpen === true)].map(time => {
                            return `${time.from} - ${time.to}`;
                          })
                        : '--------------------------------------'}
                    </InfoTitle>
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
                  </InfoBox>
                  <InfoTitle>
                    Adress: <br />
                    {address ? (
                      <InfoAddress href={addressUrl || '#'}>{address}</InfoAddress>
                    ) : (
                      '--------------------------------------'
                    )}
                  </InfoTitle>

                  <InfoTitle>
                    Email: <br />
                    <InfoLinks href={email ? 'mailto:' + email : '#'}>
                      {email || '--------------------------------------'}
                    </InfoLinks>
                  </InfoTitle>

                  <InfoTitle>
                    Phone: <br />
                    <InfoLinks href={phone ? 'tel:' + phone : '#'}>
                      {phone || '--------------------------------------'}
                    </InfoLinks>
                  </InfoTitle>
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
