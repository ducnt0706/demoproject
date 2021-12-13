import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const iconHeight = screenHeight * 0.7 * 0.4;

const CHALLENGE_DATA = [
  {
    id: 'fjejfew',
    title: 'Say no to sugar',
    point: 50,
    deadLine: 6,
  },
  {
    id: 'fm3jr8932t',
    title: '5km challenge',
    point: 50,
  },
  {
    id: 'afjq3jf',
    title: '100,000 steps challenge',
    point: 50,
  },
];

const ASSESSMENTS_DATA = [
  {
    id: 'fj3jt32',
    title: 'Advanced Health Screening',
    point: 1000,
  },
  {
    id: 'rt34klg34',
    title: 'Assessment your partners',
    point: 300,
  },
  {
    id: '238ur598ytwf',
    title: 'Survey your items',
    point: 3300,
  },
];

export {
  screenWidth,
  screenHeight,
  iconHeight,
  CHALLENGE_DATA,
  ASSESSMENTS_DATA,
};
