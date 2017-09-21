import _ from 'lodash'

const LimitCommentsByAnswerFilter = () => {
    'ngInject';
    
    return (comments, answerId) => {
        if (comments == null) return comments;

        return _.filter(comments, comment => comment.answerId === answerId);
    };
};

export default LimitCommentsByAnswerFilter;