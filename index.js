function toggleOptions() {
    var optionsContent = document.querySelector('.moreoptions');
    var seeMoreBtn = document.getElementById('seemore');

    if (optionsContent.style.display === 'none') {
      optionsContent.style.display = 'block';
      seeMoreBtn.textContent = 'See Less';
      document.querySelector('.moreoptions').style.maxHeight = '200px'; // Adjust the height as needed
    } else {
      optionsContent.style.display = 'none';
      seeMoreBtn.textContent = 'See More';
      document.querySelector('.moreoptions').style.maxHeight = '50px'; // The initial height
    }
  }