import EditRouteFormView from '../view/edit-route-form';
import { render, replace, remove, RenderPosition } from '../framework/render.js';
import { UserAction, UpdateType } from '../const.js';
import { onEscKeydownDo } from '../utils/common.js';
import { nanoid } from 'nanoid';

export default class AddRoutePresenter {
  #container;
  #editRouteView;
  #offersModel;
  #destinationsModel;

  #handleDestroy;
  #handleEditorOpen;
  #dataChangeHandler;

  #isFormOpened = false;

  get isOpened() {
    return this.#isFormOpened;
  }

  constructor({ container, offersModel, destinationsModel, handleDataChange, handleDestroy, handleEditorOpen }) {
    this.#container = container;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#dataChangeHandler = handleDataChange;
    this.#handleDestroy = handleDestroy;
    this.handleEditorOpen = handleEditorOpen;
  }

  init() {
    if (this.isOpened) {
      return;
    }

    this.#editRouteView = new EditRouteFormView({ offers: this.#offersModel.offers, destinations: this.#destinationsModel.destinations, onSubmit: this.#handleSubmit, handleEditorOpen: this.#handleEditorOpen, isAddForm: true, onReset: this.#handleReset });

    document.addEventListener('keydown', this.#escKeydownHandler);

    render(this.#editRouteView, this.#container.element, RenderPosition.AFTERBEGIN);
    this.#isFormOpened = true;
  }

  destroy() {
    document.removeEventListener('keydown', this.#escKeydownHandler);
    this.#isFormOpened = false;
    this.#handleDestroy();
    remove(this.#editRouteView);
  }

  #handleReset = (evt) => {
    evt.preventDefault();
    this.destroy();
  };

  #handleSubmit = (newRoute) => {
    this.#dataChangeHandler(UserAction.ADD_TASK, UpdateType.MINOR, { ...newRoute, id: nanoid() });
    this.destroy();
  };

  #escKeydownHandler = onEscKeydownDo(() => this.destroy());
}
