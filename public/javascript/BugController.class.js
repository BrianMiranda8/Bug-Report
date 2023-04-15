import { BUGFETCH } from "./BugFetch.class.js";

export class BUGCONTROLLER {
  constructor() {
    this.currentID = -1;
    this.method = null;
    this.currentElement = null;
  }

  init(data) {
    switch (this.method) {
      case "new":
        this.addNewBug(data);
        break;
      case "edit":
        this.editBug(data, this.currentID);
        break;
    }
  }
  setFetchMethod(method) {
    this.method = method;
  }
  addBugId(bug) {
    this.currentID = bug;
  }

  editBug(bug, id) {
    const response = BUGFETCH.update(bug, id);
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        this.getElement(bug, this.currentElement);
      }
    });
  }
  addNewBug(data) {
    const response = BUGFETCH.addNew(data);

    response
      .then((data) => {
        return data.text();
      })
      .then((data) => {
        document.querySelector("div.bug_report_container").innerHTML += data;
      });
  }

  clear() {
    this.currentID = -1;
    this.method = null;
  }
  getElement(data, div) {
    div.setAttribute("data-title", data["title"]);
    div.setAttribute("data-area", data["area"]);
    div.setAttribute("data-problem", data["problem"]);
    div.querySelector("span.bug_title").innerText = data["title"];
    div.querySelector("span.bug_area").innerText = data["area"];
  }
  setElement(element) {
    this.currentElement = element;
  }
}
