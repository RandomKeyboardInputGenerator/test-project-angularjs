import _ from 'lodash'

class DbService {
    constructor($http, $timeout, dataService) { 
        'ngInject';
        
        this.fakeHttp = dataService;
    }
    
    getFromDatabase(resource) {
        return this.fakeHttp.get(resource)
            .then(response => response)
            .catch(this.handleError);
    }
    
    putToDatabase(resource, newEntry) {
        return this.fakeHttp.put(resource, newEntry)
            .then()
            .catch(this.handleError);
    }
    
    getDictionary() {
        return this.getFromDatabase('dictionary');
    }
    
    getQuestions() {
        return this.getFromDatabase('questions');
    }
    
    getQuestion(questionId) {
        return this.getFromDatabase('questions/' + questionId);
    }
    
    getCommments() {
        return this.getFromDatabase('comments');
    }
    
    getCommmentsOnTheQuestion(questionId) {
        return this.getFromDatabase('comments/?qId=' + questionId);
    }
    
    commmentVote(comment) {
        return this.putToDatabase('comments/' + comment.id, comment);
    }
    
    questionVote(question) {
        return this.putToDatabase('questions/' + question.id, question);
    }
    
    upVote(entry) {
        entry.upvotes += 1;
        return entry;
    }
    
    downVote(entry) {
        entry.downvotes += 1;
        return entry;
    }
    
    commmentUpVote(comment) {
        return this.commmentVote(this.upVote(comment));
    }
    
    commentDownVote(comment) {
        return this.commmentVote(this.downVote(comment));
    }
    
    questionUpVote(question) {
        return this.questionVote(this.upVote(question));
    }
    
    questionDownVote(question) {
        return this.questionVote(this.downVote(question));
    }
    
    getUsers() {
        return this.getFromDatabase('authors');
    }
    
    getUser(userId) {
        return this.getFromDatabase('authors/' + userId);
    }
    
    saveUser(user) {
        return this.putToDatabase('authors/' + user.id, user);
    }
    
    getAvatar(avatarId) {
        return this.getFromDatabase('avatars/' + avatarId);
    }
    
    getAvatars() {
        return this.getFromDatabase('avatars');
    }
    
    handleError(error) {
        console.error('An error occurred', error);
    }
};

export default DbService;