class IdeasApi {
  constructor() {
    this.apiURL = "http://localhost:5000/api/ideas";
  }

  getIdeas() {
    return fetch(this.apiURL, {
      method: "GET",
    });
  }

  createIdea(data) {
    return fetch(this.apiURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  updateIdea(id, data) {
    let url = `${this.apiURL}/${id}`;
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  deleteIdea(id) {
    let url = `${this.apiURL}/${id}`;
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";

    console.log(username);
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    });
  }
}

export default new IdeasApi();
