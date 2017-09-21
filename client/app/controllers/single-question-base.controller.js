import AppSettings from '../config/app-settings';

import _ from 'lodash'

class SingleQuestionBaseController {
    constructor(dbService, $stateParams, $window, $mdDialog, $scope, $rootElement) {
        'ngInject';
        this.dialog = $mdDialog;
        this.dataService = dbService;
        this.questionId = +$stateParams.id || 0;
        this.location = $window.history;
        
        this.appSettings = new AppSettings();
        this.userId = this.appSettings.DEFAULT_USER_ID;
        this.user = {
            'votedComments': [],
            'votedQuestions': []
        };
        this.users = [];
        this.question = {};
        this.relatedComments = [];
        this.subRelatedComments = [];
        this.dictionary = {};
        this.questions = {};
        this.voteEnable = true;
        this.data = {};
        this.scope = $scope;
        this.rootElement = $rootElement;
        
        this.getDictionary();
        this.getRelatedComments(this.questionId);
        this.getUsers();
    }
    
    openModal(userId) {
        this.data = { 
            'userId': userId, 
            'users': this.users, 
            'dictionary': this.dictionary, 
            'questions': this.questions 
        };
        this.dialog.show({
            template: '<profile-base-modal data="singleQuestionBase.data"></profile-base-modal>',
            parent: this.rootElement.find('single-question-base'),
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

    getRelatedComments(questionId) {
        this.dataService.getCommmentsOnTheQuestion(questionId).then(
            comments => {
                this.relatedComments = _.filter(comments, comment => comment.type === 'ANSWERED');
                this.subRelatedComments = _.filter(comments, comment => comment.type === 'COMMENTED');
                this.appSettings.setLoadedStatus('comments');
            }
        );
    }

    getQuestions(questionId) {
        this.dataService.getQuestions().then(
            questions => {
                this.questions = questions;
                this.question = _.find(this.questions, question => question.id === questionId);
                this.appSettings.setLoadedStatus('questions');
            }
        );
    }

    getDictionary() {
        this.dataService.getDictionary().then(
            dictionary => {
                this.dictionary = dictionary;
                this.appSettings.setLoadedStatus('dictionary');
            }
        );
    }

    isUserNotVoteOnComment(commentId) {
        return _.indexOf(this.user.votedComments, commentId) === -1;
    }

    isCommentVotingEnabled(commentId) {
        return this.voteEnable && this.isUserNotVoteOnComment(commentId);
    }

    isCommentVotingDisabled(commentId) {
        return !this.isCommentVotingEnabled(commentId);
    }

    commentUpVote(comment) {
        if (this.isCommentVotingEnabled(comment.id)) {
            this.voteEnable = false;
            this.dataService.commmentUpVote(comment).then(
                () => {
                    this.user.votedComments.push(comment.id);
                    this.saveUser();
                }
            );
        }
    }

    commentDownVote(comment) {
        if (this.isCommentVotingEnabled(comment.id)) {
            this.voteEnable = false;
            this.dataService.commentDownVote(comment).then(
                () => {
                    this.user.votedComments.push(comment.id);
                    this.saveUser();
                }
            );
        }
    }

    isUserNotVoteOnQuestion(questionId) {
        return _.indexOf(this.user.votedQuestions, questionId) === -1;
    }

    isQuestionVotingEnabled(questionId) {
        return this.voteEnable && this.isUserNotVoteOnQuestion(questionId);
    }

    isQuestionVotingDisabled(questionId) {
        return !this.isQuestionVotingEnabled(questionId);
    }

    questionUpVote(question) {
        if (this.isQuestionVotingEnabled(question.id)) {
            this.voteEnable = false;
            this.dataService.questionUpVote(question).then(
                () => {
                    this.user.votedQuestions.push(question.id);
                    this.saveUser();
                }
            );
        }
    }

    questionDownVote(question) {
        if (this.isQuestionVotingEnabled(question.id)) {
            this.voteEnable = false;
            this.dataService.questionDownVote(question).then(
                () => {
                    this.user.votedQuestions.push(question.id);
                    this.saveUser();
                }
            );
        }
    }

    countVotes(target) {
        return target.upvotes - target.downvotes;
    }

    getUser(userId) {
        this.user = this.findUser(userId);
        this.appSettings.setLoadedStatus('users');
    }

    saveUser() {
        this.dataService.saveUser(this.user).then(() => this.voteEnable = true);
    }

    getAvatars() {
        this.dataService.getAvatars().then(
            avatars => {
                let avatar = {};
                _.forEach(this.users, (user, index, users) => {
                    avatar = _.find(avatars, avatar => avatar.id === user.avatarId);
                    // Remove needless keys and merge the objects
                    users[index] = _.assign(_.omit(user, 'avatarId'), _.omit(avatar, 'id'));
                });
                this.getUser(this.userId);
            }
        );
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
        this.dataService.getUsers().then(
            users => {
                this.users = users;
                this.getAvatars();
                this.getQuestions(this.questionId);
            }
        );
    }

    getUserName(userId) {
        return this.findUser(userId).name;
    }

    goBackButton() {
        this.location.back();
    }
}

export default SingleQuestionBaseController;
