
  let isMerged = false;

  function mergeListsForMobile() {
    const offerList = document.querySelector('.offer-list');
    const featuresList = document.querySelector('.features-list');

    if (window.innerWidth <= 480 && featuresList && offerList && !isMerged) {
      const offerItems = offerList.querySelectorAll('li');
      const secondToLastOfferItem = offerItems[offerItems.length - 2];

      const featuresItems = featuresList.querySelectorAll('li');
      featuresItems.forEach(item => {
        secondToLastOfferItem.insertAdjacentElement('afterend', item.cloneNode(true)); 
      });

      isMerged = true;
    }
  }

  window.addEventListener('load', mergeListsForMobile);
  window.addEventListener('resize', mergeListsForMobile);

