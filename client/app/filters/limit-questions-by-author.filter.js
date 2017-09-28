import _ from 'lodash';

const LimitQuestionsByAuthorFilter = () => {
    'ngInject';

    return (questions, mode, id) => {
        if (questions == null) {
            return questions;
        }

        if (mode === 'all') {
            return questions;
        }

        return _.filter(questions, question => question.authorId === id);
    };
};

export default LimitQuestionsByAuthorFilter;