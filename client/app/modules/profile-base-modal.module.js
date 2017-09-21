import angular from 'angular';
import ProfileBaseModalComponent from '../components/profile-base-modal.component';

const ProfileBaseModalModule = angular.module('profileBaseModal', [])
        .component('profileBaseModal', ProfileBaseModalComponent);
  
export default ProfileBaseModalModule;