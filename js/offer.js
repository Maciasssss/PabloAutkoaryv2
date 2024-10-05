  // Function to move features list items right after the last offer list item for small screens
  function mergeListsForMobile() {
    const offerList = document.querySelector('.offer-list');
    const featuresList = document.querySelector('.features-list');
    
    if (window.innerWidth <= 480 && featuresList && offerList) {
      const offerItems = offerList.querySelectorAll('li');
      const lastOfferItem = offerItems[offerItems.length - 2]; 

      const featuresItems = featuresList.querySelectorAll('li');
      featuresItems.forEach(item => {
        lastOfferItem.insertAdjacentElement('afterend', item.cloneNode(true)); 
      });
    }
  }

  window.addEventListener('load', mergeListsForMobile);
  window.addEventListener('resize', mergeListsForMobile);
