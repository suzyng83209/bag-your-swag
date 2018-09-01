import React from 'react';
import Button from './button';

const Hero = () => (
  <div>
    <h1 style={{ color: '#d0021b' }}>bag your swag</h1>
    <p style={{ width: '33%' }}>
      Donate your swag to <b>{'<location>'}</b> from
      <b> October 23 - 25 </b>
      and change someone
      {"'"}s life.
    </p>
    <Button style={{ marginTop: '1.25rem' }}>Donate</Button>
  </div>
);

export default Hero;
