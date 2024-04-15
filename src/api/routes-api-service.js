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
}
