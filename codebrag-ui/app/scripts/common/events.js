angular.module('codebrag.events', []).constant('events', {

    loginRequired: 'codebrag:loginRequired',
    loggedIn: 'codebrag:loggedIn',
    httpError: 'codebrag:httpError',
    authError: 'codebrag:authError',

    reloadCommitsList: 'codebrag:reloadCommitsList',

    commitReviewed: 'codebrag:commitReviewed',
    followupDone: 'codebrag:followupDone',
    refreshCommitsCounter: 'codebrag:refreshCommitsCounter',
    refreshFollowupsCounter: 'codebrag:refreshFollowupsCounter',

    updatesWaiting: 'codebrag:updatesWaiting',
    resetNotifications: 'codebrag:resetNotifications',

    closeForm: 'codebrag:closeForm',
    scrollOnly: 'codebrag:scrollOnly',
    expandList: 'codebrag:expandList',

    nextCommitsLoaded: 'codebrag:nextCommitsLoaded',
    previousCommitsLoaded: 'codebrag:previousCommitsLoaded',

    diffScrolledWithFileChange: 'codebrag:diffScrolledWithFileChange',
    diffFileSelected: 'codebrag:diffFileSelected',
    diffDOMHeightChanged: 'codebrag:diffDOMHeightChanged'
});