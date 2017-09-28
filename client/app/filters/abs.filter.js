const AbsFilter = () => {
    'ngInject';

    return value => {
        if (value == null) {
            return value;
        }

        return Math.abs(value);
    };
};

export default AbsFilter;