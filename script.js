$(document).ready(function () {
  $('#btn').on('click', function () {
    $('.sidebarMenu').toggleClass('active');
  });
});


function createCol(imageSrc, title, description) {
  const colHtml = `
      <div class="col bg-light">
        <div class="image">
          <img src="${imageSrc}" alt="">
        </div>
        <div class="content">
          <p class="title">${title}</p>
          <p class="subText text-gray">${description}</p>
        </div>
      </div>
    `;
  return colHtml;
}

const $contentContainer = $('#contentContainer');

$contentContainer.append(createCol('assets/City-image.png', 'Alexandria', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Astana', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Calgary', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Fairblanks', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Jackson', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Madison', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Monterrey', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Palo Alto', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/City-image.png', 'Sevilla', 'Best Hotel, Villa'));