// script.js
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("demoIframe");
    const pdfUpload = document.getElementById("pdfUpload");
    const openPdfButton = document.getElementById("openPdf");
    const downloadPdfButton = document.getElementById("downloadPdf");
    let uploadedPdfURL = null;
  
    // Handle PDF upload
    pdfUpload.addEventListener("change", () => {
      const file = pdfUpload.files[0];
      if (file && file.type === "application/pdf") {
        uploadedPdfURL = URL.createObjectURL(file); // Create URL for the uploaded PDF
      } else {
        alert("Please upload a valid PDF file.");
        pdfUpload.value = ""; // Reset input
      }
    });
  
    // Open PDF in new tab
    openPdfButton.addEventListener("click", () => {
      if (uploadedPdfURL) {
        iframe.contentWindow.postMessage({ action: "openPdf", data: uploadedPdfURL }, "*");
        console.log("🚀 ~ openPdfButton.addEventListener ~ action:", action)
        // URL.revokeObjectURL(uploadedPdfURL); // Revoke the URL object after download
      } else {
        alert("Please upload a PDF file first.");
      }
    });
  
    // Download PDF
    downloadPdfButton.addEventListener("click", () => {
      if (uploadedPdfURL) {
        iframe.contentWindow.postMessage({ action: "downloadPdf", data: uploadedPdfURL }, "*");
        console.log("🚀 ~ downloadPdfButton.addEventListener ~ action:", action)
        // URL.revokeObjectURL(uploadedPdfURL); // Revoke the URL object after download
      } else {
        alert("Please upload a PDF file first.");
      }
    });
  });