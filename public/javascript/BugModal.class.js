export class BUGMODAL {

    static container = document.getElementById('new-bug-container');
    static content = document.getElementById('new-bug-content');
    static header = document.querySelector('h1.new_bug_header');
    static inputs = Array.from(document.getElementsByName('modal-input'));
    static button = document.getElementById('save-bug');


    static toggleModal() {
        let x = document.querySelector('.main').classList.toggle('dim');
        let y = BUGMODAL.container.classList.toggle('show');
        let z = BUGMODAL.content.classList.toggle('open')
        this.inputs[0].focus();
        if (!x) {
            BUGMODAL.clearInputs()
            BUGMODAL.changeHeaderText('What is Buggin')
        }
    }

    static ContainerCloseEvent() {
        BUGMODAL.container.addEventListener('click', (e) => {
            if (e.target == BUGMODAL.container)
                BUGMODAL.toggleModal();
        })
    }

    static changeHeaderText(text) {
        BUGMODAL.header.innerText = text;
    }

    static clearInputs() {
        BUGMODAL.inputs.forEach(input => {
            input.value = ''
        })
    }

    static getInputValues() {
        return {
            problem: BUGMODAL.inputs[2].value,
            title: BUGMODAL.inputs[0].value,
            area: BUGMODAL.inputs[1].value,
            image: ''
        }
    }

    constructor(id, title, area, problem, image = null) {
        BUGMODAL.changeHeaderText('Edit Bug')
        this.id = id;
        this.title = title;
        this.area = area;
        this.problem = problem;
        this.image = image;
    }

    insertModalInfo() {
        BUGMODAL.inputs[0].value = this.title;
        BUGMODAL.inputs[1].value = this.area;
        BUGMODAL.inputs[2].value = this.problem;

    }


}