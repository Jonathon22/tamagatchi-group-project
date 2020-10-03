import tamData from '../data/data';

const makeQuad = () => {
  tamData.getData().forEach((item) => {
    $(`${item.id}`).html(`
    <div id="main-div">
    <div>
    <h1>${item.title}</h1>
    </div>
    <div id="total${item.id}">
    <h2 id="score">${item.health}</h2>
    </div>
    <div class="button-group">
    <div>${item.defaultScore}</div>
    <button id="${item.title}button1">${item.button1}</button>
    <button id="${item.title}button2">${item.button2}</button>
    <div>${item.button1}</div>
    </div>
    <div>
    </div>
    </div>
    `);
  });
};

export default { makeQuad };
