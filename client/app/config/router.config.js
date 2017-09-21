const RouterConfig = 
        ($stateProvider, $urlRouterProvider, $httpProvider) => {
                'ngInject';
                var interceptor = ($q, $location) => {
                    'ngInject';
                    return {
                        request: config => {
                            return config;
                        },

                        response: result => {
                            return result;
                        },

                        responseError: rejection => {
                            console.error('Failed with', rejection.status, 'status');
                            if (rejection.status === 403) {
                                // $location.url('/login');
                            }
                            return $q.reject(rejection);
                        }
                    };
                };

                $httpProvider.interceptors.push(interceptor);

                $stateProvider
                        .state('allQuestions', {
                            url: '/allquestions',
                            template: '<all-questions-base>Loading...</all-questions-base>'
                        })
                        .state('singleQuestion', {
                            url: '/question/:id',
                            template: '<single-question-base>Loading...</single-question-base>',
                            params: { 
                                'id': '0'
                            }
                        });

                $urlRouterProvider.otherwise('/allquestions');
};

export default RouterConfig;