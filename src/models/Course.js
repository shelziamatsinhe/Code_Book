/**
 * Estrutura de uma cadeira
 * @typedef {Object} Course
 * @property {string} id - Identificador único
 * @property {string} name - Nome completo da cadeira
 * @property {string} code - Código da cadeira
 * @property {number} semester - Semestre
 * @property {number} year - Ano
 * @property {string} teacher - Nome do docente
 */

/**
 * Estrutura de um passo de um guia
 * @typedef {Object} Step
 * @property {string} instruction - O que o estudante deve fazer
 * @property {string} script - Código ou comando a executar
 */

/**
 * Estrutura de um guia prático
 * @typedef {Object} Guide
 * @property {string} id
 * @property {string} title - Título da aula prática
 * @property {string} teacher - Docente responsável pelo guia
 * @property {Step[]} steps - Passos do guia
 * @property {string[]} exercises - Exercícios práticos
 */

export const MOCK_COURSES = [
  {
    id: '1',
    name: 'Programação Web e Mobile',
    code: 'PWM',
    semester: 2,
    year: 2,
    teacher: 'Msc. Carsolino Sambo',
      },
  {
    id: '2',
    name: 'Estruturas de Dados e Algoritmos',
    code: 'EDA',
    semester: 2,
    year: 1,
    teacher: 'Msc. Cidalia',
  },
  {
    id: '3',
    name: 'Pratica Tecnico Profissional I: Desenvolvimento de Solucoes Web e Mobile',
    code: 'PTP-I',
    semester: 1,
    year: 2,
     teacher: 'Msc. Armando Correia Jr.',
  },
  {
    id: '4',
    name: 'Linguagem de Programação II: Java',
    code: 'LP-II',
    semester: 1,
    year: 2,
    teacher: 'Ruben Manhica',
  },
];

export const MOCK_GUIDES = {
 
  // ============================================================
  // PWM - Programacao Web e Mobile
  // Docente: Carsolino Sambo
  // ============================================================
  'PWM': [
    {
      id: '1',
      title: 'Aula Pratica 1 - Integracao GitHub com VS Code e primeiro commit',
      teacher: 'Carsolino Sambo',
      steps: [
        {
          instruction: 'Instala o Git no teu computador caso ainda nao tenhas',
          script: '# Verifica se o Git ja esta instalado\ngit --version\n\n# Se nao estiver, descarrega em:\n# https://git-scm.com/downloads',
        },
        {
          instruction: 'Configura o teu nome e email no Git',
          script: 'git config --global user.name "O Teu Nome"\ngit config --global user.email "o_teu_email@ujac.ac.mz"',
        },
        {
          instruction: 'Cria uma conta no GitHub em github.com e cria um repositorio novo chamado "meu-primeiro-projeto"',
          script: '# No GitHub:\n# 1. Clica em "New repository"\n# 2. Nome: meu-primeiro-projeto\n# 3. Marca "Add a README file"\n# 4. Clica em "Create repository"',
        },
        {
          instruction: 'Abre o VS Code e instala a extensao GitHub',
          script: '# No VS Code:\n# Ctrl + Shift + X\n# Pesquisa "GitHub Pull Requests"\n# Instala a extensao da Microsoft',
        },
        {
          instruction: 'Clona o repositorio do GitHub para o teu computador',
          script: '# Abre o terminal no VS Code: Ctrl + `\ngit clone https://github.com/teu-usuario/meu-primeiro-projeto.git\ncd meu-primeiro-projeto',
        },
        {
          instruction: 'Cria um ficheiro novo chamado index.html',
          script: '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Meu Primeiro Projeto</title>\n  </head>\n  <body>\n    <h1>Ola, UJAC!</h1>\n  </body>\n</html>',
        },
        {
          instruction: 'Adiciona o ficheiro, faz commit e envia para o GitHub',
          script: 'git add index.html\ngit status\ngit commit -m "feat: adicionar pagina inicial"\ngit push origin main',
        },
        {
          instruction: 'Verifica no GitHub que o ficheiro foi publicado',
          script: '# Abre o browser e vai a:\n# https://github.com/teu-usuario/meu-primeiro-projeto',
        },
      ],
      exercises: [
        'Cria um ficheiro style.css no mesmo repositorio, faz commit e push.',
        'Edita o README.md com uma descricao do teu projeto, faz commit com a mensagem "docs: atualizar README".',
        'Cria uma branch chamada "feature/nova-pagina", cria um ficheiro sobre.html e faz push dessa branch.',
      ],
    },
  ],
 
  // ============================================================
  // PTP-I - Pratica Tecnico Profissional I
  // Docente: Msc. Armando Correia Jr.
  // ============================================================
  'PTP-I': [
    {
      id: '1',
      title: 'Aula Pratica 1 - Inicializar servidor Node.js com server.js',
      teacher: 'Msc. Armando Correia Jr.',
      steps: [
        {
          instruction: 'Verifica se o Node.js esta instalado no teu computador',
          script: '# Verifica a versao do Node.js\nnode --version\n\n# Verifica a versao do npm\nnpm --version\n\n# Se nao estiver instalado:\n# https://nodejs.org',
        },
        {
          instruction: 'Cria uma pasta para o projeto',
          script: '# Pasta solta no Ambiente de Trabalho\ncd C:\\Users\\TeuNome\\Desktop\nmkdir meu-servidor\ncd meu-servidor\n\n# Ou dentro de uma pasta Projetos\nmkdir Projetos\ncd Projetos\nmkdir meu-servidor\ncd meu-servidor',
        },
        {
          instruction: 'Inicializa o projeto Node.js',
          script: 'npm init -y',
        },
        {
          instruction: 'Instala o Express',
          script: 'npm install express',
        },
        {
          instruction: 'Cria o ficheiro server.js na raiz da pasta do projeto',
          script: '// server.js\nconst express = require("express");\nconst app = express();\nconst PORT = 3000;\n\napp.use(express.json());\n\napp.get("/", (req, res) => {\n  res.json({\n    mensagem: "Servidor UJAC a funcionar!",\n    status: "online"\n  });\n});\n\napp.listen(PORT, () => {\n  console.log(`Servidor a correr em http://localhost:${PORT}`);\n});',
        },
        {
          instruction: 'Inicia o servidor no terminal',
          script: 'node server.js\n\n# Deves ver:\n# Servidor a correr em http://localhost:3000',
        },
        {
          instruction: 'Abre o browser e vai a http://localhost:3000',
          script: '# No browser:\n# http://localhost:3000\n\n# Deves ver:\n# { "mensagem": "Servidor UJAC a funcionar!", "status": "online" }',
        },
        {
          instruction: 'Instala o nodemon para reinicio automatico',
          script: 'npm install -D nodemon\n\n# Adiciona ao package.json em "scripts":\n# "start": "nodemon server.js"\n\n# Corre com:\nnpm start',
        },
      ],
      exercises: [
        'Adiciona uma rota GET /sobre que devolve o teu nome e numero de estudante em JSON.',
        'Adiciona uma rota POST /estudantes que recebe nome e numero e devolve uma mensagem de confirmacao.',
        'Testa as rotas usando o browser (GET) e o Postman ou Thunder Client (POST).',
      ],
    },
  ],
 
  // ============================================================
  // EDA - Estrutura de Dados e Algoritmos
  // Docente: Cidalia
  // ============================================================
  'EDA': [
    {
      id: '1',
      title: 'Aula Pratica 1 - Introducao ao Pascal: programa simples',
      teacher: 'Cidalia',
      steps: [
        {
          instruction: 'Instala o Free Pascal no teu computador',
          script: '# Descarrega o Free Pascal em:\n# https://www.freepascal.org/download.html\n\n# Ou instala o Lazarus IDE (inclui Free Pascal):\n# https://www.lazarus-ide.org',
        },
        {
          instruction: 'Cria um ficheiro chamado programa1.pas e escreve o primeiro programa',
          script: '(* programa1.pas *)\nprogram OlaMundo;\n\nbegin\n  writeln(\'Ola, Mundo!\');\n  writeln(\'Bem-vindo ao Pascal - UJAC\');\nend.',
        },
        {
          instruction: 'Compila e executa o programa no terminal',
          script: '# Compila o programa\nfpc programa1.pas\n\n# Executa no Windows:\nprograma1.exe\n\n# No Linux/Mac:\n./programa1',
        },
        {
          instruction: 'Cria um programa que le o nome do utilizador e o cumprimenta',
          script: 'program CumprimentarEstudante;\n\nvar\n  nome: string;\n\nbegin\n  write(\'Introduz o teu nome: \');\n  readln(nome);\n  writeln(\'Ola, \', nome, \'!\');\n  writeln(\'Bem-vindo ao curso de Eng. Informatica da UJAC!\');\nend.',
        },
        {
          instruction: 'Cria um programa que calcula a media de duas notas',
          script: 'program CalcularMedia;\n\nvar\n  nota1, nota2, media: real;\n\nbegin\n  write(\'Introduz a primeira nota: \');\n  readln(nota1);\n  write(\'Introduz a segunda nota: \');\n  readln(nota2);\n  media := (nota1 + nota2) / 2;\n  writeln(\'A tua media e: \', media:0:2);\n  if media >= 10 then\n    writeln(\'Aprovado!\')\n  else\n    writeln(\'Reprovado.\');\nend.',
        },
        {
          instruction: 'Cria um programa com ciclo que imprime os numeros de 1 a 10',
          script: 'program ContarNumeros;\n\nvar\n  i: integer;\n\nbegin\n  writeln(\'Contagem de 1 a 10:\');\n  for i := 1 to 10 do\n  begin\n    writeln(i);\n  end;\n  writeln(\'Fim da contagem!\');\nend.',
        },
      ],
      exercises: [
        'Modifica o programa da media para calcular a media de tres notas em vez de duas.',
        'Cria um programa que le dois numeros e imprime qual e o maior.',
        'Cria um programa com ciclo while que imprime apenas os numeros pares de 1 a 20.',
      ],
    },
  ],
 
  // ============================================================
  // LP-II - Linguagem de Programacao II
  // Docente: Ruben Manhica
  // ============================================================
  'LP-II': [
    {
      id: '1',
      title: 'Aula Pratica 1 - Introducao ao Java: primeiro programa',
      teacher: 'Ruben Manhica',
      steps: [
        {
          instruction: 'Verifica se o Java esta instalado no teu computador',
          script: '# Verifica a versao do Java\njava --version\n\n# Verifica o compilador\njavac --version\n\n# Se nao estiver instalado:\n# https://www.oracle.com/java/technologies/downloads/',
        },
        {
          instruction: 'Cria uma pasta para o projeto e um ficheiro chamado OlaMundo.java',
          script: 'mkdir MeuProjeto\ncd MeuProjeto',
        },
        {
          instruction: 'Escreve o primeiro programa Java',
          script: '// OlaMundo.java\npublic class OlaMundo {\n\n    public static void main(String[] args) {\n        System.out.println("Ola, Mundo!");\n        System.out.println("Bem-vindo ao Java - UJAC");\n    }\n\n}',
        },
        {
          instruction: 'Compila e executa o programa no terminal',
          script: '# Compila o programa\njavac OlaMundo.java\n\n# Executa o programa\njava OlaMundo\n\n# Deves ver:\n# Ola, Mundo!\n# Bem-vindo ao Java - UJAC',
        },
        {
          instruction: 'Cria uma classe Estudante com atributos e metodos',
          script: '// Estudante.java\npublic class Estudante {\n\n    private String nome;\n    private String numero;\n    private String curso;\n\n    public Estudante(String nome, String numero, String curso) {\n        this.nome = nome;\n        this.numero = numero;\n        this.curso = curso;\n    }\n\n    public void apresentar() {\n        System.out.println("Nome: " + nome);\n        System.out.println("Numero: " + numero);\n        System.out.println("Curso: " + curso);\n    }\n\n    public String getNome() { return nome; }\n    public String getNumero() { return numero; }\n    public String getCurso() { return curso; }\n\n}',
        },
        {
          instruction: 'Cria a classe principal Main.java que usa a classe Estudante',
          script: '// Main.java\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Estudante estudante = new Estudante(\n            "Shelzia Matsinhe",\n            "2025080007",\n            "Engenharia Informatica"\n        );\n\n        System.out.println("=== Dados do Estudante ===");\n        estudante.apresentar();\n\n    }\n\n}',
        },
        {
          instruction: 'Compila e executa os dois ficheiros juntos',
          script: '# Compila os dois ficheiros\njavac Estudante.java Main.java\n\n# Executa\njava Main\n\n# Deves ver:\n# === Dados do Estudante ===\n# Nome: Shelzia Matsinhe\n# Numero: 2025080007\n# Curso: Engenharia Informatica',
        },
      ],
      exercises: [
        'Adiciona um atributo "nota" a classe Estudante e um metodo calcularSituacao() que imprime "Aprovado" se nota >= 10 ou "Reprovado" caso contrario.',
        'Cria uma classe Turma com um array de 3 Estudantes e um metodo listarEstudantes() que imprime todos.',
        'Adiciona um metodo static contarEstudantes() a classe Turma que devolve o numero de estudantes.',
      ],
    },
  ],
};