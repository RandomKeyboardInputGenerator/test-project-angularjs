import angular from 'angular';
import AllQuestionsBaseComponent from '../components/all-questions-base.component';

const AllQuestionsBaseModule = angular.module('allQuestionsBase', [])
        .component('allQuestionsBase', AllQuestionsBaseComponent);
  
export default AllQuestionsBaseModule;