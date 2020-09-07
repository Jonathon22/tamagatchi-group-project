import getData from './components/data';
import createQuad from './components/createQuad';
import '../styles/main.scss';

const init = () => {
  getData.getData().forEach((Quad) => {
    createQuad.buildQuad(Quad.title);
  });
};

init();
