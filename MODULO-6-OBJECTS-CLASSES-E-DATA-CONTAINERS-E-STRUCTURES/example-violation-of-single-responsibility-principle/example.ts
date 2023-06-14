class ReportDocument {
  //esta class é super pequena, mas viola o 'SINGLE RESPONSIBILITY PRINCIPLE'...
  generateReport(data: any) {}

  createPdf(report: any) {}
}

// -_> ESSA CLASS É SUPER PEQUENA,

// MAS AINDA VIOLA ESSE PRINCIPLE....

// ELA VIOLA ESSE PRINCIPLE JUSTAMENTE PQ

// O

// 'GENERATE DE 1 REPORT',

// QUE

// GERA A DATA

// QUE SERÁ INSERIDA NO REPORT,

// ESSA TASK _ É UMA FEATURE TOTALMENTE DIFERENTE,

// NA NOSSA

// BUSINESS ORGANIZATION,

// DO QUE O _ CREATE DE 1 PDF...

// -> PQ O CREATE DE 1 PDF ENVOLVE COISAS COMO:

// 1) LAYOUT

// 2) HOW MANY PAGES

// 3) PRESENTATIONAL LOGIC....

// -> JÁ O 'generateReport' É BEM MAIS TÉCNICO,

// É __ SOBRE __ O PULL DE DATA __

// E

// O CONNECT DA DATA CORRETA..

// -> OK... FICA BEM CLARO QUE ESSAS SÃO 2 RESPONSIBILITES BEM DIFERENTES...

class User { //? esta class NÃO VIOLA O 'SINGLE RESPONSIBILITY PRINCIPLE'... (tudo está relacionado com o status de auth do user)...
  login(email: string, password: string) {}

  signup(email: string, password: string) {}

  assignRole(role: any) {}
}
