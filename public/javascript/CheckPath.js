export function checkEventPathForClass(path, selector) {
    for (let i = 0; i < path.length; i++) {

        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}
