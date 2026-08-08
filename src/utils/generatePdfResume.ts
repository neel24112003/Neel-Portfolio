import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = 210; // A4 width mm
    const pdfHeight = 297; // A4 height mm

    // Select distinct A4 page blocks
    const pages = container.querySelectorAll('.resume-a4-page');

    if (pages && pages.length > 0) {
      for (let i = 0; i < pages.length; i++) {
        const pageEl = pages[i] as HTMLElement;

        const canvas = await html2canvas(pageEl, {
          scale: 3, // 300 DPI vector crispness
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0d111d',
          logging: false,
          windowWidth: 840,
          onclone: (clonedDoc) => {
            const clonedPages = clonedDoc.querySelectorAll('.resume-a4-page');
            const clonedPage = clonedPages[i] as HTMLElement;

            if (clonedPage) {
              // Lock exact 840px width container for 0 distortion
              clonedPage.style.width = '840px';
              clonedPage.style.maxWidth = '840px';
              clonedPage.style.minWidth = '840px';
              clonedPage.style.margin = '0 auto';
              clonedPage.style.padding = '32px';
              clonedPage.style.borderRadius = '0px';
              clonedPage.style.boxSizing = 'border-box';
              clonedPage.style.backgroundColor = '#0d111d';

              // Force Header Layout horizontal alignment
              const headerBlock = clonedPage.querySelector('.resume-header-block') as HTMLElement;
              if (headerBlock) {
                headerBlock.style.display = 'flex';
                headerBlock.style.flexDirection = 'row';
                headerBlock.style.alignItems = 'center';
                headerBlock.style.justifyContent = 'space-between';
                headerBlock.style.gap = '20px';
              }

              // Force 2-Column Sidebar & Main Content layout
              const flexRow = clonedPage.querySelector('.resume-flex-row') as HTMLElement;
              const sidebar = clonedPage.querySelector('.resume-sidebar') as HTMLElement;
              const mainContent = clonedPage.querySelector('.resume-main-content') as HTMLElement;

              if (flexRow) {
                flexRow.style.display = 'flex';
                flexRow.style.flexDirection = 'row';
                flexRow.style.gap = '20px';
                flexRow.style.alignItems = 'flex-start';
              }
              if (sidebar) {
                sidebar.style.width = '270px';
                sidebar.style.minWidth = '270px';
                sidebar.style.maxWidth = '270px';
                sidebar.style.flexShrink = '0';
              }
              if (mainContent) {
                mainContent.style.width = '506px';
                mainContent.style.flex = '1';
              }

              // Force headshot photo size
              const headshotImg = clonedPage.querySelector('.resume-headshot-img') as HTMLElement;
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

        if (i > 0) {
          pdf.addPage();
        }

        // Render page image edge-to-edge on A4 page
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      }
    } else {
      // Fallback capture
      const canvas = await html2canvas(container, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0d111d',
        logging: false,
        windowWidth: 840,
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    pdf.save('Neel_Patel_Resume.pdf');
  } catch (error) {
    console.error('Error generating sharp 2-page PDF:', error);
  }
};
