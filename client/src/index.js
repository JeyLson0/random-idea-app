import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdealList";
import IdeasApi from "./services/IdeasApi";

// component created, cleaner and modular to edit
new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();

// PLAYING WITH FETCH()

// async function fetchData() {
//   let assignItHere;
//   IdeasApi.getIdeas()
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       assignItHere = data.data; // should mutate with {data: {somedata}}
//     });
//   console.log(assignItHere); // should return with mutated value
// }

// fetchData();
