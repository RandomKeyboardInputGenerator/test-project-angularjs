import template from '../templates/all-questions-base.component.jade';
import controller from '../controllers/all-questions-base.controller.js';
import '../styles/all-questions-base.component.scss';

let AllQuestionsBaseComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'allQuestionsBase'
};
export default AllQuestionsBaseComponent;