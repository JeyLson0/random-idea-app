import "./css/style.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdealList";

// component created, cleaner and modular to edits
new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
