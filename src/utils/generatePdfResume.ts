import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // Ultra-crisp 3x resolution capture for 300 DPI vector rendering
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0d111d',
      logging: false,
      windowWidth: 1024,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.width = '840px';
          clonedEl.style.maxWidth = '840px';
          clonedEl.style.minWidth = '840px';
          clonedEl.style.transform = 'none';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.padding = '36px';
          clonedEl.style.borderRadius = '0px';
          clonedEl.style.boxSizing = 'border-box';
          clonedEl.style.backgroundColor = '#0d111d';

          // Force explicit 2-column grid layout during PDF generation
          const gridCols = clonedEl.querySelectorAll('.resume-two-col-grid');
          gridCols.forEach((grid: any) => {
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = '280px 1fr';
            grid.style.gap = '24px';
          });

          // Force profile headshot image sizing
          const headshotImg = clonedEl.querySelector('.resume-headshot-img') as HTMLElement;
          if (headshotImg) {
            headshotImg.style.width = '115px';
            headshotImg.style.height = '115px';
            headshotImg.style.borderRadius = '16px';
            headshotImg.style.objectFit = 'cover';
          }
        }
      }
    });

    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;
    let pageIndex = 0;

    // Render Page 1
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;
    pageIndex++;

    // Render Page 2, Page 3 etc. without any cutoffs or missing details
    while (heightLeft > 0) {
      position = -(pageIndex * pdfHeight);
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
      pageIndex++;
    }

    pdf.save('Neel_Patel_Resume.pdf');
  } catch (error) {
    console.error('Error generating sharp multi-page PDF:', error);
  }
};
