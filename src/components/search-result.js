import React from 'react';

class SearchResult extends React.Component {
  render() {
    const eventCards = this.props.events.map(event => {
      const artist = event.artists[0];
      const website = artist.website ? artist.website : artist.facebook_page_url;
      const mapURL = `https://www.google.com/maps/place/${event.venue.name}/@${event.venue.latitude},${event.venue.longitude},15z`;

      return (
        <div className="ui blue card" key={event.id}>
          <a className="image" href={website}>
            <img src={event.artists[0].image_url} />
          </a>
          <div className="content">
            <div className="header">
              {event.artists[0].name} @ {event.venue.name}
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
              Tickets {event.ticket_status}
            </span>
          </div>
          <a className="ui bottom attached button" href={event.ticket_url}>
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
