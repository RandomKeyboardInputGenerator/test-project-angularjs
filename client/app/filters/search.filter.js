import _ from 'lodash'

const SearchFilter = () => {
        'ngInject';
        
        return (questions, term) => {
            if (questions == null) return questions;
        
            if (term === '') return questions;

            // To improve efficiency remove capitalization
            let _term = term.toLowerCase();
            return _.filter(questions, question => { 
                // Search by title and author name
                return ( _.includes(question.author.toLowerCase(), _term) || _.includes(question.title.toLowerCase(), _term) ); 
            });
        };
};

export default SearchFilter;