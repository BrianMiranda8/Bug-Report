export function URLPath() {
    const url = new URL(window.location);
    const origin = url.origin;


    return ` ${origin}/bugapi/index.php/bug/`;
}