import PropTypes from 'prop-types';
import StyledComponents from './OurFriendsCards.styled';

const {
  Card,
  List,
  BoxContent,
  Name,
  WorkDaysList,
  InfoTitle,
  InfoBox,
  InfoLinks,
  InfoAddress,
  CardPic,
  WorkDaysItem,
  WorkDaysTime,
  NameLink,
} = StyledComponents;

const OurFriendsCards = ({ showWorkdays, sponsors }) => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <List>
      {sponsors.map((el, idx) => {
        const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;

        return (
          <Card key={idx}>
            <Name>
              <NameLink href={url || '#'} target="_blank">
                {title}
              </NameLink>
            </Name>
            <BoxContent>
              {imageUrl ? <CardPic src={imageUrl} alt={title + ' logo'} /> : false}
              <div>
                <InfoBox onClick={showWorkdays}>
                  <InfoTitle>
                    Time: <br />
                    {workDays
                      ? [workDays.find(day => day.isOpen === true)].map(time => {
                          return `${time.from}- ${time.to}`;
                        })
                      : '-----------------------------------'}
                  </InfoTitle>
                  {workDays ? (
                    <WorkDaysList>
                      {workDays.map((item, index) => {
                        if (item.isOpen) {
                          return (
                            <WorkDaysItem key={index}>
                              {`${weekDays[index]}`}
                              <WorkDaysTime>{`${item.from}- ${item.to}`}</WorkDaysTime>
                            </WorkDaysItem>
                          );
                        } else return;
                      })}
                    </WorkDaysList>
                  ) : (
                    false
                  )}
                </InfoBox>
                <InfoTitle>
                  Adress: <br />
                  {address ? (
                    <InfoAddress href={addressUrl || '#'} target="_blank">
                      {address}
                    </InfoAddress>
                  ) : (
                    '-----------------------------------'
                  )}
                </InfoTitle>

                <InfoTitle>
                  Email: <br />
                  <InfoLinks href={email ? 'mailto:' + email : '#'} target="_blank">
                    {email || '-----------------------------------'}
                  </InfoLinks>
                </InfoTitle>

                <InfoTitle>
                  Phone: <br />
                  <InfoLinks href={phone ? 'tel:' + phone : '#'} target="_blank">
                    {phone || '-----------------------------------'}
                  </InfoLinks>
                </InfoTitle>
              </div>
            </BoxContent>
          </Card>
        );
      })}
    </List>
  );
};

OurFriendsCards.propTypes = {
  showWorkdays: PropTypes.func.isRequired,
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      addressUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      workDays: PropTypes.arrayOf(
        PropTypes.shape({
          isOpen: PropTypes.bool,
          from: PropTypes.string,
          to: PropTypes.string,
        })
      ),
      phone: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};

export default OurFriendsCards;
