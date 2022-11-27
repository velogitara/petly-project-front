import PropTypes from 'prop-types';
import StyledComponents from './OurFriendsCards.styled';
import noImage from '../../assets/images/No image-288.png';

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

const OurFriendsCards = ({ showWorkdays, friends }) => {
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <List>
      {friends.map((el, idx) => {
        const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = el;

        const isWorkDays = workDays && workDays.length > 0;

        return (
          <Card key={idx}>
            <Name>
              <NameLink href={url || '#'} target="_blank">
                {title}
              </NameLink>
            </Name>
            <BoxContent>
              {imageUrl ? (
                <CardPic src={imageUrl} alt={title + ' logo'} />
              ) : (
                <CardPic src={noImage} alt={title + ' logo'} />
              )}
              <div>
                <InfoBox onClick={showWorkdays}>
                  <InfoTitle>
                    Time: <br />
                    {isWorkDays
                      ? [workDays.find(day => day.isOpen === true)].map(time => {
                          return `${time.from}- ${time.to}`;
                        })
                      : '-----------------------------------'}
                  </InfoTitle>

                  {isWorkDays ? (
                    <WorkDaysList>
                      {workDays.map((item, index) => {
                        if (item.isOpen) {
                          return (
                            <WorkDaysItem key={index}>
                              {`${weekDays[index]}`}
                              <WorkDaysTime>{`${item.from}- ${item.to}`}</WorkDaysTime>
                            </WorkDaysItem>
                          );
                        }
                        return true;
                      })}
                    </WorkDaysList>
                  ) : (
                    false
                  )}
                </InfoBox>

                <InfoTitle>
                  Adress: <br />
                  {address ? (
                    <InfoAddress href={addressUrl || '#!'} target="_blank">
                      {address}
                    </InfoAddress>
                  ) : (
                    '-----------------------------------'
                  )}
                </InfoTitle>

                <InfoTitle>
                  Email: <br />
                  {email ? (
                    <InfoLinks href={'mailto:' + email} target="_blank">
                      {email}
                    </InfoLinks>
                  ) : (
                    '-----------------------------------'
                  )}
                </InfoTitle>

                <InfoTitle>
                  Phone: <br />
                  {phone ? (
                    <InfoLinks href={'tel:' + phone} target="_blank">
                      {phone}
                    </InfoLinks>
                  ) : (
                    '-----------------------------------'
                  )}
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
  friends: PropTypes.arrayOf(
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
