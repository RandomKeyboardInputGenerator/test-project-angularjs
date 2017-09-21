import angular from 'angular';

import AbsFilter from '../filters/abs.filter';
import LimitCommentsByAnswerFilter from '../filters/limit-comments-by-answer.filter';
import LimitQuestionsByAuthorFilter from '../filters/limit-questions-by-author.filter';
import SearchFilter from '../filters/search.filter';

const FiltersModule = angular.module('filters', [])
        .filter('abs', AbsFilter)
        .filter('limitCommentsByAnswer', LimitCommentsByAnswerFilter)
        .filter('limitQuestionsByAuthor', LimitQuestionsByAuthorFilter)
        .filter('search', SearchFilter);
  
export default FiltersModule;