import { BugFetch } from "./BugFetch.class.js";



export class BugController {

    static method = "new";



    constructor() {
        this.currentID = -1;
        this.method = null;

    }

    init(data) {
        switch (this.method) {
            case "new":
                this.addNewBug(data);
                break;
            case "add":
                this.editBug(data, this.currentID);
                break;
        }
    }
    setMethod(method) {
        this.method = method;
    }
    addBugId(bug) {
        this.currentID = bug;
    }

    editBug(bug, id) {

    }
    addNewBug(data) {
        const response = BugFetch.addNew(data);

        response.then(data => {

            return data.text();
        }).then(data => {
            document.querySelector('div.bug_report_container').innerHTML += data;



        })
    }

    clear() {
        this.currentID = -1;
        this.method = null
    }
}