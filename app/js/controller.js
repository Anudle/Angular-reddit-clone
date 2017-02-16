app.controller('redditController', function($scope, moment) {
    $scope.post = [{
            title: 'You guys asked: me standing in my mail order bride costume',
            author: 'Manda-lee23',
            description: 'Direct trade listicle iPhone small batch shabby chic ethical hoodie pork belly kinfolk, meditation bitters 8-bit quinoa. Shoreditch mixtape kickstarter mumblecore. Roof party seitan pug, irony bushwick ugh blue bottle listicle bespoke green juice selvage franzen cliche. Irony banh mi waistcoat etsy, farm-to-table godard vice chambray skateboard lo-fi affogato.',
            image: 'https://i.reddituploads.com/5d1072ee639f45f6a3ca5ad4d7749b10?fit=max&h=1536&w=1536&s=46f761180c4a1e2cbf3d928d50f8c2b2',
            posted: 1476609650000,
            votes: 8,
            comments: [{
                author: 'Ryan',
                comment: 'Ah, the kitchen corner by the sink -- most popular spot in parties.'
            }, {
                author: 'Lane',
                comment: 'OP delivered.'
            }]
        }, {
            title: 'Qizai, the only brown panda in the world!',
            author: 'panzerinthehood',
            description: 'Direct trade listicle iPhone small batch shabby chic ethical hoodie pork belly kinfolk, meditation bitters 8-bit quinoa. Shoreditch mixtape kickstarter mumblecore. Roof party seitan pug, irony bushwick ugh blue bottle listicle bespoke green juice selvage franzen cliche. Irony banh mi waistcoat etsy, farm-to-table godard vice chambray skateboard lo-fi affogato.',
            image: 'https://i.redd.it/hvzv42t0lvrx.jpg',
            posted: 705489650000,
            votes: 5,
            comments: [{
                author: 'Chey',
                comment: 'If you accidentally wash a black panda with a load of whites, this is what happens.'
            }, {
                author: 'Tom',
                comment: "He's a shiny Pokémon."
            }]
        }, {
            title: 'Made a tiny home for my wild bird friends.',
            author: 'jadafitch',
            description: 'Direct trade listicle iPhone small batch shabby chic ethical hoodie pork belly kinfolk, meditation bitters 8-bit quinoa. Shoreditch mixtape kickstarter mumblecore. Roof party seitan pug, irony bushwick ugh blue bottle listicle bespoke green juice selvage franzen cliche. Irony banh mi waistcoat etsy, farm-to-table godard vice chambray skateboard lo-fi affogato.',
            image: 'https://i.redd.it/vb8p2s25pvrx.jpg',
            posted: 1476699354000,
            votes: 1,
            comments: [{
                author: 'Os',
                comment: 'ok this shit is hella cute also i love the patrick star bird.'
            }, {
                author: 'Danny',
                comment: "That or THERE IS A GIANT BIRD AT YOUR FRONT DOOR"
            }]
        } ],

    $scope.newPost = {}
    $scope.showForm = false
    $scope.showComment = false
    $scope.addComment = false

    $scope.toggleComment = function(p) {
      p.showComment = !p.showComment
      }
    $scope.toggleAddComment = function(p) {
        p.addComment = !p.addComment
        console.log(p)
    }
    $scope.toggleAdd = function() {
      $scope.showForm = !$scope.showForm
  }

  // submit comment
    $scope.postComment = function(p) {
             p.comments.push({
                 author: p.comments.author,
                 comment: p.comments.comment
             })
             p.addComment = false
         }
// submit post
    $scope.submitPost = function() {
            $scope.post.push({
                title: $scope.newPost.title,
                author: $scope.newPost.author,
                description: $scope.newPost.description,
                image: $scope.newPost.image,
                posted: Date.now(),
                votes: $scope.newPost.votes = 0,
                comments: []
            })
            $scope.newPost.title = '';
            $scope.newPost.author = '';
            $scope.newPost.image = '';
            $scope.newPost.description = '';
            $scope.newPost.comments = '';
            $scope.toggleAdd();
        }
// votes
        $scope.upVote = function(p) {
            p.votes += 1;
        }
        $scope.downVote = function(p) {
            p.votes -= 1;
        }
})
