const gistUrl = 'https://gist.githubusercontent.com/Alyzbane/16a7911f0144714745e1bdd77d47b1a6/raw/startwallpaper'; 
// const corsProxy = `https://corsproxy.io/?url=${gistUrl}`;
fetch(gistUrl)
  .then(response => response.text())
  .then(text => {
    const imageLinks = text.split('\n').map(link => link.trim()).filter(link => link.length > 0);

    // Ensure there are enough image links (at least 12 for your 12 links)
    if (imageLinks.length < 12) {
      console.error('Not enough image links in Pastebin. Expected 12, got:', imageLinks.length);
      return;
    }

    // Dynamically set default background images for cards
    const cardCount = 4; // Number of cards
    for (let i = 0; i < cardCount; i++) {
      const cardIndex = i + 1; // Card IDs start at 1 (card-bg-1)
      const imageIndex = i * 3; // Step by 3: 0, 3, 6, 9
      const cardBgElement = document.getElementById(`card-bg-${cardIndex}`);
      if (cardBgElement) {
        cardBgElement.style.backgroundImage = `url('${imageLinks[imageIndex]}')`;
      } else {
        console.warn(`Card element card-bg-${cardIndex} not found`);
      }
    }

    // Link hover image change functionality (unchanged from your request)
    const links = document.querySelectorAll('.link-list a');
    links.forEach((link, index) => {
      link.setAttribute('data-image', imageLinks[index]);

      link.addEventListener('mouseenter', function () {
        const image = this.getAttribute('data-image');
        const cardBg = this.closest('.card').querySelector('.card-bg');
        if (!cardBg.getAttribute('data-default')) {
          cardBg.setAttribute('data-default', cardBg.style.backgroundImage);
        }
        cardBg.style.backgroundImage = `url('${image}')`;
        cardBg.style.opacity = '0.3';
      });

      link.addEventListener('mouseleave', function () {
        const cardBg = this.closest('.card').querySelector('.card-bg');
        const defaultBg = cardBg.getAttribute('data-default');
        if (defaultBg) {
          cardBg.style.backgroundImage = defaultBg;
        }
        cardBg.style.opacity = '0.15';
      });
    });
  })
  .catch(error => {
    console.error('Error fetching image links from Pastebin:', error);
  });