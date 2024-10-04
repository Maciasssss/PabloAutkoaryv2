document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-section]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const section = this.getAttribute('data-section');

      const baseUrl = '../index.html'; 
      const sectionId = section === 'contact' ? '#contact' : '#oferta'; 
      window.location.href = `${baseUrl}${sectionId}`;
    });
  });
});


const url = '/documents/Standardy.pdf'; 
const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then((pdf) => {
  console.log('PDF loaded');

  const pdfContainer = document.getElementById('pdf-container'); 

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    pdf.getPage(pageNumber).then((page) => {
      console.log('Page loaded: ' + pageNumber);

      const scale = 1.5; 
      const viewport = page.getViewport({ scale: scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);

      pdfContainer.appendChild(canvas); 
    });
  }
}, (reason) => {
  console.error(reason); 
});
