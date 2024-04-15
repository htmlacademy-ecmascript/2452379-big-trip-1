import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = () => `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title"></h1>

    <p class="trip-info__dates"></p>
  </div>

  <p class="trip-info__cost">
    Total: €&nbsp;<span class="trip-info__cost-value"></span>
  </p>
</section>`;

export default class TravelInfoView extends AbstractView {
  init({ title, dates, cost }) {
    this.element.querySelector('.trip-info__title').textContent = title;
    this.element.querySelector('.trip-info__dates').textContent = dates;
    this.element.querySelector('.trip-info__cost-value').textContent = cost;
  }

  get template() {
    return createTemplate();
  }
}
