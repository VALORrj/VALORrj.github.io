/* Portfolio Valentin Moutier – script commun à toutes les pages */
(function () {
  'use strict';

  var COMPETENCES = {
    'B1.1': 'Gérer le patrimoine informatique',
    'B1.2': "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    'B1.3': "Développer la présence en ligne de l'organisation",
    'B1.4': 'Travailler en mode projet',
    'B1.5': 'Mettre à disposition des utilisateurs un service informatique',
    'B1.6': 'Organiser son développement professionnel'
  };
  var CODES = Object.keys(COMPETENCES);

  /* ---------- Projets (modifier ici pour ajouter un projet) ---------- */
  var PROJETS = [
    {
      id: 'renouvellement-parc', cadre: 'entreprise', cats: ['entreprise', 'systeme'],
      titre: "Renouvellement du parc d'une clinique",
      lieu: 'Alternance chez Oc Santé',
      resume: "Pilotage du renouvellement complet du parc informatique de la Clinique Plein Soleil.",
      contexte: "Référent informatique de la Clinique Plein Soleil (Oc Santé), j'ai piloté le remplacement de l'ensemble des postes de la clinique.",
      etapes: ['Création des masters des nouveaux postes', 'Déploiement des postes dans les services', 'Migration des données des utilisateurs'],
      codes: ['B1.1', 'B1.4', 'B1.5'],
      tags: ['Masters', 'Déploiement de postes', 'Migration de données']
    },
    {
      id: 'logiciels-sante', cadre: 'entreprise', cats: ['entreprise', 'systeme'],
      titre: 'Mises à jour de logiciels de santé',
      lieu: 'Alternance chez Oc Santé',
      resume: "Mises à jour majeures d'Hôpital Manager et d'Optim Bloc, menées avec la DSI d'Oc Santé.",
      contexte: "Les cliniques du groupe s'appuient sur des logiciels métier, dont Hôpital Manager et Optim Bloc pour le bloc opératoire. Leurs mises à jour majeures se font avec la DSI.",
      etapes: ["Mise à jour majeure d'Hôpital Manager", "Mise à jour majeure d'Optim Bloc", "Coordination avec la DSI d'Oc Santé"],
      codes: ['B1.2', 'B1.4', 'B1.5'],
      tags: ['Hôpital Manager', 'Optim Bloc', 'DSI']
    },
    {
      id: 'facturation-electronique', cadre: 'perso', cats: ['entreprise'],
      titre: 'Facturation électronique pour micro-entreprises',
      lieu: 'Projet personnel, depuis 2026',
      resume: "Accompagnement de micro-entreprises de A à Z avant l'obligation de facturation électronique de 2027.",
      contexte: "Projet mené en parallèle du BTS : préparer des micro-entreprises à l'obligation de facturation électronique de 2027.",
      etapes: ['Prospection des entreprises', "Diagnostic de l'existant", "Choix d'une plateforme agréée", 'Paramétrage de la solution', 'Formation du dirigeant'],
      codes: ['B1.4', 'B1.5'],
      tags: ['Plateforme agréée', 'Paramétrage', 'Formation']
    },
    {
      id: 'prevention-ehpad', cadre: 'benevolat', cats: ['securite'],
      titre: 'Prévention cybersécurité en EHPAD',
      lieu: 'Bénévolat, été 2025',
      resume: "Cours de sensibilisation à la cybersécurité pour les résidents d'EHPAD et de maisons de retraite.",
      contexte: 'Engagement bénévole : aider des personnes âgées à se protéger des arnaques en ligne.',
      etapes: ['Cours sur les arnaques en ligne', "Reconnaître une tentative d'hameçonnage", 'Bonnes pratiques pour les mots de passe'],
      codes: [],
      tags: ['Sensibilisation', 'Hameçonnage', 'Mots de passe']
    },
    {
      id: 'plan-adressage', cadre: 'formation', cats: ['reseau'],
      titre: "Plan d'adressage et maquette réseau",
      lieu: 'TP en formation',
      resume: "Conception du réseau d'une PME sur Cisco Packet Tracer : adressage IP, sous-réseaux et tests.",
      contexte: 'Une PME de 3 services veut un réseau organisé et facile à faire évoluer.',
      etapes: ["Découpage de l'adresse réseau en sous-réseaux, un par service", 'Placement des routeurs, switchs et postes dans Packet Tracer', 'Configuration des adresses IP et des passerelles', 'Tests de connectivité avec ping et tracert'],
      codes: ['B1.1', 'B1.4'],
      tags: ['Packet Tracer', 'IPv4', 'Sous-réseaux', 'Cisco']
    },
    {
      id: 'vlan', cadre: 'formation', cats: ['reseau'],
      titre: 'VLAN et routage inter-VLAN sur un switch Cisco',
      lieu: 'TP en formation',
      resume: 'Séparation des services sur le même switch grâce aux VLAN.',
      contexte: 'Isoler le trafic de la comptabilité de celui des autres services.',
      etapes: ['Création des VLAN et attribution des ports', "Configuration d'un lien trunk vers le routeur", 'Routage inter-VLAN', 'Sauvegarde de la configuration (copy run start)'],
      codes: ['B1.1', 'B1.5'],
      tags: ['Cisco IOS', 'VLAN', 'Trunk']
    },
    {
      id: 'securisation-switch', cadre: 'formation', cats: ['securite', 'reseau'],
      titre: "Sécurisation d'un switch Cisco",
      lieu: 'TP en formation',
      resume: "Protection de l'accès aux équipements réseau : mots de passe, SSH et port-security.",
      contexte: 'Empêcher un accès non autorisé aux équipements et au réseau.',
      etapes: ['Mots de passe chiffrés (enable secret, service password-encryption)', 'Remplacement de Telnet par SSH', 'Désactivation des ports inutilisés', "Activation du port-security sur les ports d'accès"],
      codes: ['B1.1', 'B1.5'],
      tags: ['SSH', 'Port-security', 'Cisco']
    },
    {
      id: 'dhcp-dns', cadre: 'formation', cats: ['systeme'],
      titre: 'Serveur DHCP et DNS sous Windows Server',
      lieu: 'TP en formation',
      resume: 'Attribution automatique des adresses IP et résolution des noms sur le réseau local.',
      contexte: 'Éviter la configuration manuelle des IP sur chaque poste et accéder aux serveurs par leur nom.',
      etapes: ['Installation des rôles DHCP et DNS', "Création d'une étendue DHCP avec exclusions et réservations", 'Création de la zone DNS et des enregistrements A', 'Vérification sur un poste client (ipconfig /all, nslookup)'],
      codes: ['B1.5'],
      tags: ['Windows Server', 'DHCP', 'DNS']
    },
    {
      id: 'active-directory', cadre: 'formation', cats: ['systeme'],
      titre: 'Active Directory : utilisateurs et GPO',
      lieu: 'TP en formation',
      resume: "Création d'un domaine, des unités d'organisation, des comptes et de stratégies de groupe.",
      contexte: "Centraliser la gestion des comptes et des postes de l'entreprise.",
      etapes: ['Promotion du serveur en contrôleur de domaine', 'Création des OU par service, des utilisateurs et des groupes', 'Intégration des postes clients au domaine', "Création de GPO (fond d'écran, lecteur réseau, mot de passe)"],
      codes: ['B1.1', 'B1.5'],
      tags: ['AD DS', 'GPO', 'Windows Server']
    },
    {
      id: 'partages-ntfs', cadre: 'formation', cats: ['systeme'],
      titre: 'Partage de fichiers et droits NTFS',
      lieu: 'TP en formation',
      resume: "Dossiers partagés par service avec les bons droits d'accès.",
      contexte: 'Chaque service ne doit voir que ses propres fichiers.',
      etapes: ["Création de l'arborescence des dossiers", 'Configuration des partages et des droits NTFS par groupe', 'Mappage automatique des lecteurs réseau par GPO', 'Tests avec différents comptes utilisateurs'],
      codes: ['B1.1', 'B1.5'],
      tags: ['Partage SMB', 'NTFS', 'Groupes AD']
    },
    {
      id: 'apache-debian', cadre: 'formation', cats: ['systeme'],
      titre: 'Serveur web Apache sous Debian',
      lieu: 'TP en formation',
      resume: "Installation d'un serveur web Linux pour héberger l'intranet d'une entreprise.",
      contexte: "L'entreprise veut un intranet hébergé en interne.",
      etapes: ['Installation de Debian en ligne de commande', "Configuration de l'IP fixe et de l'accès SSH", "Installation d'Apache et création d'un virtual host", "Mise en ligne d'une page de test"],
      codes: ['B1.3', 'B1.5'],
      tags: ['Debian', 'Apache', 'Linux', 'SSH']
    },
    {
      id: 'glpi', cadre: 'formation', cats: ['systeme'],
      titre: 'Gestion de parc avec GLPI',
      lieu: 'TP en formation',
      resume: 'Inventaire du matériel informatique et suivi des incidents avec des tickets.',
      contexte: "Savoir quel matériel possède l'entreprise et suivre les demandes des utilisateurs.",
      etapes: ['Installation de GLPI sur un serveur Linux', "Déploiement de l'agent d'inventaire sur les postes", 'Création des catégories et des profils utilisateurs', "Traitement de tickets d'incident"],
      codes: ['B1.1', 'B1.2'],
      tags: ['GLPI', 'Inventaire', 'Tickets']
    },
    {
      id: 'sauvegarde', cadre: 'formation', cats: ['securite', 'systeme'],
      titre: 'Sauvegarde et restauration',
      lieu: 'TP en formation',
      resume: 'Sauvegardes automatiques des données et test de restauration.',
      contexte: "Ne pas perdre les données de l'entreprise en cas de panne ou de rançongiciel.",
      etapes: ['Choix des données à sauvegarder et de la fréquence', "Planification d'une sauvegarde automatique", "Test de restauration d'un fichier supprimé", "Rédaction d'une procédure"],
      codes: ['B1.1', 'B1.2'],
      tags: ['Windows Server Backup', 'Règle 3-2-1']
    }
  ];

  /* ---------- Tableau de synthèse (identique à l'annexe E5) ---------- */
  var REALISATIONS = [
    { groupe: 'Réalisations en cours de formation', lignes: [
      ["Plan d'adressage et maquette réseau d'une PME", ['B1.1', 'B1.4'], 'plan-adressage'],
      ['VLAN et routage inter-VLAN sur un switch Cisco', ['B1.1', 'B1.5'], 'vlan'],
      ["Sécurisation d'un switch Cisco", ['B1.1', 'B1.5'], 'securisation-switch'],
      ['Serveur DHCP et DNS sous Windows Server', ['B1.5'], 'dhcp-dns'],
      ['Active Directory : OU, utilisateurs, groupes et GPO', ['B1.1', 'B1.5'], 'active-directory'],
      ['Partages de fichiers et droits NTFS', ['B1.1', 'B1.5'], 'partages-ntfs'],
      ['Serveur web Apache sous Debian', ['B1.3', 'B1.5'], 'apache-debian'],
      ['Gestion de parc avec GLPI', ['B1.1', 'B1.2'], 'glpi'],
      ['Sauvegarde et restauration (règle 3-2-1)', ['B1.1', 'B1.2'], 'sauvegarde'],
      ['Portfolio en ligne et veille technologique', ['B1.3', 'B1.6'], 'veille.html']
    ] },
    { groupe: 'En milieu professionnel, première année (Oc Santé)', lignes: [
      ['Référent informatique de la Clinique Plein Soleil', ['B1.1', 'B1.2'], ''],
      ['Renouvellement du parc de la Clinique Plein Soleil', ['B1.1', 'B1.4', 'B1.5'], 'renouvellement-parc'],
      ["Mises à jour d'Hôpital Manager et d'Optim Bloc", ['B1.2', 'B1.4', 'B1.5'], 'logiciels-sante'],
      ['Support N1/N2 des équipes soignantes et administratives', ['B1.2'], ''],
      ["Gestion des comptes et des droits dans l'Active Directory", ['B1.1', 'B1.2'], '']
    ] },
    { groupe: 'En milieu professionnel, seconde année', lignes: [
      ['Référent informatique de la Clinique du Millénaire', ['B1.1', 'B1.2'], ''],
      ['Facturation électronique pour micro-entreprises (projet personnel)', ['B1.4', 'B1.5'], 'facturation-electronique']
    ] }
  ];

  /* ---------- Outil : créer un élément ---------- */
  function el(tag, props, kids) {
    var n = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        if (k === 'class') n.className = props[k];
        else if (k === 'text') n.textContent = props[k];
        else n.setAttribute(k, props[k]);
      });
    }
    (kids || []).forEach(function (c) {
      if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }
  function codeTags(codes) {
    return el('span', { class: 'codes' }, codes.map(function (c) {
      return el('span', { class: 'code', title: COMPETENCES[c], text: c });
    }));
  }

  /* ---------- Menu sur mobile ---------- */
  var side = document.getElementById('side');
  var menuBtn = document.getElementById('menuBtn');
  if (side && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = side.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.textContent = open ? 'Fermer' : 'Menu';
    });
  }

  /* ---------- Année du pied de page ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Page Projets ---------- */
  var list = document.getElementById('projectList');
  var dialog = document.getElementById('projetDialog');
  if (list && dialog) {
    var count = document.getElementById('projectCount');
    var body = document.getElementById('dlgBody');

    PROJETS.forEach(function (p) {
      var btn = el('button', { class: 'btn btn-small', type: 'button', 'aria-haspopup': 'dialog' }, ['Voir le détail']);
      btn.addEventListener('click', function () { openProject(p.id); });
      var meta = el('p', { class: 'proj-meta' }, [p.codes.length ? codeTags(p.codes) : null, el('span', { text: p.tags.join(', ') })]);
      list.appendChild(el('article', { class: 'proj', id: p.id, 'data-cats': p.cats.join(' ') }, [
        el('div', null, [
          el('p', { class: 'cadre cadre-' + p.cadre, text: p.lieu }),
          el('h3', { text: p.titre }),
          el('p', { class: 'proj-resume', text: p.resume }),
          meta
        ]),
        btn
      ]));
    });

    var setCount = function () {
      var n = list.querySelectorAll('.proj:not([hidden])').length;
      count.textContent = n + (n > 1 ? ' projets affichés' : ' projet affiché');
    };
    setCount();

    document.querySelectorAll('.filters button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.filters button').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        var f = b.getAttribute('data-filter');
        list.querySelectorAll('.proj').forEach(function (a) {
          a.hidden = f !== 'all' && a.getAttribute('data-cats').split(' ').indexOf(f) < 0;
        });
        setCount();
      });
    });

    var openProject = function (id) {
      var p = PROJETS.filter(function (x) { return x.id === id; })[0];
      if (!p) return;
      body.textContent = '';
      body.appendChild(el('p', { class: 'cadre cadre-' + p.cadre, text: p.lieu }));
      body.appendChild(el('h2', { id: 'dlgTitle', text: p.titre }));
      var pdf = 'docs/' + p.id + '.pdf';
      body.appendChild(el('p', { class: 'dlg-actions' }, [el('a', { class: 'btn btn-primary btn-small', href: pdf, target: '_blank', rel: 'noopener', text: 'Ouvrir le PDF' }), el('a', { class: 'btn btn-small', href: pdf, download: 'Fiche_' + p.id + '.pdf', text: 'Télécharger' })]));
      body.appendChild(el('h3', { text: 'Contexte' }));
      body.appendChild(el('p', { text: p.contexte }));
      body.appendChild(el('h3', { text: "Ce que j'ai fait" }));
      body.appendChild(el('ol', null, p.etapes.map(function (e) { return el('li', { text: e }); })));
      if (p.codes.length) {
        body.appendChild(el('h3', { text: 'Compétences du référentiel' }));
        body.appendChild(el('ul', { class: 'comp' }, p.codes.map(function (c) {
          return el('li', null, [el('span', { class: 'code', text: c }), el('span', { text: COMPETENCES[c] })]);
        })));
      }
      body.appendChild(el('h3', { text: 'Technologies et mots-clés' }));
      body.appendChild(el('ul', { class: 'chips' }, p.tags.map(function (t) { return el('li', { text: t }); })));
      if (!dialog.open) dialog.showModal();
      history.replaceState(null, '', '?p=' + p.id);
    };

    document.getElementById('dlgClose').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () { history.replaceState(null, '', location.pathname); });

    var wanted = new URLSearchParams(location.search).get('p');
    if (wanted) openProject(wanted);
  }

  /* ---------- Page Compétences : tableau de synthèse ---------- */
  var matrix = document.getElementById('matrix');
  if (matrix) {
    var totals = CODES.map(function () { return 0; });
    var head = el('tr', null, [el('th', { scope: 'col', text: 'Réalisation' })].concat(CODES.map(function (c) {
      var b = el('button', { class: 'code-btn', type: 'button', 'aria-pressed': 'false', title: COMPETENCES[c], 'data-code': c, text: c });
      return el('th', { scope: 'col' }, [b]);
    })));
    var table = el('table', { class: 'matrix' }, [
      el('caption', { class: 'sr-only', text: 'Réalisations professionnelles et compétences du bloc 1 mobilisées' }),
      el('thead', null, [head])
    ]);
    REALISATIONS.forEach(function (g) {
      var tb = el('tbody');
      tb.appendChild(el('tr', { class: 'grp' }, [el('th', { colspan: '7', scope: 'colgroup', text: g.groupe })]));
      g.lignes.forEach(function (l) {
        var label = l[0];
        var link = l[2] ? (l[2].indexOf('.html') > 0 ? l[2] : 'projets.html?p=' + l[2]) : '';
        var cells = CODES.map(function (c, i) {
          var on = l[1].indexOf(c) >= 0;
          if (on) totals[i] += 1;
          return el('td', { 'data-code': c }, on ? [el('span', { class: 'mark', role: 'img', 'aria-label': c + ' mobilisée' })] : []);
        });
        tb.appendChild(el('tr', { 'data-codes': l[1].join(' ') }, [el('th', { scope: 'row' }, [link ? el('a', { href: link, text: label }) : label])].concat(cells)));
      });
      table.appendChild(tb);
    });
    table.appendChild(el('tfoot', null, [el('tr', null, [el('th', { scope: 'row', text: 'Nombre de réalisations' })].concat(totals.map(function (t) { return el('td', { text: String(t) }); })))]));
    matrix.appendChild(table);

    var active = '';
    matrix.querySelectorAll('.code-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var code = b.getAttribute('data-code');
        active = active === code ? '' : code;
        matrix.querySelectorAll('.code-btn').forEach(function (o) { o.setAttribute('aria-pressed', o.getAttribute('data-code') === active ? 'true' : 'false'); });
        matrix.querySelectorAll('tbody tr[data-codes]').forEach(function (r) {
          r.classList.toggle('dim', !!active && r.getAttribute('data-codes').split(' ').indexOf(active) < 0);
        });
        matrix.querySelectorAll('td[data-code]').forEach(function (td) {
          td.classList.toggle('on', td.getAttribute('data-code') === active);
        });
      });
    });
  }

  /* ---------- Page Contact : formulaire ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = form.nom.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var msg = document.getElementById('formMsg');
      if (!nom || !email || !message) {
        msg.textContent = 'Remplissez les trois champs pour envoyer le message.';
        msg.className = 'form-msg error';
        return;
      }
      if (!/^[^ @]+@[^ @]+[.][^ @]+$/.test(email)) {
        msg.textContent = "L'adresse e-mail n'est pas valide (exemple : nom@domaine.fr).";
        msg.className = 'form-msg error';
        return;
      }
      var sujet = encodeURIComponent('Contact portfolio – ' + nom);
      var nl = String.fromCharCode(10);
      var corps = encodeURIComponent(message + nl + nl + nom + ' (' + email + ')');
      window.location.href = 'mailto:moutiervalentin6@gmail.com?subject=' + sujet + '&body=' + corps;
      msg.textContent = 'Votre messagerie va s’ouvrir avec le message prêt à envoyer.';
      msg.className = 'form-msg ok';
    });
  }
})();
