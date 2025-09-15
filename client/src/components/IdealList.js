// Import API service
import IdeasApi from "../services/IdeasApi";

class IdeaList {
  constructor() {
    this.ideaListEl = document.querySelector("#idea-list");
    this.ideas = [];
    this.getIdeas(); // call fetchAPI()
    this.validTags = new Set();
    this.validTags.add("technology");
    this.validTags.add("software");
    this.validTags.add("business");
    this.validTags.add("education");
    this.validTags.add("health");
    this.validTags.add("inventions");
  }

  addEventListeners() {
    this.ideaListEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-times")) {
        e.stopImmediatePropagation();
        const ideaId = e.target.parentElement.parentElement.dataset.id;
        this.deleteIdea(ideaId);
      }
    });
  }

  deleteIdea(ideaId) {
    IdeasApi.deleteIdea(ideaId)
      .then((res) => {
        this.getIdeas();
      })
      .catch((err) => {
        console.log(err);
        alert("You cannot delete this resource");
      });
  }

  addIdeaToList(idea) {
    this.ideas.push(idea);
    this.render();
  }

  getIdeas() {
    IdeasApi.getIdeas()
      .then((res) => res.json())
      .then((data) => {
        this.ideas = data.data;
        this.render();
      });
  }

  getTagClass(tag) {
    tag = tag.toLowerCase();
    let tagClass = "";
    if (this.validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = "";
    }
    return tagClass;
  }

  render() {
    this.ideaListEl.innerHTML = this.ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        const deleteBtn =
          idea.username === localStorage.getItem("username")
            ? ` <button class="delete"><i class="fas fa-times"></i></button>`
            : "";
        return `
               <div class="card" data-id='${idea._id}'>
           ${deleteBtn}
          <h3>
            ${idea.text}
          </h3>
          <p class="${tagClass} tag">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
        `;
      })
      .join("");
    this.addEventListeners();
  }
}

export default IdeaList;
