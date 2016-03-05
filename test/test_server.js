import request from 'supertest';
import {expect} from 'chai';

import server from '../src/server';

describe('Server', () => {
  it('responds to /', () => {
    request(server)
      .get('/')
      .expect(200)
  });

  it('responds to /events/:artist', () => {
    request(server)
      .get('/events/radiohead')
      .expect('Content-Type', '/json/')
      .expect(200)
  });

  it('responds with 404 to everything else', () => {
    request(server)
      .get('/invalid')
      .expect(404)
  });
});
