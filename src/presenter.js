import { FilterComponent } from './view/filter.js';
import { FiltersFormComponent } from './view/filters-form.js';
import { SortComponent } from './view/sort.js';
import { SortsFormComponent } from './view/sorts-form.js';
import { EventComponent } from './view/event.js';
import { EventsContainerComponent } from './view/events-container.js';
import { AddEventFormComponent } from './view/add-event-form.js';
import { EditEventFormComponent } from './view/edit-event-form.js';
import { render, RenderPosition } from './render.js';

class Presenter {
  constructor() {
    this.filtersForm = new FiltersFormComponent();
    this.sortsForm = new SortsFormComponent();
    this.eventsContainer = new EventsContainerComponent();
    this.filters = [
      new FilterComponent('Everything', 'everything'), new FilterComponent('Future', 'future'),
      new FilterComponent('Present', 'present'), new FilterComponent('Past', 'past')
    ];
    this.sorts = [
      new SortComponent('Day', 'day'), new SortComponent('Event', 'event'), new SortComponent('Time', 'time'),
      new SortComponent('Price', 'price'), new SortComponent('Offers', 'offers')
    ];
    this.addEventForm = new AddEventFormComponent();
    this.events = [
      new EditEventFormComponent(), new EventComponent(), new EventComponent(), new EventComponent()
    ];
  }

  present() {
    render(this.filtersForm, document.querySelector('.trip-controls__filters'));
    render(this.sortsForm, document.querySelector('.trip-events'));
    render(this.eventsContainer, this.sortsForm.element, RenderPosition.AFTEREND);
    render(this.addEventForm, this.eventsContainer.element);

    this.filters.forEach((filter) => render(filter, this.filtersForm.element));
    this.sorts.forEach((sort) => render(sort, this.sortsForm.element));
    this.events.forEach((event) => render(event, this.eventsContainer.element));
  }
}

export { Presenter };
