$(document).ready(function () {
  $('#btn').on('click', function () {
    if ($(window).width() > 992) {
      $('.sidebarMenu').toggleClass('active');  
    } else {
      $('.sidebarMenu').toggleClass("open");
    }
  });

  $('#btn2').on('click', function() {
    $('.sidebarMenu').removeClass('active');  
  })
  $('#menuBtn').on('click', function (e) {
    e.preventDefault();
    $('.sidebarMenu').toggleClass('open');
  });

  $('#closeBtn').on('click', function (e) {
    e.preventDefault();
    $('.sidebarMenu').removeClass('open');
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
          <p class="subText mt-1">${description}</p>
        </div>
      </div>
    `;
  return colHtml;
}

const $contentContainer = $('#contentContainer');

$contentContainer.append(createCol('assets/City-image.png', 'Alexandria', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Astana.png', 'Astana', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Calgary.png', 'Calgary', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Fairbanks.png', 'Fairblanks', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Jackson.png', 'Jackson', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Madison.png', 'Madison', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Monterrey.png', 'Monterrey', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Palo.png', 'Palo Alto', 'Best Hotel, Villa'));
$contentContainer.append(createCol('assets/Seville.png', 'Sevilla', 'Best Hotel, Villa'));