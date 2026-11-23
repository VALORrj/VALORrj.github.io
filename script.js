/* =========================================================
   Portfolio BTS SIO SISR – script.js (commun à toutes les pages)
   Chaque partie vérifie d'abord que l'élément existe sur la page.
   ========================================================= */

/* ---------- 1. LISTE DES PROJETS (à modifier avec tes vrais projets) ---------- */
const projets = [
  {
    titre: "Renouvellement du parc d'une clinique",
    icone: "🏥",
    categorie: "systeme",
    resume: "En alternance chez Oc Santé : pilotage du renouvellement complet du parc informatique de la Clinique Plein Soleil.",
    tags: ["Masters", "Déploiement", "Migration de données", "Oc Santé"],
    contexte: "Référent informatique de la Clinique Plein Soleil, j'ai piloté le remplacement de l'ensemble des postes de la clinique.",
    etapes: [
      "Création des masters des nouveaux postes",
      "Déploiement des postes dans les services",
      "Migration des données des utilisateurs"
    ],
    competences: ["B1.1", "B1.4"]
  },
  {
    titre: "Prévention cybersécurité en EHPAD",
    icone: "🔐",
    categorie: "securite",
    resume: "Bénévolat : cours de sensibilisation à la cybersécurité pour les résidents d'EHPAD et de maisons de retraite.",
    tags: ["Sensibilisation", "Hameçonnage", "Mots de passe"],
    contexte: "Engagement bénévole (été 2025) : aider les personnes âgées à se protéger des arnaques en ligne.",
    etapes: [
      "Cours sur les arnaques en ligne",
      "Reconnaître une tentative d'hameçonnage",
      "Bonnes pratiques pour les mots de passe"
    ],
    competences: []
  },
  {
    titre: "Plan d'adressage et maquette réseau",
    icone: "🗺️",
    categorie: "reseau",
    resume: "Conception du réseau d'une PME sur Cisco Packet Tracer : adressage IP, sous-réseaux et tests.",
    tags: ["Packet Tracer", "IPv4", "Sous-réseaux", "Cisco"],
    contexte: "Une PME de 3 services veut un réseau organisé et facile à faire évoluer.",
    etapes: [
      "Découpage de l'adresse réseau en sous-réseaux (un par service)",
      "Placement des routeurs, switchs et postes dans Packet Tracer",
      "Configuration des adresses IP et des passerelles",
      "Tests de connectivité avec ping et tracert"
    ],
    competences: ["B1.1", "B1.4"],
    doc: "docs/plan-adressage.pdf"
  },
  {
    titre: "Serveur DHCP et DNS sous Windows Server",
    icone: "🌐",
    categorie: "systeme",
    resume: "Attribution automatique des adresses IP et résolution des noms sur le réseau local.",
    tags: ["Windows Server", "DHCP", "DNS"],
    contexte: "Éviter la configuration manuelle des IP sur chaque poste et accéder aux serveurs par leur nom.",
    etapes: [
      "Installation des rôles DHCP et DNS",
      "Création d'une étendue DHCP avec exclusions et réservations",
      "Création de la zone DNS et des enregistrements A",
      "Vérification sur un poste client (ipconfig /all, nslookup)"
    ],
    competences: ["B1.5"],
    doc: "docs/dhcp-dns.pdf"
  },
  {
    titre: "Active Directory : utilisateurs et GPO",
    icone: "👥",
    categorie: "systeme",
    resume: "Création d'un domaine, des unités d'organisation, des comptes et de stratégies de groupe.",
    tags: ["AD DS", "GPO", "Windows Server"],
    contexte: "Centraliser la gestion des comptes et des postes de l'entreprise.",
    etapes: [
      "Promotion du serveur en contrôleur de domaine",
      "Création des OU par service, des utilisateurs et des groupes",
      "Intégration des postes clients au domaine",
      "Création de GPO (fond d'écran, lecteur réseau, mot de passe)"
    ],
    competences: ["B1.1", "B1.5"],
    doc: "docs/active-directory.pdf"
  },
  {
    titre: "Partage de fichiers et droits NTFS",
    icone: "📂",
    categorie: "systeme",
    resume: "Mise en place de dossiers partagés par service avec les bons droits d'accès.",
    tags: ["Partage SMB", "NTFS", "Groupes AD"],
    contexte: "Chaque service ne doit voir que ses propres fichiers.",
    etapes: [
      "Création de l'arborescence des dossiers",
      "Configuration des partages et des droits NTFS par groupe",
      "Mappage automatique des lecteurs réseau par GPO",
      "Tests avec différents comptes utilisateurs"
    ],
    competences: ["B1.1", "B1.5"],
    doc: "docs/partages.pdf"
  },
  {
    titre: "Serveur web Apache sous Debian",
    icone: "🐧",
    categorie: "systeme",
    resume: "Installation d'un serveur web Linux pour héberger le site interne de l'entreprise.",
    tags: ["Debian", "Apache", "Linux", "SSH"],
    contexte: "L'entreprise veut un intranet hébergé en interne.",
    etapes: [
      "Installation de Debian en ligne de commande",
      "Configuration de l'IP fixe et de l'accès SSH",
      "Installation d'Apache et création d'un virtual host",
      "Mise en ligne d'une page de test"
    ],
    competences: ["B1.3", "B1.5"],
    doc: "docs/apache.pdf"
  },
  {
    titre: "Gestion de parc avec GLPI",
    icone: "📋",
    categorie: "systeme",
    resume: "Inventaire du matériel informatique et suivi des incidents avec des tickets.",
    tags: ["GLPI", "Inventaire", "Tickets"],
    contexte: "Savoir quel matériel possède l'entreprise et suivre les demandes des utilisateurs.",
    etapes: [
      "Installation de GLPI sur un serveur Linux",
      "Déploiement de l'agent d'inventaire sur les postes",
      "Création des catégories et des profils utilisateurs",
      "Traitement de tickets d'incident"
    ],
    competences: ["B1.1", "B1.2"],
    doc: "docs/glpi.pdf"
  },
  {
    titre: "Création de VLAN sur un switch Cisco",
    icone: "🔀",
    categorie: "reseau",
    resume: "Séparation des services sur le même switch grâce aux VLAN.",
    tags: ["Cisco IOS", "VLAN", "Trunk"],
    contexte: "Isoler le trafic de la comptabilité de celui des autres services.",
    etapes: [
      "Création des VLAN et attribution des ports",
      "Configuration d'un lien trunk vers le routeur",
      "Routage inter-VLAN",
      "Sauvegarde de la configuration (copy run start)"
    ],
    competences: ["B1.1", "B1.5"],
    doc: "docs/vlan.pdf"
  },
  {
    titre: "Sécurisation d'un switch",
    icone: "🛡️",
    categorie: "securite",
    resume: "Protection de l'accès aux équipements réseau : mots de passe, SSH et port-security.",
    tags: ["SSH", "Port-security", "Cisco"],
    contexte: "Empêcher un accès non autorisé aux équipements et au réseau.",
    etapes: [
      "Mots de passe chiffrés (enable secret, service password-encryption)",
      "Remplacement de Telnet par SSH",
      "Désactivation des ports inutilisés",
      "Activation du port-security sur les ports d'accès"
    ],
    competences: ["B1.1", "B1.5"],
    doc: "docs/securisation-switch.pdf"
  },
  {
    titre: "Sauvegarde et restauration",
    icone: "💾",
    categorie: "securite",
    resume: "Mise en place de sauvegardes automatiques des données et test de restauration.",
    tags: ["Windows Server Backup", "Règle 3-2-1"],
    contexte: "Ne pas perdre les données de l'entreprise en cas de panne ou de rançongiciel.",
    etapes: [
      "Choix des données à sauvegarder et de la fréquence",
      "Planification d'une sauvegarde automatique",
      "Test de restauration d'un fichier supprimé",
      "Rédaction d'une procédure"
    ],
    competences: ["B1.1", "B1.2"],
    doc: "docs/sauvegarde.pdf"
  }
];

/* ---------- 2. MENU : LIEN DE LA PAGE ACTUELLE EN VERT ---------- */
const pageActuelle = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a => {
  if (a.getAttribute("href") === pageActuelle) a.classList.add("active");
});

/* ---------- 3. MENU BURGER (mobile) ---------- */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

/* ---------- 4. PAGE PROJETS : affichage, filtres et fenêtre de détail ---------- */
const grid = document.getElementById("projectsGrid");

if (grid) {
  grid.innerHTML = projets.map((p, i) => `
    <article class="project-card reveal" data-cat="${p.categorie}">
      <div class="project-icon">${p.icone}</div>
      <h3>${p.titre}</h3>
      <p>${p.resume}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <button class="btn btn-outline" data-index="${i}">Voir le détail</button>
    </article>
  `).join("");

  // Filtres
  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter.active").classList.remove("active");
      btn.classList.add("active");
      const filtre = btn.dataset.filter;
      document.querySelectorAll(".project-card").forEach(card => {
        card.classList.toggle("hidden", filtre !== "all" && card.dataset.cat !== filtre);
      });
    });
  });

  // Fenêtre de détail
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  grid.addEventListener("click", e => {
    const btn = e.target.closest("button[data-index]");
    if (!btn) return;
    const p = projets[btn.dataset.index];
    modalBody.innerHTML = `
      <h3>${p.icone} ${p.titre}</h3>
      <h4>Contexte</h4><p>${p.contexte}</p>
      <h4>Étapes réalisées</h4><ul>${p.etapes.map(e => `<li>${e}</li>`).join("")}</ul>
      ${p.competences.length ? `<h4>Compétences mobilisées</h4><p>${p.competences.join(" • ")}</p>` : ""}
      <h4>Technologies</h4><div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.doc ? `<a href="${p.doc}" download class="btn btn-primary">⬇ Télécharger la documentation</a>` : ""}
    `;
    modal.classList.add("open");
  });

  const fermerModal = () => modal.classList.remove("open");
  document.getElementById("modalClose").addEventListener("click", fermerModal);
  modal.addEventListener("click", e => { if (e.target === modal) fermerModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") fermerModal(); });
}

/* ---------- 5. PAGE ACCUEIL : effet "machine à écrire" ---------- */
const typing = document.getElementById("typing");

if (typing) {
  const phrases = ["whoami", "ping 8.8.8.8", "systemctl status apache2", "show vlan brief"];
  let iPhrase = 0, iLettre = 0, efface = false;

  function taper() {
    const phrase = phrases[iPhrase];
    typing.textContent = phrase.substring(0, iLettre);
    if (!efface && iLettre < phrase.length) { iLettre++; setTimeout(taper, 100); }
    else if (!efface) { efface = true; setTimeout(taper, 1500); }
    else if (iLettre > 0) { iLettre--; setTimeout(taper, 50); }
    else { efface = false; iPhrase = (iPhrase + 1) % phrases.length; setTimeout(taper, 300); }
  }
  taper();
}

/* ---------- 6. ANIMATIONS AU SCROLL (+ barres de compétences) ---------- */
document.querySelectorAll(".section-title, .skill-card, .ref-card, .timeline-item, .veille-box, .about-grid, .home-card, .article-card")
  .forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    entry.target.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.level + "%");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ---------- 7. BOUTON RETOUR EN HAUT ---------- */
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 400));
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- 8. TÉLÉCHARGEMENT DU CV ---------- */
// Vérifie que cv.pdf existe avant de lancer le téléchargement (sur un site en ligne)
document.querySelectorAll('a[href="cv.pdf"]').forEach(lien => {
  lien.addEventListener("click", async e => {
    if (location.protocol === "file:") return; // en local, on laisse faire le navigateur
    try {
      const rep = await fetch("cv.pdf", { method: "HEAD" });
      if (!rep.ok) throw new Error();
    } catch {
      e.preventDefault();
      alert("Le CV n'est pas disponible pour le moment.");
    }
  });
});

/* ---------- 9. PAGE CONTACT : vérification du formulaire ---------- */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (!nom || !email || !message) {
      msg.textContent = "Merci de remplir tous les champs.";
      msg.className = "form-msg error";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "Adresse e-mail invalide.";
      msg.className = "form-msg error";
      return;
    }
    const sujet = encodeURIComponent("Contact portfolio – " + nom);
    const corps = encodeURIComponent(message + "\n\n" + nom + " (" + email + ")");
    window.location.href = `mailto:moutiervalentin6@gmail.com?subject=${sujet}&body=${corps}`;
    msg.textContent = "Merci ! Votre messagerie va s'ouvrir.";
    msg.className = "form-msg success";
    form.reset();
  });
}

/* ---------- 10. ANNÉE DANS LE PIED DE PAGE ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
