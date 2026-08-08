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
      windowWidth: 1200,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          // Lock exact 900px A4 proportion container so image spans 100% of A4 PDF page with 0 right margin
          clonedEl.style.width = '900px';
          clonedEl.style.maxWidth = '900px';
          clonedEl.style.minWidth = '900px';
          clonedEl.style.transform = 'none';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.padding = '32px';
          clonedEl.style.borderRadius = '0px';
          clonedEl.style.boxSizing = 'border-box';
          clonedEl.style.backgroundColor = '#0d111d';

          // Force Header Layout to stay horizontal in PDF clone
          const headerBlock = clonedEl.querySelector('.resume-header-block') as HTMLElement;
          if (headerBlock) {
            headerBlock.style.display = 'flex';
            headerBlock.style.flexDirection = 'row';
            headerBlock.style.alignItems = 'center';
            headerBlock.style.justifyContent = 'space-between';
            headerBlock.style.gap = '24px';
          }

          // Force 2-Column Sidebar & Main Content layout to stay horizontal in PDF clone
          const flexRow = clonedEl.querySelector('.resume-flex-row') as HTMLElement;
          const sidebar = clonedEl.querySelector('.resume-sidebar') as HTMLElement;
          const mainContent = clonedEl.querySelector('.resume-main-content') as HTMLElement;

          if (flexRow) {
            flexRow.style.display = 'flex';
            flexRow.style.flexDirection = 'row';
            flexRow.style.gap = '24px';
            flexRow.style.alignItems = 'flex-start';
          }
          if (sidebar) {
            sidebar.style.width = '280px';
            sidebar.style.minWidth = '280px';
            sidebar.style.maxWidth = '280px';
            sidebar.style.flexShrink = '0';
          }
          if (mainContent) {
            mainContent.style.width = '530px';
            mainContent.style.flex = '1';
          }

          // Force headshot image size
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
