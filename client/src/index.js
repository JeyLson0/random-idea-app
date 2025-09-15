import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdealList";
import IdeasApi from "./services/IdeasApi";

// component created, cleaner and modular to edits
new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
