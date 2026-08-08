import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // Render at 3x scale with explicit desktop two-column grid cloning to prevent layout collapse
    const canvas = await html2canvas(element, {
      scale: 3, // 300 DPI vector crisp rendering
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0d111d',
      logging: false,
      windowWidth: 1024,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          // Force fixed desktop dimensions for 0 layout shifting or vertical single-column collapse
          clonedEl.style.width = '820px';
          clonedEl.style.maxWidth = '820px';
          clonedEl.style.minWidth = '820px';
          clonedEl.style.transform = 'none';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.padding = '32px';
          clonedEl.style.borderRadius = '0px';
          clonedEl.style.boxSizing = 'border-box';
          clonedEl.style.backgroundColor = '#0d111d';

          // Force 2-column layout on cloned element
          const gridCols = clonedEl.querySelectorAll('.resume-two-col-grid');
          gridCols.forEach((grid: any) => {
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = '270px 1fr';
            grid.style.gap = '24px';
          });

          // Force profile headshot photo size
          const headshotImg = clonedEl.querySelector('.resume-headshot-img') as HTMLElement;
          if (headshotImg) {
            headshotImg.style.width = '110px';
            headshotImg.style.height = '110px';
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

    // First page render
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    pdf.save('Neel_Patel_Resume.pdf');
  } catch (error) {
    console.error('Error generating sharp PDF:', error);
  }
};
