import ApiService from '../framework/api-service.js';

export default class RoutesApiService extends ApiService {
  get routes() {
    return this._load({url: 'points'}).then(RoutesApiService.parseResponse);
  }

  addRoute = async (newRoute) => {
    const response = await this._load({
      url: 'points',
      method: 'POST',
      body: JSON.stringify(newRoute),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    return await RoutesApiService.parseResponse(response);
  };

  deleteRoute = async (route) => {
    const response = await this._load({
      url: `points/${route.id}`,
      method: 'DELETE'
    });

    return response;
  };

  updateRoute = async (update) => {
    const response = await this._load({
      url: `points/${update.id}`,
      method: 'PUT',
      body: JSON.stringify(update),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    return await RoutesApiService.parseResponse(response);
  };

  static adaptToClient(route) {
    const adaptedRoute = {
      ...route,
      price: route['base_price'],
      dateFrom: route['date_from'],
      dateTo: route['date_to'],
      isFavorite: route['is_favorite']
    };

    delete adaptedRoute['base_price'];
    delete adaptedRoute['date_from'];
    delete adaptedRoute['date_to'];
    delete adaptedRoute['is_favorite'];

    return adaptedRoute;
  }

  static adaptToServer(route) {
    const adaptedRoute = {
      ...route,
      'base_price': +route['price'],
      'date_from': route['dateFrom'],
      'date_to': route['dateTo'],
      'is_favorite': route['isFavorite']
    };

    delete adaptedRoute['price'];
    delete adaptedRoute['dateFrom'];
    delete adaptedRoute['dateTo'];
    delete adaptedRoute['isFavorite'];

    return adaptedRoute;
  }
}
