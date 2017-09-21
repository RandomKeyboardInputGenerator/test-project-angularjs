import AppSettings from '../config/app-settings';

import _ from 'lodash'

class ProfileBaseModalController {
    constructor($mdDialog) {
        'ngInject';
        this.appSettings = new AppSettings();
        // Injected data
        this.dialogData = this.data;
        this.dialogRef = $mdDialog;
        
        this.authorId = this.dialogData.userId;
        this.users = this.dialogData.users;
        this.dictionary = this.dialogData.dictionary;
        let questions = this.dialogData.questions;
        
        this.profileAuthor = {
            'id': this.authorId,
            'memberTime': ''
            };
        this.equalJoinTimeUsers = {};
        this.hottestDiscussion = {};

        this.getProfileAuthor();
        this.getUsersWithEqualJoinTime();
        this.getHotestDiscussion(questions);
    }

    closeModal() {
        this.dialogRef.hide();
    }
    
    findUser(userId) {
        return _.find(this.users, 'id', userId);
    }
    
    getAvatar(userId) {
        let src = this.findUser(userId) || this.appSettings.DEFAULT_AVATAR;
        _.isObject(src) ? src = src.avatarSrc : src;
        return this.appSettings.PORTRAITS_DIRECTORY + src;
    }
    
    getProfileAuthor() {
        this.profileAuthor = this.findUser(this.authorId);
    }
    
    getUsersWithEqualJoinTime() {
        let authorId = this.profileAuthor.id;
        let memberTime = this.profileAuthor.memberTime;
        this.equalJoinTimeUsers = _.slice(
            _.filter(this.users, user => { 
                return ( ( user.memberTime === memberTime ) && ( user.id !== authorId ) )
                }),
                0, 3
            );
    }
    
    getUserName(userId) {
        return this.findUser(userId).name;
    }
    
    getHotestDiscussion(questions) {
        this.hottestDiscussion = _.max(questions, question => question.peersInvolved);
    }
}

export default ProfileBaseModalController;
