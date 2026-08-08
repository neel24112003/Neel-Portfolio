import jsPDF from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const generatePdfResume = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 15;
  let y = 15;

  // Primary Theme Colors (Modern Slate & Cyan/Violet)
  const primaryColor = [15, 23, 42]; // Slate 900
  const accentColor = [14, 165, 233]; // Cyan 500
  const secondaryColor = [71, 85, 105]; // Slate 600
  const darkTextColor = [30, 41, 59]; // Slate 800

  // Helper for adding new page if needed
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 15;
    }
  };

  // Header Banner Background
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 40, 'F');

  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(PERSONAL_INFO.name, margin, 16);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(56, 189, 248); // Electric Cyan
  doc.text(PERSONAL_INFO.title, margin, 23);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(226, 232, 240);
  const contactLine = `Email: ${PERSONAL_INFO.email}   |   Phone: ${PERSONAL_INFO.phone}   |   Location: ${PERSONAL_INFO.location}`;
  doc.text(contactLine, margin, 30);

  y = 48;

  // SECTION HEADER HELPER
  const addSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 8;
  };

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, pageWidth - 2 * margin);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 4;

  // 2. PROFESSIONAL EXPERIENCE
  addSectionHeader('Professional Experience');
  
  EXPERIENCES.forEach((exp) => {
    checkPageBreak(22);
    
    // Role Title & Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });

    y += 4;
    
    // Company Name
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(`Company: ${exp.company}`, margin, y);
    y += 4.5;

    // Bullet Deliverables
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);

    exp.description.forEach((desc) => {
      const bulletText = `•  ${desc}`;
      const lines = doc.splitTextToSize(bulletText, pageWidth - 2 * margin - 3);
      checkPageBreak(lines.length * 3.8);
      doc.text(lines, margin + 3, y);
      y += lines.length * 3.8;
    });

    // Tech Stack line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(`Skills Used: ${exp.skills.join(' • ')}`, margin + 3, y);
    y += 6;
  });

  // 3. KEY PROJECTS
  addSectionHeader('Featured Software & Systems Projects');
  PROJECTS.forEach((proj) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(proj.category.toUpperCase(), pageWidth - margin, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
    const projLines = doc.splitTextToSize(proj.description, pageWidth - 2 * margin);
    doc.text(projLines, margin, y);
    y += projLines.length * 3.8 + 4;
  });

  // 4. TECHNICAL SKILLS
  addSectionHeader('Technical Skills & Domains');
  SKILL_CATEGORIES.forEach((cat) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${cat.name}: `, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
    const skillList = cat.skills.join(', ');
    const lines = doc.splitTextToSize(skillList, pageWidth - 2 * margin - 40);
    doc.text(lines, margin + 40, y);
    y += Math.max(lines.length * 3.8, 4.5);
  });

  y += 3;

  // 5. EDUCATION & CERTIFICATIONS
  addSectionHeader('Education & Credentials');
  EDUCATION.forEach((edu) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${edu.degree} — ${edu.institution}`, margin, y);
    doc.setFontSize(8);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;
  });

  y += 2;
  CERTIFICATIONS.forEach((cert) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
    doc.text(`• ${cert.title} — Issued by ${cert.issuer}`, margin, y);
    y += 4;
  });

  // Add Page Numbers in Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`Neel Patel — Computer Science Engineer & Data Analyst   |   Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 6, { align: 'center' });
  }

  // Trigger Instant PDF Download
  doc.save('Neel_Patel_Resume.pdf');
};
