import template from '../templates/profile-base-modal.component.jade';
import controller from '../controllers/profile-base-modal.controller.js';
import '../styles/profile-base-modal.component.scss';

let ProfileBaseModalComponent = {
  restrict: 'E',
  bindings: {
      data: '<'
  },
  template,
  controller,
  controllerAs: 'profileBaseModal'
};
export default ProfileBaseModalComponent;