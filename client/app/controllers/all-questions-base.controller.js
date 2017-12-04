import AppSettings from '../config/app-settings';

import _ from 'lodash';

class AllQuestionsBaseController {
    constructor(dbService, $window, $scope, $mdDialog, $rootElement) {
        'ngInject';

        this.dialog = $mdDialog;
        this.dataService = dbService;
        this.window = $window;
        this.scope = $scope;
        this.rootElement = $rootElement;
    }
    
    $onInit() {
        this.appSettings = new AppSettings();
        this.userId = this.appSettings.DEFAULT_USER_ID;
        this.radioFilter = 'all';
        this.sortOrder = 'recent';
        this.searchQueryBuffor = '';
        this.searchQuery = '';
        this.visableComments = 4;
        this.visableQuestions = 3;
        this.dictionary = {};
        this.questions = [];
        this.comments = [];
        this.users = [];
        this.data = {};
        
        this.checkCommentsVisibility(this.window.innerWidth);
        
        this.getDictionary();
        this.getComments();
        this.getUsers();
        
        let appWindow = angular.element(this.window);
        // Window's resize watcher
        appWindow.bind('resize', () => {
            this.checkCommentsVisibility(this.window.innerWidth);
            // $scope update after changes
            this.scope.$apply();
        });
    }
    
    checkCommentsVisibility(windowWidth) {
        if (windowWidth < this.appSettings.FULL_VIEW_MODE_MIN_WIDTH) {  
            this.visableComments = 1; 
        } else { 
            this.visableComments = 4; 
        }
    }
    
    openModal(userId) {
        this.data = { 
            userId, 
            'users': this.users, 
            'dictionary': this.dictionary, 
            'questions': this.questions 
        };
        this.dialog.show({
            template: '<profile-base-modal data="allQuestionsBase.data"></profile-base-modal>',
            parent: this.rootElement.find('all-questions-base'),
            scope: this.scope,
            preserveScope: true,
            fullscreen: true,
            disableParentScroll: true,
            focusOnOpen: true,
            hasBackdrop: true,
            autoWrap: true,
            escapeToClose: true,
            clickOutsideToClose: true
        });
    }
    
    changeQuestionsSortOrder(order) {
        this.sortOrder = order;
        this.sortQuestions();
    }
    
    isSortOrderEqual(order) {
        return this.sortOrder === order;
    }
    
    isSortOrderNotEqual(order) {
        return !this.isSortOrderEqual(order);
    }
    
    sortQuestions() {
        if (this.sortOrder === 'recent') {
            this.questions = _.sortBy(this.questions, 'lastTimeDiscusedDays');
        } else {
            this.questions = _.sortBy(this.questions, 'peersInvolved');
            this.questions = _.reverse(this.questions);
        }
    }
    
    getComment(id) {
        const index = _.findIndex(this.comments, comment => comment.id === id);
        return this.comments[index];
    }
    
    showMoreQuestions() {
        this.visableQuestions += 3;
    }
    
    getDictionary() {
        this.dataService.getDictionary().then(dictionary => {
                    this.dictionary = dictionary;
                    this.appSettings.setLoadedStatus('dictionary');
                });
    }
    
    getQuestions() {
        this.dataService.getQuestions().then(questions => {
                    this.questions = questions;
                    let author = {name: ''};
                    _.forEach(this.questions, (question, index, questions) => {
                        author = this.findUser(question.authorId);
                        question.author = author.name;
                        questions[index] = question;
                    });
                    this.sortQuestions();
                    this.appSettings.setLoadedStatus('questions');
                });
    }
    
    getComments() {
        this.dataService.getCommments().then(comments => {
                    this.comments = comments;
                    this.appSettings.setLoadedStatus('comments');
                });
    }
    
    getAvatars() {
        this.dataService.getAvatars().then(avatars => {
                        let avatar = {};
                        _.forEach(this.users, (user, index, users) => {
                            avatar = _.find(avatars, avatar => avatar.id === user.avatarId);
                            // Remove needless keys and merge the objects
                            users[index] = _.assign(_.omit(user, 'avatarId'), _.omit(avatar, 'id'));
                        });
                        this.appSettings.setLoadedStatus('users');
                    });
    }
    
    findUser(userId) {
        return _.find(this.users, 'id', userId);
    }
    
    getAvatar(userId) {
        let src = this.findUser(userId) || this.appSettings.DEFAULT_AVATAR;
        _.isObject(src) ? src = src.avatarSrc : src;
        return this.appSettings.PORTRAITS_DIRECTORY + src;
    }
    
    getUsers() {
        this.dataService.getUsers().then(users => {
                        this.users = users;
                        this.getAvatars();
                        this.getQuestions();
                    });
    }
    
    getUserName(userId) {
        return this.findUser(userId).name;
    }

    searchQuestions() {
        this.searchQuery = this.searchQueryBuffor;
    }
}

export default AllQuestionsBaseController;