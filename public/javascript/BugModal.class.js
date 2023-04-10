export class BugModal {

    static container = document.getElementById('new-bug-container');
    static content = document.getElementById('new-bug-content');
    static header = document.querySelector('h1.new_bug_header');
    static inputs = Array.from(document.getElementsByName('modal-input'));
    static button = document.getElementById('save-bug');


    static toggleModal() {
        let x = document.querySelector('.main').classList.toggle('dim');
        let y = BugModal.container.classList.toggle('show');
        let z = BugModal.content.classList.toggle('open')
        this.inputs[0].focus();
        if (!x) {
            BugModal.clearInputs()
            BugModal.changeHeaderText('What is Buggin')
        }
    }

    static ContainerCloseEvent() {
        BugModal.container.addEventListener('click', (e) => {
            if (e.target == BugModal.container)
                BugModal.toggleModal();
        })
    }

    static changeHeaderText(text) {
        BugModal.header.innerText = text;
    }

    static clearInputs() {
        BugModal.inputs.forEach(input => {
            input.value = ''
        })
    }

    static getInputValues() {
        return {
            problem: BugModal.inputs[2].value,
            title: BugModal.inputs[0].value,
            area: BugModal.inputs[1].value,
            image: ''
        }
    }

    constructor(id, title, area, problem, image = null) {
        BugModal.changeHeaderText('Edit Bug')
        this.id = id;
        this.title = title;
        this.area = area;
        this.problem = problem;
        this.image = image;
    }

    fill() {
        BugModal.inputs[0].value = this.title;
        BugModal.inputs[1].value = this.area;
        BugModal.inputs[2].value = this.problem;

    }


}