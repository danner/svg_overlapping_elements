const svgElement = document.querySelectorAll('svg')[0];

svgElement.addEventListener('click', (event) =>
{
  const root = document.querySelectorAll('svg')[0];
  let rpos = root.createSVGRect();
  rpos.x = event.clientX;
  rpos.y = event.clientY;
  rpos.width = rpos.height = 1;
  const list = root.getIntersectionList(rpos, null);

  log(list);
});

const log = (elementList) => {
  const colors = [...elementList].map(item => item.id).join(" ");
  const logElement = document.querySelectorAll('pre')[0];
  logElement.insertAdjacentHTML('afterbegin', `<p>${colors}</p>`);
}