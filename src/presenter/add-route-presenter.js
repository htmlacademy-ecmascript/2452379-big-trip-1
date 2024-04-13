import EditRouteFormView from '../view/edit-route-form';
import { render, remove, RenderPosition } from '../framework/render.js';
import { UserAction, UpdateType } from '../const.js';
import { onEscKeydownDo } from '../utils/common.js';

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

    this.#editRouteView = new EditRouteFormView({ offers: this.#offersModel.offers, destinations: this.#destinationsModel.destinations, handleSubmit: this.#handleSubmit, handleEditorOpen: this.#handleEditorOpen, isAddForm: true, onReset: this.#handleReset });

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

  setSaving() {
    this.#editRouteView.updateElement({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    const resetState = () => this.#editRouteView.updateElement({ isDisabled: false, isSaving: false, isDeleting: false });
    this.#editRouteView.shake(resetState);
  }

  #handleReset = (evt) => {
    evt.preventDefault();
    this.destroy();
  };

  #handleSubmit = (newRoute) => {
    this.#dataChangeHandler(UserAction.ADD_TASK, UpdateType.MINOR, newRoute);
  };

  #escKeydownHandler = onEscKeydownDo(() => this.destroy());
}
