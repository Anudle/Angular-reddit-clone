var app = angular.module('RedditApp', ['angularMoment']).controller('redditController', function($scope, moment) {
    $scope.post = [];
    $scope.newPost = {}
    $scope.submitPost = function() {
        $scope.post.push({
            title: $scope.newPost.title,
            author: $scope.newPost.author,
            description: $scope.newPost.description,
            image: $scope.newPost.image,
            posted: Date.now(),
            votes: $scope.newPost.votes = 0
        })
        $scope.newPost.title = '';
        $scope.newPost.author = '';
        $scope.newPost.image = '';
        $scope.newPost.description = '';

    }
    $scope.upVote = function(p) {
    p.votes += 1;
  }
    $scope.downVote = function(p){
      p.votes -=1;
    }


})
