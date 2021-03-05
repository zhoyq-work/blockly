var app = new THING.App({
  el: 'thingDiv',
  url: 'https://www.thingjs.com/static/models/storehouse',
  complete: () => {
    const thingDiv = document.getElementById('thingDiv');
    thingDiv.style.top = '35px';
    thingDiv.style.right = '0px';
    thingDiv.style.left = 'auto';
    thingDiv.style.position = 'absolute';
  }
});