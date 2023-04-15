import { BUGMODAL } from "./javascript/BugModal.class.js";
import { checkEventPathForClass } from "./javascript/CheckPath.js";
import { BUGCONTROLLER } from "./javascript/BugController.class.js";

const removeSvg = () => {
  const svg = document.querySelector('svg');
  if (svg != undefined)
    svg.remove();
}

(function () {

  const addNewBugButton = document.querySelectorAll("[data-new-bug]");
  const bugReportContainer = document.querySelector("div.bug_report_container");

  const bugController = new BUGCONTROLLER();

  addNewBugButton.forEach(button => {
    button.addEventListener("click", (e) => {
      BUGMODAL.toggleModal();
      bugController.setFetchMethod("new");
    })
  });

  bugReportContainer.addEventListener("click", (e) => {

    if (checkEventPathForClass(e.composedPath(), 'bug_container')) {
      let bug_container = (!e.target.classList.contains('bug_container')) ? e.target.parentElement : e.target;

      const title = bug_container.getAttribute("data-title");
      const area = bug_container.getAttribute("data-area");
      const problem = bug_container.getAttribute("data-problem");
      const id = bug_container.id;
      const bug = new BUGMODAL(id, title, area, problem);

      bug.insertModalInfo();

      BUGMODAL.toggleModal();

      bugController.addBugId(id);
      bugController.setFetchMethod("edit");

      bugController.setElement(bug_container);
    }
  });

  BUGMODAL.button.addEventListener("click", () => {
    let data = BUGMODAL.getInputValues();
    bugController.init(data);
    BUGMODAL.toggleModal();
    removeSvg();
  });

  BUGMODAL.ContainerCloseEvent();
})();


