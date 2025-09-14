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
        return `
               <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
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
  }
}

export default IdeaList;
