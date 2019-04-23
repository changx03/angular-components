import _ from 'lodash';
// importing images using the file loader in webpack
// catpic will be the path to the emitted photo

class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';
    this.catpic = 'cat.jpeg';
    this.Posts = Posts;
    this.getPosts();

    this.search = '';

  }

  getPosts() {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState();
      });
  }
}

BlogController.$inject = ['Posts'];

export {BlogController};
