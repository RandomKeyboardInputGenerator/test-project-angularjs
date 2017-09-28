import _ from 'lodash';

export default class DataService {
    constructor($timeout) {
        'ngInject';
        this.timeout = $timeout;
        this.delay = 500;
        
        const dictionary = {
            'peersAnswered': 'peers already answered',
            'newAnswerButton': 'GIVE new answer',
            'commentButton': 'COMMENT',
            'continueDiscussionButton': 'CONTINUE discussion',
            'upVote': 'upvotes',
            'downVote': 'downvotes',
            'commentAuthorDescription': 'COMMENTED IT',
            'unfollowButton': 'unfollow',
            'lastDiscussionTimeDescription': 'Last time discussed',
            'lastDiscussionTimeStatic': '1 day ago',
            'questionTitle': 'QUESTION',
            'questionsTitle': 'QUESTIONS',
            'countCommentsDescription': 'more activities',
            'sortByRecent': 'recent',
            'sortByHot': 'hot',
            'sortingDescription': ['Sort by:', 'or'],
            'searchButton': 'SEARCH',
            'radioMyself': 'My shelf',
            'radioAll': 'All questions',
            'relatedDiscussion': 'related discusion',
            'peersInvolved': 'peers involved',
            'conversations': 'conversations',
            'loadMoreButton': 'load more questions',
            'memberTime': 'MEMBER FOR',
            'lastLogTime': 'LAST SEEN',
            'activityLevel': 'ACTIVITY LEVEL',
            'modalTitles': [
                'How it all started',
                'THAT\'S WHERE WE HAVE BEEN',
                'THESE 5 MONTHS AGO',
                'WHO JOINED THE PLATFORM',
                'THAT SAME PERIOD',
                'THE HOTTEST DISCUSSION THESE DAYS'
            ],
            'peers': 'peers',
            'discussions': 'discussions',
            'findings': 'findings',
            'questions': 'questions',
            'questionAuthorDescription': ['ASKED', 'IS ASKING:']
        };

        let authors = [
            {
                'id': 0,
                'name': 'Dr. Halima',
                'avatarId': 0,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 1,
                'name': 'Eva',
                'avatarId': 1,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': [0,3] // The user is an author of questions ids: 0 and 3
            },
            {
                'id': 2,
                'name': 'Andrew',
                'avatarId': 2,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 3,
                'name': 'Joseph',
                'avatarId': 3,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 4,
                'name': 'Tom',
                'avatarId': 4,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 5,
                'name': 'Anna',
                'avatarId': 5,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 6,
                'name': 'Tom Hanks',
                'avatarId': 6,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 7,
                'name': 'Bill Gates',
                'avatarId': 7,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 8,
                'name': 'Frank',
                'avatarId': 8,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 9,
                'name': 'Paulina',
                'avatarId': 9,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 10,
                'name': 'Tom Cruise',
                'avatarId': 10,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 11,
                'name': 'Brad Pitt',
                'avatarId': 11,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 12,
                'name': 'John Depp',
                'avatarId': 12,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 13,
                'name': 'Ed',
                'avatarId': 13,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 14,
                'name': 'Bruce Willis',
                'avatarId': 14,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 15,
                'name': 'Arnold Schwarzenegger',
                'avatarId': 15,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 16,
                'name': 'Sylvia',
                'avatarId': 16,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 17,
                'name': 'Patricia',
                'avatarId': 17,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 18,
                'name': 'David',
                'avatarId': 18,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 19,
                'name': 'Joseph',
                'avatarId': 19,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 20,
                'name': 'Uma Thurman',
                'avatarId': 20,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 21,
                'name': 'Triss Merigold',
                'avatarId': 21,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 22,
                'name': 'James T. Kirk',
                'avatarId': 22,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 23,
                'name': 'Drizzt Do\'Urden',
                'avatarId': 23,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 24,
                'name': 'Geralt',
                'avatarId': 24,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            },
            {
                'id': 25,
                'name': 'Vladimir Putin',
                'avatarId': 26,
                'memberTime': '5 months',
                'lastLogTime': 'Saturday afternoon',
                'peers': 46,
                'discussions': 29,
                'findings': 19,
                'questions': 10,
                'votedComments': [],
                'votedQuestions': []
            }
        ];
        
        let avatars = [
            {   'id': 0,    'avatarSrc': 'adelaide_hanscom1.png'   },
            {   'id': 1,    'avatarSrc': 'alessandro_allori1.png'   },
            {   'id': 2,    'avatarSrc': 'alexandre_cabanel1.png'   },
            {   'id': 3,    'avatarSrc': 'alexei_harlamov1.png'   },
            {   'id': 4,    'avatarSrc': 'alexey_petrovich_antropov1.png'   },
            {   'id': 5,    'avatarSrc': 'alice_pike_barney1.png'   },
            {   'id': 6,    'avatarSrc': 'aman_theodor1.png'   },
            {   'id': 7,    'avatarSrc': 'antonello_messina1.png'   },
            {   'id': 8,    'avatarSrc': 'antonio_herrera_toro1.png'   },
            {   'id': 9,    'avatarSrc': 'benjamin-constant1.png'   },
            {   'id': 10,    'avatarSrc': 'benoist_marie-guillemine1.png'   },
            {   'id': 11,    'avatarSrc': 'bouguereau_william-adolphe1.png'   },
            {   'id': 12,    'avatarSrc': 'byron1.png'   },
            {   'id': 13,    'avatarSrc': 'carl_fredric_breda1.png'   },
            {   'id': 14,    'avatarSrc': 'cramacj_lucas1.png'   },
            {   'id': 15,    'avatarSrc': 'cristobal_rojas1.png'   },
            {   'id': 16,    'avatarSrc': 'delacroix_eugene_ferdinand_victor1.png'   },
            {   'id': 17,    'avatarSrc': 'domenikos_theotokopoulos1.png'   },
            {   'id': 18,    'avatarSrc': 'edmund_blair_leighton1.png'   },
            {   'id': 19,    'avatarSrc': 'edwin_longsden_long1.png'   },
            {   'id': 20,    'avatarSrc': 'falero_luis_ricardo1.png'   },
            {   'id': 21,    'avatarSrc': 'felix_bonfils1.png'   },
            {   'id': 22,    'avatarSrc': 'francesco_hayez1.png'   },
            {   'id': 23,    'avatarSrc': 'francisco_goya_lucientes1.png'   },
            {   'id': 24,    'avatarSrc': 'francisco_zurbaran1.png'   },
            {   'id': 25,    'avatarSrc': 'franz_von_defregger1.png'   },
            {   'id': 26,    'avatarSrc': 'frederic_westin1.png'   }
        ];

        let questions = [
            {
                'id': 0,
                'authorId': 1,
                'title': 'Will insulin make my patient gain weight?',
                'relatedDiscussion': 2,
                'peersInvolved': 7,
                'conversations': 3,
                'comments': [0, 1, 2, 3, 4, 5, 6],
                'content': 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris.',
                'downvotes': 0, 'upvotes': 19,
                'peersAnswered': 3,
                'lastTimeDiscusedDays': 1
            },
            {
                'id': 1,
                'authorId': 2,
                'title': 'Vegan diet in diabetes treatment?',
                'relatedDiscussion': 2,
                'peersInvolved': 9,
                'conversations': 5,
                'comments': [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                'content': 'Suspendisse tincidunt suscipit felis ut egestas. Quisque luctus, justo nec tristique condimentum, felis enim tempor ipsum, vel molestie erat justo sed enim. Duis sit amet ipsum justo. Vestibulum tempus nisi velit, in rutrum lorem sollicitudin id. Curabitur a congue tortor. ',
                'downvotes': 10, 'upvotes': 21,
                'peersAnswered': 4,
                'lastTimeDiscusedDays': 1
            },
            {
                'id': 2,
                'authorId': 3,
                'title': 'Vegan diet to stop diabetes progress',
                'relatedDiscussion': 5,
                'peersInvolved': 4,
                'conversations': 0,
                'comments': [17, 18, 19],
                'content': 'Pellentesque id interdum turpis. Maecenas vestibulum augue sapien, et auctor nibh tincidunt sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                'downvotes': 5, 'upvotes': 12,
                'peersAnswered': 2,
                'lastTimeDiscusedDays': 1
            }, 
            {
                'id': 3,
                'authorId': 1,
                'title': 'How do you do?',
                'relatedDiscussion': 5,
                'peersInvolved': 11,
                'conversations': 2,
                'comments': [20, 21, 22, 23, 24, 25, 26],
                'content': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur auctor tristique tellus non vulputate.',
                'downvotes': 10, 'upvotes': 19,
                'peersAnswered': 3,
                'lastTimeDiscusedDays': 2
            },
            {
                'id': 4,
                'authorId': 4,
                'title': 'Do you like eat pizza?',
                'relatedDiscussion': 6,
                'peersInvolved': 1,
                'conversations': 8,
                'comments': [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                'content': 'Cras malesuada sollicitudin risus. Nullam aliquam, lectus sit amet tincidunt pharetra, libero urna rhoncus nisl, non rutrum metus magna a ante. Ut malesuada metus et lacinia aliquet.',
                'downvotes': 10, 'upvotes': 31,
                'peersAnswered': 4,
                'lastTimeDiscusedDays': 3
            },
            {
                'id': 5,
                'authorId': 5,
                'title': 'What’s the funniest joke you know?',
                'relatedDiscussion': 12,
                'peersInvolved': 11,
                'conversations': 13,
                'comments': [37, 38, 39],
                'content': 'Vivamus feugiat porttitor tellus ut dictum. Aenean pulvinar mauris ut eros commodo, sit amet bibendum lectus fringilla. Nullam arcu est, maximus a ipsum nec, molestie pellentesque velit.',
                'downvotes': 2, 'upvotes': 12,
                'peersAnswered': 2,
                'lastTimeDiscusedDays': 4
            }
        ];

        let comments = [
            {
                'id': 0, 'qId': 0, 'authorId': 6, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 19, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.'
            },
            {
                'id': 1, 'qId': 0, 'authorId': 7, 'time': 'yesterday', 'downvotes': 2, 'upvotes': 5, 'type': 'COMMENTED', 'answerId': 0,
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                'id': 2, 'qId': 0, 'authorId': 8, 'time': 'yesterday', 'downvotes': 1, 'upvotes': 3, 'type': 'COMMENTED', 'answerId': 0,
                'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                'id': 3, 'qId': 0, 'authorId': 9, 'time': 'two days', 'downvotes': 0, 'upvotes': 6, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Quisque tincidunt purus ipsum, at elementum arcu consectetur vitae. Fusce nec arcu arcu.'
            },
            {
                'id': 4, 'qId': 0, 'authorId': 10, 'time': 'three days', 'downvotes': 9, 'upvotes': 7, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Quisque dapibus convallis metus. Praesent at dui ac tellus facilisis pulvinar vitae non ex. Vestibulum facilisis, massa vel aliquet ultrices, erat tellus pellentesque sapien, a consequat erat sem sit amet lacus.'
            },
            {
                'id': 5, 'qId': 0, 'authorId': 11, 'time': 'two days', 'downvotes': 1, 'upvotes': 8, 'type': 'COMMENTED', 'answerId': 4,
                'content': 'Nam non erat sed purus ultrices rutrum quis ut arcu. Nulla facilisi. Duis nunc tellus, pulvinar ornare est ut, euismod sollicitudin lectus. Nunc eget elit sit amet nulla dignissim volutpat non sed libero.'
            },
            {
                'id': 6, 'qId': 0, 'authorId': 12, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 12, 'type': 'COMMENTED', 'answerId': 4,
                'content': 'Praesent eget commodo nibh, vitae vehicula mauris. Morbi id arcu lacinia, congue est nec, posuere orci.'
            },
            {
                'id': 7, 'qId': 1, 'authorId': 13, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 2, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Donec elementum, justo at sagittis dignissim, est metus blandit neque, et maximus tortor diam sit amet massa.'
            },
            {
                'id': 8, 'qId': 1, 'authorId': 14, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 3, 'type': 'COMMENTED', 'answerId': 7,
                'content': 'In ullamcorper venenatis dolor, in malesuada augue. Curabitur convallis dui elit, ut egestas erat consequat non. Praesent non dolor nec augue dapibus mollis.'
            },
            {
                'id': 9, 'qId': 1, 'authorId': 15, 'time': 'yesterday', 'downvotes': 6, 'upvotes': 12, 'type': 'COMMENTED', 'answerId': 7,
                'content': 'Sed euismod lorem dolor, sed ornare sapien consectetur ut. Proin dui dui, lobortis sed felis id, condimentum ultricies velit.'
            },
            {
                'id': 10, 'qId': 1, 'authorId': 16, 'time': 'three days', 'downvotes': 1, 'upvotes': 8, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Maecenas quis mauris vel nisi faucibus eleifend sit amet nec orci. Donec vulputate, sapien ac ornare efficitur, dui lectus molestie odio, nec gravida mauris eros in purus.'
            },
            {
                'id': 11, 'qId': 1, 'authorId': 17, 'time': 'two days', 'downvotes': 2, 'upvotes': 9, 'type': 'COMMENTED', 'answerId': 10,
                'content': 'Curabitur sollicitudin semper eros id egestas. Ut ullamcorper, justo vitae ullamcorper interdum, magna lorem dictum odio, sit amet ultricies risus massa in dui.'
            },
            {
                'id': 12, 'qId': 1, 'authorId': 18, 'time': 'yesterday', 'downvotes': 2, 'upvotes': 11, 'type': 'COMMENTED', 'answerId': 10,
                'content': 'Praesent posuere enim eget tortor molestie, eget dignissim elit lobortis.'
            },
            {
                'id': 13, 'qId': 1, 'authorId': 19, 'time': 'yesterday', 'downvotes': 5, 'upvotes': 1, 'type': 'COMMENTED', 'answerId': 10,
                'content': 'Curabitur id odio nunc. Sed rhoncus magna sollicitudin justo pharetra, sed tincidunt magna semper. Vivamus ut mollis tortor. '
            },
            {
                'id': 14, 'qId': 1, 'authorId': 20, 'time': 'yesterday', 'downvotes': 1, 'upvotes': 13, 'type': 'COMMENTED', 'answerId': 10,
                'content': 'Suspendisse tincidunt massa justo, sed tincidunt neque accumsan et. Fusce venenatis dolor sed blandit vestibulum.'
            },
            {
                'id': 15, 'qId': 1, 'authorId': 21, 'time': 'two days', 'downvotes': 11, 'upvotes': 15, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Suspendisse finibus, odio non varius feugiat, diam nisi lacinia lacus, et tempus orci est sed ex.'
            },
            {
                'id': 16, 'qId': 1, 'authorId': 22, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 6, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Vivamus malesuada erat lacinia, eleifend enim non, faucibus nibh. Donec porta, magna quis finibus varius, orci justo dapibus orci, vel dapibus risus nulla at elit.'
            },
            {
                'id': 17, 'qId': 2, 'authorId': 23, 'time': 'two days', 'downvotes': 8, 'upvotes': 4, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Nullam lacinia dolor nunc. Mauris dignissim nisl viverra tellus fermentum molestie. Duis maximus in odio vel posuere.'
            },
            {
                'id': 18, 'qId': 2, 'authorId': 24, 'time': 'yesterday', 'downvotes': 4, 'upvotes': 18, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'In consequat metus eros, a ullamcorper nibh ultrices vitae. Praesent et ligula arcu. Aliquam tincidunt dapibus lacus eu mollis.'
            },
            {
                'id': 19, 'qId': 2, 'authorId': 25, 'time': 'yesterday', 'downvotes': 10, 'upvotes': 16, 'type': 'COMMENTED', 'answerId': 18,
                'content': 'Aenean faucibus orci elit, at pellentesque tortor consequat in.'
            },
            // Untested data for questions id > 2
            {
                'id': 20, 'qId': 3, 'authorId': 6, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 19, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.'
            },
            {
                'id': 21, 'qId': 3, 'authorId': 7, 'time': 'yesterday', 'downvotes': 2, 'upvotes': 5, 'type': 'COMMENTED', 'answerId': 20,
                'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                'id': 22, 'qId': 3, 'authorId': 8, 'time': 'yesterday', 'downvotes': 1, 'upvotes': 3, 'type': 'COMMENTED', 'answerId': 20,
                'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                'id': 23, 'qId': 3, 'authorId': 9, 'time': 'two days', 'downvotes': 0, 'upvotes': 6, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Quisque tincidunt purus ipsum, at elementum arcu consectetur vitae. Fusce nec arcu arcu.'
            },
            {
                'id': 24, 'qId': 3, 'authorId': 10, 'time': 'three days', 'downvotes': 9, 'upvotes': 7, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Quisque dapibus convallis metus. Praesent at dui ac tellus facilisis pulvinar vitae non ex. Vestibulum facilisis, massa vel aliquet ultrices, erat tellus pellentesque sapien, a consequat erat sem sit amet lacus.'
            },
            {
                'id': 25, 'qId': 3, 'authorId': 11, 'time': 'two days', 'downvotes': 1, 'upvotes': 8, 'type': 'COMMENTED', 'answerId': 24,
                'content': 'Nam non erat sed purus ultrices rutrum quis ut arcu. Nulla facilisi. Duis nunc tellus, pulvinar ornare est ut, euismod sollicitudin lectus. Nunc eget elit sit amet nulla dignissim volutpat non sed libero.'
            },
            {
                'id': 26, 'qId': 3, 'authorId': 12, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 12, 'type': 'COMMENTED', 'answerId': 24,
                'content': 'Praesent eget commodo nibh, vitae vehicula mauris. Morbi id arcu lacinia, congue est nec, posuere orci.'
            },
            {
                'id': 27, 'qId': 4, 'authorId': 13, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 2, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Donec elementum, justo at sagittis dignissim, est metus blandit neque, et maximus tortor diam sit amet massa.'
            },
            {
                'id': 28, 'qId': 4, 'authorId': 14, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 3, 'type': 'COMMENTED', 'answerId': 27,
                'content': 'In ullamcorper venenatis dolor, in malesuada augue. Curabitur convallis dui elit, ut egestas erat consequat non. Praesent non dolor nec augue dapibus mollis.'
            },
            {
                'id': 29, 'qId': 4, 'authorId': 15, 'time': 'yesterday', 'downvotes': 6, 'upvotes': 12, 'type': 'COMMENTED', 'answerId': 27,
                'content': 'Sed euismod lorem dolor, sed ornare sapien consectetur ut. Proin dui dui, lobortis sed felis id, condimentum ultricies velit.'
            },
            {
                'id': 30, 'qId': 4, 'authorId': 16, 'time': 'three days', 'downvotes': 1, 'upvotes': 8, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'Maecenas quis mauris vel nisi faucibus eleifend sit amet nec orci. Donec vulputate, sapien ac ornare efficitur, dui lectus molestie odio, nec gravida mauris eros in purus.'
            },
            {
                'id': 31, 'qId': 4, 'authorId': 17, 'time': 'two days', 'downvotes': 2, 'upvotes': 9, 'type': 'COMMENTED', 'answerId': 30,
                'content': 'Curabitur sollicitudin semper eros id egestas. Ut ullamcorper, justo vitae ullamcorper interdum, magna lorem dictum odio, sit amet ultricies risus massa in dui.'
            },
            {
                'id': 32, 'qId': 4, 'authorId': 18, 'time': 'yesterday', 'downvotes': 2, 'upvotes': 11, 'type': 'COMMENTED', 'answerId': 30,
                'content': 'Praesent posuere enim eget tortor molestie, eget dignissim elit lobortis.'
            },
            {
                'id': 33, 'qId': 4, 'authorId': 19, 'time': 'yesterday', 'downvotes': 5, 'upvotes': 1, 'type': 'COMMENTED', 'answerId': 30,
                'content': 'Curabitur id odio nunc. Sed rhoncus magna sollicitudin justo pharetra, sed tincidunt magna semper. Vivamus ut mollis tortor. '
            },
            {
                'id': 34, 'qId': 4, 'authorId': 20, 'time': 'yesterday', 'downvotes': 1, 'upvotes': 13, 'type': 'COMMENTED', 'answerId': 30,
                'content': 'Suspendisse tincidunt massa justo, sed tincidunt neque accumsan et. Fusce venenatis dolor sed blandit vestibulum.'
            },
            {
                'id': 35, 'qId': 4, 'authorId': 21, 'time': 'two days', 'downvotes': 11, 'upvotes': 15, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Suspendisse finibus, odio non varius feugiat, diam nisi lacinia lacus, et tempus orci est sed ex.'
            },
            {
                'id': 36, 'qId': 4, 'authorId': 22, 'time': 'yesterday', 'downvotes': 0, 'upvotes': 6, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Vivamus malesuada erat lacinia, eleifend enim non, faucibus nibh. Donec porta, magna quis finibus varius, orci justo dapibus orci, vel dapibus risus nulla at elit.'
            },
            {
                'id': 37, 'qId': 5, 'authorId': 23, 'time': 'two days', 'downvotes': 8, 'upvotes': 4, 'type': 'ANSWERED', 'relatedDiscussion': false,
                'content': 'Nullam lacinia dolor nunc. Mauris dignissim nisl viverra tellus fermentum molestie. Duis maximus in odio vel posuere.'
            },
            {
                'id': 38, 'qId': 5, 'authorId': 24, 'time': 'yesterday', 'downvotes': 4, 'upvotes': 18, 'type': 'ANSWERED', 'relatedDiscussion': true,
                'content': 'In consequat metus eros, a ullamcorper nibh ultrices vitae. Praesent et ligula arcu. Aliquam tincidunt dapibus lacus eu mollis.'
            },
            {
                'id': 39, 'qId': 5, 'authorId': 25, 'time': 'yesterday', 'downvotes': 10, 'upvotes': 16, 'type': 'COMMENTED', 'answerId': 38,
                'content': 'Aenean faucibus orci elit, at pellentesque tortor consequat in.'
            }
        ];
        
        this.data = {
            dictionary,
            authors,
            avatars,
            questions,
            comments
        };
    }
    
    get(resource) {
        let fakeHttpGet = () => {
                resource = _.words(resource, /[^/?=]+/g);
                let res = _.get(this.data, resource[0]);
                // resource [url] -> comments
                if (resource.length === 1) { 
                    return res;
                }
                // resource [url, value] -> comments/1
                else if (resource.length === 2) { 
                    return _.filter(res, {id: resource[1]});
                }
                // resource [url, key, value] -> comments/?qId=1
                else { 
                    return _.filter(res, {[resource[1]]: _.parseInt(resource[2])});
                }
            };
        
        return this.timeout(fakeHttpGet,this.delay);
    }
    
    put(resource, newEntry) {
        let fakeHttpPut = () => {
                resource = _.words(resource, /[^/?=]+/g);
                let res = _.get(this.data, resource[0]);
                let index = _.findIndex(res, 'id', _.parseInt(resource[1]));
                _.set(this.data, '${resource[0]}[${index}]', newEntry);
            };
            
        return this.timeout(fakeHttpPut,this.delay);
    }
}