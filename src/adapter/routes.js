export default class RoutesAdapter {
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
