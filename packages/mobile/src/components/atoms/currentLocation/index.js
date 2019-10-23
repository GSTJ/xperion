import React from 'react';
import Pulse from 'react-native-pulse';
import {COMPLAINT} from 'theme';
import {Area, Center} from './styles';

export default function CurrentLocation() {
  return (
    <Area>
      <Pulse
        color={COMPLAINT}
        numPulses={3}
        diameter={50}
        speed={60}
        duration={100}
      />
      <Center />
    </Area>
  );
}
