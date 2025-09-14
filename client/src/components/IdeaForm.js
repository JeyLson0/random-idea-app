import IdeasApi from "../services/IdeasApi";
import IdeaList from "./IdealList";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this.ideaList = new IdeaList();
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    // add to server
    const newIdea = await IdeasApi.createIdea(idea);
    const res = await newIdea.json();

    // add to front end
    this.ideaList.addIdeaToList(res.data);

    // Clear input fields
    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";

    // triggers any listeners with the Event object
    document.dispatchEvent(new Event("closeModal"));
  }

  render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>`;
    this._form = document.querySelector("#idea-form");
    this.addEventListeners();
  }
}

export default IdeaForm;
