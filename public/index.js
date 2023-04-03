
class BugModal {
    static container = document.getElementById('new-bug-container');
    static content = document.getElementById('new-bug-content');
    static mainContainer = document.querySelector('.main')

    static toggleModal() {
        BugModal.mainContainer.classList.toggle('dim');
        BugModal.container.classList.toggle('show');
        BugModal.content.classList.toggle('open')
    }

    static ContainerCloseEvent() {
        BugModal.container.addEventListener('click', (e) => {
            if (e.target == BugModal.container)
                BugModal.toggleModal();
        })
    }
}


(function () {
    const newBugButton = document.getElementById('new-bug-button')
    newBugButton.addEventListener('click', (e) => {
        BugModal.toggleModal();
    })
    BugModal.ContainerCloseEvent();

})()


