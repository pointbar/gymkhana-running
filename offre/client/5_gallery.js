items = {
  top: [{
      title: "Les premiers pas d'un voyage vers l'agilité",
      img: "premiers-pas-dune-aventure.jpg"
    },{
      title: "Voyager léger à la rencontre des citoyens",
      img: "explorer-votre-inconnu.jpg"
    },{
      title: "Remplir la page blanche ensemble, collectivités et citoyens",
      img: "activer-page-blanche-ensemble.jpg"
    },{
      title: "Découvrir des idées nouvelles et les essayer",
      img: "decouvrir-des-endroits-insolites.jpg"
    }
  ],
  bottom: [{
      title: "Collaborer et co-construire avec les citoyens",
      img: "collaborer-et-coconstruire.jpg"
    },{
      title: "Filtrer les idées pour ne garder que les bonnes",
      img: "laisser-infuser-ses-idees.jpg"
    },{
      title: "Ajuster régulièrement sa trajectoire pour plus d'impact",
      img: "marcher-pour-reflechir.jpg"
    },{
      title: "Garder uniquement l’essentiel, oublier le superflu",
      img: "tester-uniquement-lessentiel.jpg"
    }
  ]
};

Template.gallery.helpers({
  grids: function () {
    return [items.top, items.bottom];
  }
});
