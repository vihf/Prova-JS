const listaStorage = localStorage.getItem("listaLivros")
let listaLivros = [];
if (listaStorage) {
  listaLivros = JSON.parse(listaStorage);
}
function buscarLivro() {
    const inputISBN = document.getElementById("input_codigoISBN");
    const valorCodigo = inputISBN.value;
    console.log("buscando codigo" + valorCodigo);
    fetch("https://brasilapi.com.br/api/isbn/v1/" + valorCodigo)
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        console.log(json);
        const inputTitle = document.getElementById("input_title");
        inputTitle.value = json.title;
  
        const inputSubtitle = document.getElementById("input_subtitle");
        inputSubtitle.value = json.inputsubtitle;
  
        const inputAuthors = document.getElementById("input_authors");
        inputAuthors.value = json.authors;
  
        const inputPublisher = document.getElementById("input_publisher");
        inputPublisher.value = json.publisher;

        const inputSynopsis = document.getElementById("input_synopsis");
        inputSynopsis.value = json.synopsis;

        const inputYear = document.getElementById("input_year");
        inputYear.value = json.year;

        const inputpageCount = document.getElementById("input_pageCount");
        inputpageCount.value = json.pageCount;

        const inputSubjects = document.getElementById("input_subjects");
        inputSubjects.value = json.subjects;

        const inputCapa = document.getElementById("input_capa");
        inputCapa.value = json.capa;
      });
    }

    function clicarSalvar() {
        console.log("Clicou para salvar");
        const inputISBN = document.getElementById("input_codigoISBN");
        const valorISBN = inputISBN.value;
      
        const inputTitle = document.getElementById("input_title");
        const valorTitle = inputTitle.value;
      
        const inputSubtitle = document.getElementById("input_subtitle");
        const valorSubtitle = inputSubtitle.value;
      
        const inputAuthors = document.getElementById("input_authors");
        const valorAuthors = inputAuthors.value;
      
        const inputPublisher = document.getElementById("input_publisher");
        const valorPublisher = inputPublisher.value;

        const inputSynopsis = document.getElementById("input_synopsis");
        const valorSynopsis = inputSynopsis.value;

        const inputYear = document.getElementById("input_year");
        const valorYear = inputYear.value;

        const inputpageCount = document.getElementById("input_pageCount");
        const valorPageCount = inputpageCount.value;

        const inputSubjects = document.getElementById("input_subjects");
        const valorSubjects = inputSubjects.value;

        const inputCapa = document.getElementById("input_capa");
        const valorCapa = inputCapa.value;
      
        const novoLivro = {
          ISBN: valorISBN,
          titulo: valorTitle,
          subtitulo: valorSubtitle,
          autores: valorAuthors,
          editora: valorPublisher,
          sinopse: valorSynopsis,
          ano: valorYear,
          paginas: valorPageCount,
          categoria: valorSubjects,
          capa: valorCapa
        }
      
        listaLivros.push(novoLivro);
        console.log(listaLivros);
        localStorage.setItem("listaLivros", JSON.stringify(listaLivros))
      }

      function configurarEventos() {
        const inputISBN = document.getElementById("input_codigoISBN");
        inputISBN.addEventListener("focusout", buscarLivro);
      
        const botaoSalvar = document.getElementById("botao_salvar");
        botaoSalvar.addEventListener("click", clicarSalvar)
      }
      
      window.addEventListener("load", configurarEventos);