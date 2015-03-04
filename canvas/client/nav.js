Template.nav.helpers({
  blogTitle: function () {
    return blog.title;
  },
  repo: function () {
    return github_repo.byLabel('gymkhana');
  },
  pages: function () {
    return [];
  }
});
