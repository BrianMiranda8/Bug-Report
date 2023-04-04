import { BugFetch } from "./BugFetch.class.js";


export class BugController {

    static method = "new";

    static id = 0;

    constructor(data, id) {
        this.bug = data;
        this.id = id;
    }

    init() {
        switch (BugController.method) {
            case "new":
                this.addNew(this.bug);
                break;
            case "add":
                this.editBug(this.bug, this.id)
                break;
        }
    }

    addNew(bug) {
        let response = BugFetch.addNew(bug);
        response.then(data => console.log(data))
    }

    editBug(bug, id) {

    }
    validateBug(bug) {

    }
}