var app = angular.module('RedditApp', []).controller('redditController', function($scope){
  $scope.post= [];
  $scope.newPost={}
  $scope.submitPost = function() {
  $scope.post.push({title:$scope.newPost.title,
    author:$scope.newPost.author, description:$scope.newPost.description,
    image: $scope.newPost.image})
  $scope.newPost.title='';
  $scope.newPost.author='';
  $scope.newPost.image='';
  $scope.newpost.description;
    }
  })
