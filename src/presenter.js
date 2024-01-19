import { FilterView } from './view/filter.js';
import { FiltersFormView } from './view/filters-form.js';
import { SortView } from './view/sort.js';
import { SortsFormView } from './view/sorts-form.js';
import { RouteView } from './view/route.js';
import { RoutesContainerView } from './view/routes-container.js';
import { AddRouteFormView } from './view/add-route-form.js';
import { EditRouteFormView } from './view/edit-route-form.js';
import RoutesModel from './model/route.js';
import { render, RenderPosition } from './render.js';

class Presenter {
  constructor() {
    this.routesModel = new RoutesModel();
    this.routes = [...this.routesModel.getRoutes()];
    this.EditRouteForm = new EditRouteFormView(this.routes.shift());
    this.routeViews = this.routes.map((route) => new RouteView(route));
    this.filtersForm = new FiltersFormView();
    this.sortsForm = new SortsFormView();
    this.routesContainer = new RoutesContainerView();
    this.filters = [
      new FilterView('Everything', 'everything'), new FilterView('Future', 'future'),
      new FilterView('Present', 'present'), new FilterView('Past', 'past')
    ];
    this.sorts = [
      new SortView('Day', 'day'), new SortView('Route', 'event'), new SortView('Time', 'time'),
      new SortView('Price', 'price'), new SortView('Offers', 'offers')
    ];
    this.addRouteForm = new AddRouteFormView();
  }

  present() {
    render(this.filtersForm, document.querySelector('.trip-controls__filters'));
    render(this.sortsForm, document.querySelector('.trip-events'));
    render(this.routesContainer, this.sortsForm.element, RenderPosition.AFTEREND);
    render(this.EditRouteForm, this.routesContainer.element);

    this.filters.forEach((filter) => render(filter, this.filtersForm.element));
    this.sorts.forEach((sort) => render(sort, this.sortsForm.element));
    this.routeViews.forEach((route) => render(route, this.routesContainer.element));
  }
}

export { Presenter };
