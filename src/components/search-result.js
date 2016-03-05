import React from 'react';
import classNames from 'classnames'

const cardColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

function randomCardColor() {
  return cardColors[Math.floor(Math.random() * cardColors.length)];
}

class SearchResult extends React.Component {
  render() {
    const eventCards = this.props.events.map(event => {
      const artist = event.artists[0];
      const website = artist.website ? artist.website : artist.facebook_page_url;
      const venue = event.venue;
      
      const mapURL = `https://www.google.com/maps/place/${venue.name}/@${venue.latitude},${venue.longitude},15z`;

      // Disable the Buy Tickets button if they are unavailable.
      const buyTicketButtonClass = classNames(
        'ui bottom attached button',
        {'disabled': event.ticket_status === 'unavailable'}
      );

      // Randomize the color of our result cards.
      const cardColor = randomCardColor()
      const cardColorClass = `ui ${cardColor} card`;

      return (
        <div className={cardColorClass} key={event.id}>
          <a className="image" href={website}>
            <img src={artist.image_url} />
          </a>
          <div className="content">
            <div className="header">
              {artist.name} @ {venue.name}
            </div>
            <div className="meta">
              {event.formatted_location}
            </div>
            <div className="description">
              {event.formatted_datetime}
            </div>
          </div>
          <div className="extra content">
            <span>
              <a href={mapURL}><i className="map icon"></i>Map</a>
            </span>
            <span className="right floated">
              <a href={event.facebook_rsvp_url}><i className="facebook icon"></i>RSVP</a>
            </span>
          </div>
          <a className={buyTicketButtonClass} href={event.ticket_url}>
            <i className="ticket icon"></i>
            Buy Tickets
          </a>
        </div>
      );
    });

    return (
      <div className="row push-top">
          <div className="ui link cards centered">
            {eventCards}
          </div>
      </div>
    );
  }
};

export default SearchResult;
