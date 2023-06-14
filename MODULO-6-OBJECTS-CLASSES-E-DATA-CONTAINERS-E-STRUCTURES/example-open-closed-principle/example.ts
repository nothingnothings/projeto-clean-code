// class Printer {
//   // classe ABERTA PARA MODIFICAÇÃO (ruim, pois viola o open-closed principle)...)...

//   printPDF(data: any) {}

//   printWebDocument(data: any) {}

//   printPage(data: any) {}

//   verifyData(data: any) {}
// }

interface Printer {
  print(data: any);
}

class PrinterImplementation { /// A VANTAGEM É QUE ESSA 'BASE CLASS', 'PrinterImplementation', PODE SER __ CLOSED_ A CERTO PONTO NO TEMPO, durante o development (e isso deixa nosso código bem mais seguro).... -> se quisermos EXTENDER NOSSAS FEATURES, FAZEMOS ISSO NAS SUB-CLASSES...
  // classe FECHADA PARA MODIFICAÇÃO, MAS 'ABERTA PARA EXTENSÃO' (segue o 'open-closed principle')...

  verifyData(data: any) {}
}

class WebPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print web document
  }
}

class PDFPrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print pdf document
  }
}

class PagePrinter extends PrinterImplementation implements Printer {
  print(data: any) {
    // print page document
  }
}
