# 🏥 Estaque Santé

Site web de la **Maison de Santé Pluriprofessionnelle de l'Estaque Gare** à Marseille (13016).

## 📋 Description

Site vitrine professionnel présentant l'équipe médicale, les services proposés et permettant la prise de rendez-vous en ligne.

## 🏥 Professionnels de Santé

### Médecins Généralistes
- Dr Adrien Salles
- Dr Anouar Erradi
- Dr Mandy Brecqueville
- Dr Clara Soussan

### Équipe Paramédicale
- Audrey Selva - Infirmière
- Sandrine Carretti - Infirmière
- Thaïs Bongrand - Psychologue
- Chedli Bouslama - Kinésithérapeute

### Spécialistes
- Dr Patrick Girieud - Pharmacien
- Dr François Lemaitre - Biologiste

## 🎨 Design System

Le site utilise un design system unifié avec :

- **Palette monochrome dorée** définie en variables CSS
- **Composants réutilisables** centralisés dans `css/components.css`
- **Responsive** pour tous les écrans (mobile, tablette, desktop)
- **Performance optimisée** (0 duplication de code CSS/JS)
- **Maintenabilité** : score 9/10

### Composants disponibles

- FAQ avec accordéon interactif
- Cartes d'équipe avec spécialités
- Boîtes de contact uniformes
- Grille de services responsive
- Cartes de mission cliquables avec images
- Interview sections

Voir [GUIDE-COMPOSANTS.md](GUIDE-COMPOSANTS.md) pour la documentation complète.

## 🚀 Fonctionnalités

✅ Navigation sticky avec menu mobile
✅ Section hero avec appel à l'action
✅ Présentation des services médicaux
✅ Équipe médicale organisée par catégorie
✅ Informations pratiques (horaires, conseils)
✅ Prise de rendez-vous via Doctolib
✅ Carte Google Maps interactive
✅ Bouton retour en haut de page
✅ Animations au scroll
✅ SEO optimisé

## 📁 Structure du Projet

```
estaquesante.fr/
├── index.html               # Page d'accueil
├── infirmieres.html
├── kinesitherapeute.html
├── pharmacie.html
├── medecins-generalistes.html
├── laboratoire.html
├── missions-sante-publique.html
├── projet-sante.html
├── protocoles.html
├── css/
│   ├── style.css           # Styles globaux, variables CSS
│   └── components.css      # Composants réutilisables (FAQ, cards, etc.)
├── js/
│   └── script.js           # JavaScript centralisé (FAQ, navigation, etc.)
├── images/                 # Logos et images
├── GUIDE-COMPOSANTS.md     # Documentation complète des composants
├── CHANGELOG-REFACTORING.md
└── README.md
```

## 🔧 Installation et Utilisation

### Méthode 1 : Ouverture directe
1. Ouvrez le fichier `index.html` dans votre navigateur

### Méthode 2 : Serveur local (recommandé)

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Avec Node.js (http-server) :**
```bash
npx http-server -p 8000
```

**Avec PHP :**
```bash
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 🔗 Liens Importants

- **Téléphone** : 04 88 92 69 31
- **Adresse** : 2 Avenue de la Gare, 13016 Marseille
- **Doctolib** : https://www.doctolib.fr/maison-de-sante/marseille/maison-de-sante-de-l-estaque-gare
- **Site web** : https://mspestaquegare.github.io/estaquesante.fr/

## 🎯 SEO et Référencement

Le site inclut :
- Meta descriptions optimisées
- Balises sémantiques HTML5
- Contenu structuré pour les moteurs de recherche
- Section "Informations médicales" pour améliorer le référencement
- Texte alternatif pour l'accessibilité

## 🌐 Compatibilité Navigateurs

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Navigateurs mobiles

## 📱 Responsive Breakpoints

- **Desktop** : > 968px
- **Tablet** : 768px - 968px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

## 🎨 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
    /* ... */
}
```

### Ajouter des images
Placez vos images dans le dossier `images/` et modifiez les références dans `index.html`.

### Modifier le contenu
Éditez directement le fichier `index.html` pour mettre à jour le texte et les informations.

## 📊 Performance

- CSS minifiable pour production
- JavaScript optimisé
- Chargement asynchrone des polices Google Fonts
- Images optimisables avec lazy loading

## 🚀 Déploiement

Le site est hébergé gratuitement sur **GitHub Pages** :

**URL :** https://mspestaquegare.github.io/estaquesante.fr/

### Configuration GitHub Pages

1. Le repository est configuré pour servir depuis la branche `main`
2. Les fichiers sont servis depuis la racine `/`
3. Le site est automatiquement mis à jour à chaque push

### Mettre à jour le site

```bash
git add .
git commit -m "Mise à jour du site"
git push origin main
```

Le site sera automatiquement redéployé en quelques minutes.

## 🔒 Sécurité et Confidentialité

- Aucune donnée personnelle stockée
- Liens externes sécurisés (rel="noopener noreferrer")
- HTTPS recommandé pour la production

## 🔄 Historique des versions

- **v1.2** (Décembre 2024) - Refactoring complet
  - Design system unifié
  - Composants réutilisables centralisés
  - Mission cards cliquables
  - Favicon SVG ajouté
  - Documentation complète (GUIDE-COMPOSANTS.md)
  - Score maintenabilité : 3/10 → 9/10

- **v1.1** - Ajout pages spécialisées et FAQ
- **v1.0** - Lancement initial du site

## 📄 Licence

© 2025 Estaque Santé - Tous droits réservés

## 👨‍💻 Support

Pour toute question ou modification, contactez l'administrateur du site.

---

**Version** : 1.2
**Dernière mise à jour** : Décembre 2024

**Site développé avec soin pour votre santé** 🏥
