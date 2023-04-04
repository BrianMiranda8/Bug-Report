import { BugModal } from "./javascript/BugModal.class.js";
import { BugFetch } from "./javascript/BugFetch.class.js";
import { BugController } from "./javascript/BugController.class.js";


(function () {

    const newBugButton = document.getElementById('new-bug-button')
    // const currentBugs = Array.from(document.querySelectorAll('div.bug_container'));
    const bugContainer = document.querySelector('div.bug_report_container');
    newBugButton.addEventListener('click', (e) => {
        BugModal.toggleModal();
        BugController.method = 'add'

    })



    bugContainer.addEventListener('click', (e) => {
        let pass = false;
        /**
         * need to fix this- future brian 
         * works but the event target but be the container not the text or
         * anything else
         */
        if (e.target.matches('div.bug_container')) {
            let div = e.target;
            const title = div.getAttribute('data-title');
            const area = div.getAttribute('data-area');
            const problem = div.getAttribute('data-problem')
            const id = div.id;
            const bug = new BugModal(id, title, area, problem);
            bug.fill();
            BugModal.toggleModal();
            BugController.method = 'edit'
            BugController.id = id;
        }

    })


    BugModal.button.addEventListener('click', () => {

        let controller = new BugController(BugModal.getInputValues(), BugController.id);
        controller.init();
    })


    BugModal.ContainerCloseEvent();



})()


