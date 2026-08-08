import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // Ultra-crisp 3x resolution capture to completely eliminate any blurriness
    const canvas = await html2canvas(element, {
      scale: 3, // 300 DPI equivalent sharp rendering
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0d111d',
      logging: false,
      windowWidth: 794,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.width = '794px';
          clonedEl.style.maxWidth = '794px';
          clonedEl.style.transform = 'none';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.borderRadius = '0px';
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

    const pdfWidth = 210; // A4 width mm
    const pdfHeight = 297; // A4 height mm

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page edge-to-edge
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Add remaining pages seamlessly if content spans multiple pages
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
