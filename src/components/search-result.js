import React from 'react';

class SearchResult extends React.Component {
  render() {
    const eventCards = this.props.events.map(event => {
      return (
        <div className="ui card" key={event.id}>
          <div className="image">
            <img src={event.artists[0].image_url} />
          </div>
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
          <a className="ui bottom attached button" href={event.ticket_url}>
            <i className="ticket icon"></i>
            Buy Tickets
          </a>
        </div>
      );
    });

    return (
      <div className="centered row">
          <div className="ui link cards centered">
            {eventCards}
          </div>
      </div>
    );
  }
};

export default SearchResult;
