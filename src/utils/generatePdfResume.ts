import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePdfResume = async (elementId: string = 'resume-a4-document') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // 1. Measure the exact screen dimensions of the element as currently rendered in the browser
    const exactWidth = element.offsetWidth;
    const exactHeight = element.offsetHeight;

    // 2. Capture html2canvas directly from the actual active DOM tree
    const canvas = await html2canvas(element, {
      scale: 3, // 300 DPI vector-sharp quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#0d111d',
      logging: false,
      width: exactWidth,
      height: exactHeight,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      scrollX: 0,
      scrollY: -window.scrollY,
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

    // Render Page 2, Page 3 etc. matching screen 1-to-1
    while (heightLeft > 3) {
      position = -(pageIndex * pdfHeight);
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
      pageIndex++;
    }

    pdf.save('Neel_Patel_Resume.pdf');
  } catch (error) {
    console.error('Error generating 1-to-1 matching PDF:', error);
  }
};
