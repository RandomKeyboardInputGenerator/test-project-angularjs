import angular from 'angular';
import SingleQuestionBaseComponent from '../components/single-question-base.component';

const SingleQuestionBaseModule = angular.module('singleQuestionBase', [])
        .component('singleQuestionBase', SingleQuestionBaseComponent);
  
export default SingleQuestionBaseModule;