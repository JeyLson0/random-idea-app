class IdeaList {
  constructor() {
    this.ideaListEl = document.querySelector("#idea-list");
    this.ideas = [
      {
        id: 1,
        text: "Idea 1",
        tag: "business",
        username: "john",
        date: `1 / 2 / 2023`,
      },
      {
        id: 2,
        text: "Idea 2",
        tag: "technology",
        username: "john",
        date: `1 / 2 / 2023`,
      },
      {
        id: 3,
        text: "Idea 3",
        tag: "Foodtech",
        username: "john",
        date: `1 / 2 / 2023`,
      },
    ];
    this.validTags = new Set();
    this.validTags.add("technology");
    this.validTags.add("software");
    this.validTags.add("business");
    this.validTags.add("education");
    this.validTags.add("health");
    this.validTags.add("inventions");
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
