Meteor.startup(function () {
  var repo = github_repo.byLabel('gymkhana');

  // rewrite title in french
  canvas['2'].title = "Problèmes";
  canvas['4'].title = "Idée de solution";
  canvas['3'].title = "Valeur stratégique";
  canvas['9'].title = "Génotype";
  canvas['1'].title = "Audience";
  canvas['2A'].title = "Solutions d’aujourd’hui";
  canvas['8'].title = "Mesures de succès";
  canvas['3A'].title = "Métaphore";
  canvas['5'].title = "Canaux";
  canvas['1A'].title = "Avant-coureurs";
  canvas['7'].title = "Budget";
  canvas['6'].title = "Impacts";

  canvas['1'].list = [
    {
      title: "collectivités locales et territoriales (ce sont nos clients)"
    },
    {
      title: "usagers citoyens (ce sont les utilisateurs)"
    },
    {
      title: "développeurs d’appli (ce sont les réalisateurs)"
    }
  ];



});
