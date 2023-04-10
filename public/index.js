import { BugModal } from "./javascript/BugModal.class.js";

import { BugController } from "./javascript/BugController.class.js";

function checkEvenetPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {

    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }
  return false;
}

(function () {
  const newBugButton = document.getElementById("new-bug-button");
  const bugContainer = document.querySelector("div.bug_report_container");

  const controller = new BugController();

  newBugButton.addEventListener("click", (e) => {
    BugModal.toggleModal();
    controller.setMethod("new");
  });

  bugContainer.addEventListener("click", (e) => {

    /**
     * - future brian need to fix this
     * works but the event target but be the container not the text or
     * anything else
     */

    if (checkEvenetPathForClass(e.composedPath(), 'bug_container')) {
      let div = e.target;
      const title = div.getAttribute("data-title");
      const area = div.getAttribute("data-area");
      const problem = div.getAttribute("data-problem");
      const id = div.id;

      const bug = new BugModal(id, title, area, problem);
      bug.fill();
      BugModal.toggleModal();
      controller.addBugId(id);
      controller.setMethod("edit");
      controller.setElement(div);
    }
  });

  BugModal.button.addEventListener("click", () => {
    let data = BugModal.getInputValues();
    controller.init(data);
    BugModal.toggleModal();
    removeSvg()
  });

  BugModal.ContainerCloseEvent();
})();


function removeSvg() {
  const svg = document.querySelector('svg');
  if (svg != undefined)
    svg.remove();

}