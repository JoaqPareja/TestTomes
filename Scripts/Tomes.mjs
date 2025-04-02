// @ts-nocheck
import fs from 'fs';
// import { PDFAcroButton } from 'pdf-lib';
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

// const getDocument = require( "pdfjs-dist/legacy/build/pdf.mjs");
// @ts-ignore
async function extractText(pdfPath) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  // @ts-ignore
  // Load the PDF file.
  const loadingTask = getDocument(data);
  loadingTask.promise
    .then(function (doc) {
      const numPages = doc.numPages;
      console.log("# Document Loaded");
      console.log("Number of Pages: " + numPages);
      console.log();
  
      let lastPromise; // will be used to chain promises
      lastPromise = doc.getMetadata().then(function (data) {
        console.log("# Metadata Is Loaded");
        console.log("## Info");
        console.log(JSON.stringify(data.info, null, 2));
        console.log();
        if (data.metadata) {
          console.log("## Metadata");
          console.log(JSON.stringify(data.metadata.getAll(), null, 2));
          console.log();
        }
      });
  
      const loadPage = async function (/** @type {string | number} */ pageNum) {
        // @ts-ignore
        const page = await doc.getPage(pageNum);
        console.log("# Page " + pageNum);
        const viewport = page.getViewport({ scale: 1.0 });
        console.log("Size: " + viewport.width + "x" + viewport.height);
        console.log();
        const content = await page
          .getTextContent();
        // Content contains lots of information about the text layout and
        // styles, but we need only strings at the moment
        const strings = content.items.map(function (item) {
          // @ts-ignore
          return item.str;
        });
        console.log("## Text Content");
        console.log(strings.join(" "));
        // Release page resources.
        page.cleanup();
        console.log();
      };
      // Loading of the first page will wait on metadata and subsequent loadings
      // will wait on the previous pages.
      for (let i = 1; i <= numPages; i++) {
        lastPromise = lastPromise.then(loadPage.bind(null, i));
      }
      return lastPromise;
    })
    .then(
      function () {
        console.log("# End of Document");
      },
      function (err) {
        console.error("Error: " + err);
      }
    );
}
import path from "path";
import pdfPoppler from"pdf-poppler";
  async function convertPDFToJPG(pdfPath, outputDir) {
    let opts = {
      format: "jpeg",
      out_dir: outputDir,
      out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
      scale: 900, // Higher scale = better quality //This one to modify it
    };
  
    try {
      await pdfPoppler.convert(pdfPath, opts);
      console.log("PDF successfully converted to JPG!");
    } catch (err) {
      console.error("Error:", err);
    }
  }
  /**
   * Param 
   * first string is to take the PDF 
   * And the second is the output
   * */
  convertPDFToJPG("StormcastEternalsTome.pdf", "./");


// extractText('StormcastEternalsTome.pdf');