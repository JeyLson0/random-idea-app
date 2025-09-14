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
}

export default new IdeasApi();
