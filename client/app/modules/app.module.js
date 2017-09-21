import 'bootstrap-css-only';
import 'normalize.css';
import 'angular-material/angular-material.css';
import '../../styles.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngMaterial from 'angular-material';

import DbService from '../services/db.service';
import DataService from '../services/data.service';
import RouterConfig from '../config/router.config';

import AllQuestionsBase from '../modules/all-questions-base.module';
import SingleQuestionBase from '../modules/single-question-base.module';
import ProfileBaseModal from '../modules/profile-base-modal.module';
import FiltersModule from '../modules/filters.module';

angular.module('app', [
    uiRouter,
    ngResource,
    ngMaterial,

    AllQuestionsBase.name,
    SingleQuestionBase.name,
    ProfileBaseModal.name,
    FiltersModule.name
])
.service('dbService', DbService)
.service('dataService', DataService)
.config(RouterConfig);