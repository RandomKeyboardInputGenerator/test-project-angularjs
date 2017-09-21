import template from '../templates/single-question-base.component.jade';
import controller from '../controllers/single-question-base.controller.js';
import '../styles/single-question-base.component.scss';

let SingleQuestionBaseComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'singleQuestionBase'
};
export default SingleQuestionBaseComponent;