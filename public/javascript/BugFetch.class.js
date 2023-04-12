import { URLPath } from "./GetUrl.js";
export class BugFetch {
  static bugApi = URLPath();

  static async update(
    data = {
      problem: "",
      title: "",
      area: "",
      image: "",
    },
    id
  ) {
    try {
      if (typeof data != "object") throw TypeError;
      data.id = id;
      let response = await fetch(BugFetch.bugApi, {
        method: "PUT",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      alert(error);
    }
  }

  static async addNew(
    data = {
      problem: "",
      title: "",
      area: "",
      image: "",
    }
  ) {
    try {
      let response = await fetch(BugFetch.bugApi, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/html",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) { }
  }
}
