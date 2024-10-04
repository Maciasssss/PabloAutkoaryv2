const url = '/documents/Standardy.pdf'; // Path to your PDF file

// Asynchronously download the PDF
const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then((pdf) => {
  console.log('PDF loaded');

  const pdfContainer = document.getElementById('pdf-container'); // Get the container

  // Loop through all pages
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    pdf.getPage(pageNumber).then((page) => {
      console.log('Page loaded: ' + pageNumber);

      const scale = 1.5; // Scale of the PDF rendering
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

      // Append the canvas to the container
      pdfContainer.appendChild(canvas); // Append to the correct container
    });
  }
}, (reason) => {
  console.error(reason); // PDF loading error
});
