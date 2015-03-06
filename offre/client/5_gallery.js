items = {
  top: [{
      title: "Les premiers pas d’une aventure",
      img: "premiers-pas-dune-aventure.jpg"
    },{
      title: "Collaborer et co-construire",
      img: "collaborer-et-coconstruire.jpg"
    },{
      title: "Découvrir des endroits insolites",
      img: "decouvrir-des-endroits-insolites.jpg"
    },{
      title: "Activer la page blanche ensemble",
      img: "activer-page-blanche-ensemble.jpg"
    }
  ],
  bottom: [{
      title: "Explorer votre inconnu",
      img: "explorer-votre-inconnu.jpg"
    },{
      title: "Laisser infuser ses idées",
      img: "laisser-infuser-ses-idees.jpg"
    },{
      title: "Marcher pour réfléchir",
      img: "marcher-pour-reflechir.jpg"
    },{
      title: "Tester uniquement l’essentiel",
      img: "tester-uniquement-lessentiel.jpg"
    }
  ]
};

Template.gallery.helpers({
  grids: function () {
    return [items.top, items.bottom];
  }
});
