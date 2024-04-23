import DestinationsModel from './model/destinations.js';
import OffersModel from './model/offers.js';
import RoutesModel from './model/routes.js';
import DestinationsApiService from './api/destinations-api-service.js';
import OffersApiService from './api/offers-api-service.js';
import RoutesApiService from './api/routes-api-service.js';
import Presenter from './presenter/presenter.js';

const AUTHORIZATION = 'Basic kartafil';
const END_POINT = 'https://20.objects.htmlacademy.pro/big-trip';

const routesModel = new RoutesModel(new RoutesApiService(END_POINT, AUTHORIZATION));
const offersModel = new OffersModel(new OffersApiService(END_POINT, AUTHORIZATION));
const destinationsModel = new DestinationsModel(new DestinationsApiService(END_POINT, AUTHORIZATION));

const presenter = new Presenter({
  routesModel,
  offersModel,
  destinationsModel
});

presenter.init();
Promise.all([ offersModel.init(), destinationsModel.init()])
  .then(() => routesModel.init())
  .catch(() => presenter.showErrorMessage());

