const tamaData = [
  {
    title: 'Eat',
    privateVariable: 'Full',
    button1: 'Unhealthy',
    button2: 'Healthy',
    button1Val: -10,
    button2Val: 10,
    defaultScore: 100,
  },
  {
    title: 'Play',
    privateVariable: 'Fun',
    button1: 'super-fun',
    button2: 'slightly-fun',
    button1Val: 50,
    button2Val: 2,
    defaultScore: 50,
  },
  {
    title: 'Fight',
    privateVariable: 'strength',
    button1: 'run-away',
    button2: 'commit-violence',
    button1Val: 1,
    button2Val: -10,
    defaultScore: 100
  },
  {
    title: 'Sleep',
    privateVariable: 'energy',
    button1: 'nap',
    button2: 'deep-slumber',
    button1Val: 50,
    button2Val: 60,
    defaultScore: 100,
  }
];
const getData = () => tamaData;

export default { getData };
