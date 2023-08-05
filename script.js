const pdfs = [
    {
      filename: 'Semester-1.pdf',
      name: 'Semester-1'
    },
    {
        filename: 'Semester-2.pdf',
        name: 'Semester-2'
      },
      {
        filename: 'Semester-3.pdf',
        name: 'Semester-3'
      },
      {
        filename: 'Semester-3.pdf',
        name: 'Semester-3'
      },
      {
        filename: 'Semester-4.pdf',
        name: 'Semester-4'
      },
      {
        filename: 'Semester-5.pdf',
        name: 'Semester-5'
      },
      {
        filename: 'Passport_size.jpg',
        name: 'Passport Size photo'
      },
    // Add more PDFs here as needed
  ];
  
  const passwordForm = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('passwordInput');
  const pdfContainer = document.getElementById('pdfContainer');
  const pdfViewer = document.getElementById('pdfViewer');
  const viewLargeBtn = document.getElementById('viewLargeBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const pdfSelect = document.getElementById('pdfSelect');
  
  let currentPDF = null;
  
  passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredPassword = passwordInput.value;
  
    for (const pdf of pdfs) {
      if (enteredPassword === 'Putonasmile5253$') {
        currentPDF = pdf;
        passwordForm.style.display = 'none';
        pdfContainer.style.display = 'block';
        initializePDFViewer();
        break;
      }
    }
  
    if (!currentPDF) {
      alert('Incorrect password. Please try again.');
      passwordInput.value = '';
    }
  });
  
  function initializePDFViewer() {
    // Create options for the dropdown
    for (const pdf of pdfs) {
      const option = document.createElement('option');
      option.text = pdf.name;
      pdfSelect.add(option);
    }
  
    // Set default selected option to the first PDF
    pdfSelect.selectedIndex = 0;
    viewPDF();
  
    // Event listener for dropdown change
    pdfSelect.addEventListener('change', function() {
      currentPDF = pdfs[pdfSelect.selectedIndex];
      viewPDF();
    });
  }
  
  function viewPDF() {
    pdfViewer.src = currentPDF.filename;
    pdfViewer.style.width = '100%';
    pdfViewer.style.height = '60vh';
  }
  
  viewLargeBtn.addEventListener('click', function() {
    pdfViewer.style.width = '100%';
    pdfViewer.style.height = '90vh';
  });
  
  downloadBtn.addEventListener('click', function() {
    if (currentPDF) {
      const a = document.createElement('a');
      a.href = currentPDF.filename;
      a.download = currentPDF.filename;
      a.click();
    }
  });
  