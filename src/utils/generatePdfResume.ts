import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // 2.5x scale capture for ultra-sharp, high-contrast, crystal-clear text readability
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#07090e',
      logging: false,
      windowWidth: 960,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.width = '960px';
          clonedEl.style.maxWidth = '960px';
          clonedEl.style.minWidth = '960px';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.padding = '36px';
          clonedEl.style.boxSizing = 'border-box';
          clonedEl.style.backgroundColor = '#07090e';
          clonedEl.style.color = '#ffffff';

          // Force 2-Column Sidebar & Main Content layout
          const flexRow = clonedEl.querySelector('.resume-flex-row') as HTMLElement;
          const sidebar = clonedEl.querySelector('.resume-sidebar') as HTMLElement;
          const mainContent = clonedEl.querySelector('.resume-main-content') as HTMLElement;

          if (flexRow) {
            flexRow.style.display = 'flex';
            flexRow.style.flexDirection = 'row';
            flexRow.style.gap = '28px';
            flexRow.style.alignItems = 'flex-start';
          }
          if (sidebar) {
            sidebar.style.width = '300px';
            sidebar.style.minWidth = '300px';
            sidebar.style.maxWidth = '300px';
            sidebar.style.flexShrink = '0';
          }
          if (mainContent) {
            mainContent.style.width = '580px';
            mainContent.style.flex = '1';
          }

          // Force Headshot image dimensions
          const headshotImg = clonedEl.querySelector('.resume-headshot-img') as HTMLElement;
          if (headshotImg) {
            headshotImg.style.width = '120px';
            headshotImg.style.height = '120px';
            headshotImg.style.borderRadius = '18px';
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

    // Render Page 2, Page 3 etc. with high clarity
    while (heightLeft > 4) { // 4mm buffer
      position = -(pageIndex * pdfHeight);
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
      pageIndex++;
    }

    pdf.save('Neel_Patel_Resume.pdf');
  } catch (error) {
    console.error('Error generating readable PDF:', error);
  }
};
