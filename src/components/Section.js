export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(data) {
        data.reverse().forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}
