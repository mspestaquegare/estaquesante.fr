# Guide des Composants - Estaque Santé

Ce guide documente tous les composants réutilisables disponibles dans le système de design du site Estaque Santé.

## 📁 Structure des fichiers CSS

```
css/
├── style.css         # Variables, reset, layout global, navigation, footer
└── components.css    # Tous les composants réutilisables
```

## 🎨 Palette de couleurs

Utilisez **uniquement** les variables CSS définies dans `style.css`:

### Couleurs principales
- `--primary-color` : Or principal (#966F1E)
- `--primary-dark` : Or foncé (#7a5a18)
- `--primary-light` : Or clair (#CFA647)

### Couleurs de texte
- `--text-primary` : Texte principal (#2D2416)
- `--text-secondary` : Texte secondaire (#5C4A2F)

### Couleurs de fond
- `--bg-primary` : Blanc (#ffffff)
- `--bg-secondary` : Beige très clair (#FBF8F3)
- `--bg-tertiary` : Beige clair (#F5F1EB)

---

## 📦 Composants disponibles

### 1. Section d'introduction (.intro-section)

Section de contenu texte avec paragraphes formatés.

**Usage :**
```html
<section class="intro-section">
    <p>Paragraphe d'introduction...</p>
    <p>Autre paragraphe...</p>
</section>
```

**Caractéristiques :**
- Largeur max : 1000px
- Marges : 0 auto 60px
- Padding : 0 20px
- Taille police : 1.1rem

---

### 2. Boîte de contact (.contact-box)

Boîte stylisée pour afficher les informations de contact.

**Usage :**
```html
<div class="contact-box">
    <h3>Prendre rendez-vous</h3>
    <p><strong>Téléphone :</strong> <a href="tel:0123456789">01 23 45 67 89</a></p>
    <p><strong>Email :</strong> <a href="mailto:contact@example.com">contact@example.com</a></p>
</div>
```

**Caractéristiques :**
- Fond : beige clair (--bg-secondary)
- Bordure gauche : 4px solid or (--primary-color)
- Padding : 20px
- Border-radius : 8px
- Couleurs uniformes : or principal pour titres et liens

---

### 3. FAQ Container (.faq-container)

Container pour les sections FAQ avec accordéons.

**Usage :**
```html
<div class="faq-container">
    <div class="faq-section">
        <h2 class="faq-section-title">Catégorie de questions</h2>

        <div class="faq-item collapsed">
            <div class="faq-question">
                Votre question ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div class="faq-answer">
                <p>Réponse à la question...</p>
            </div>
        </div>
    </div>
</div>
```

**Comportement :**
- JavaScript automatique : `.faq-item.collapsed` = fermé
- Click sur `.faq-question` = toggle collapsed
- Icône rotate de -90deg quand collapsed

**Classes :**
- `.faq-container` : Container principal (max-width: 1000px)
- `.faq-section` : Section par catégorie
- `.faq-section-title` : Titre de section (bordure bottom or)
- `.faq-item` : Item individuel
- `.faq-item.collapsed` : Item fermé (initial)
- `.faq-question` : Question cliquable
- `.faq-icon` : Icône chevron
- `.faq-answer` : Réponse (masquée si collapsed)

---

### 4. Services Grid (.services-grid)

Grille de cartes de services (utilisée sur la page Pharmacie).

**Usage :**
```html
<section class="services-section">
    <h2>Services proposés</h2>

    <div class="services-grid">
        <div class="service-card">
            <h3>Titre du service</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        <!-- Plus de cartes... -->
    </div>
</section>
```

**Caractéristiques :**
- Grid responsive : `repeat(auto-fit, minmax(280px, 1fr))`
- Gap : 20px
- Checkmarks automatiques (✓) avant chaque `<li>`
- Couleurs : or principal pour les titres

---

### 5. Team Specialties (.team-specialite)

Affichage des spécialités et informations de contact des membres de l'équipe.

**Usage :**
```html
<div class="team-card">
    <div class="specialties">
        <div class="specialties-title">Spécialisations</div>
        <div class="specialties-list">
            • Spécialité 1<br>
            • Spécialité 2
        </div>
    </div>

    <div class="contact-info">
        <strong>📞</strong> <a href="tel:0123456789">01 23 45 67 89</a>
    </div>
</div>
```

---

### 6. Interview Section (.interview-section)

Section interview avec questions/réponses (page Médecins).

**Usage :**
```html
<div class="interview-section">
    <h2>Titre de l'interview</h2>

    <div class="interview-qa">
        <p class="interview-question">Question ?</p>
        <div class="interview-answer">
            <p>Réponse...</p>
            <ul>
                <li>Point 1</li>
                <li>Point 2</li>
            </ul>
        </div>
    </div>
</div>
```

**Caractéristiques :**
- Fond dégradé beige
- Bordure gauche : 5px solid or
- Padding : 40px
- Border-radius : 12px

---

### 7. Mission Cards (.mission-card)

Cartes pour les missions de santé publique. Peuvent être cliquables avec images.

**Usage basique :**
```html
<section class="mission-section">
    <div class="container">
        <div class="mission-card">
            <div class="mission-icon">🏥</div>
            <h3>Titre de la mission</h3>
            <p>Description...</p>
        </div>
    </div>
</section>
```

**Usage avec carte cliquable et image :**
```html
<div class="mission-card clickable" onclick="window.open('url-de-la-photo', '_blank')">
    <h3>Titre avec photo</h3>
    <p>Description...</p>
    <img src="chemin/vers/image.jpg" alt="Description">
</div>
```

**Caractéristiques :**
- Bordure gauche : 4px solid or
- Icône circulaire avec gradient or
- Hover standard : translateY(-3px) + shadow-xl
- Hover cliquable : translateY(-5px) + scale(1.01) + ombre renforcée
- Images : 100% width, border-radius, effet zoom au hover
- Cursor : pointer (indique que c'est cliquable)

---

### 8. Content Box (.content-box)

Boîte de contenu générique (page Projet de Santé).

**Usage :**
```html
<div class="content-box">
    <h2>Titre principal</h2>
    <h3>Sous-titre</h3>
    <p>Contenu...</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
```

---

### 9. Protocole Cards (.protocole-card)

Cartes détaillées pour les protocoles pluriprofessionnels.

**Usage :**
```html
<div class="protocole-card">
    <div class="protocole-header">
        <div class="protocole-icon">
            <svg>...</svg>
        </div>
        <h2>Nom du protocole</h2>
    </div>

    <h3>Section</h3>
    <p>Description...</p>
</div>
```

**Caractéristiques :**
- Bordure gauche : 5px solid or
- Header avec icône circulaire
- Border-bottom sur header

---

### 10. Highlight Box (.highlight-box)

Boîte de mise en évidence pour informations importantes.

**Usage :**
```html
<div class="highlight-box">
    <p><strong>Information importante :</strong></p>
    <p>Détails...</p>
</div>
```

**Caractéristiques :**
- Fond : beige clair
- Bordure gauche : 4px solid or
- Padding : 15px

---

## 🔧 JavaScript

Toutes les fonctionnalités JavaScript sont centralisées dans `js/script.js`.

### Fonctions disponibles :

#### FAQ Accordion
Initialisation automatique au chargement :
```javascript
// Automatically initialized via DOMContentLoaded
// Toggles .collapsed class on .faq-item when .faq-question is clicked
```

#### Dropdown Menus
Initialisation automatique au chargement :
```javascript
// Automatically initialized via DOMContentLoaded
// Handles navigation dropdown menus
```

---

## 📱 Responsive

Tous les composants sont responsive et s'adaptent automatiquement aux petits écrans (< 768px).

**Breakpoints :**
- Desktop : > 768px
- Mobile : ≤ 768px

---

## ✅ Bonnes pratiques

### À FAIRE ✓
- Utiliser les variables CSS (`--primary-color`, etc.)
- Utiliser les classes de composants existantes
- Ajouter `css/components.css` après `css/style.css` dans le HTML
- Inclure `js/script.js` avant `</body>`
- Garder la classe `.collapsed` sur les `.faq-item` par défaut

### À NE PAS FAIRE ✗
- **NE PAS** créer de balises `<style>` inline dans le HTML
- **NE PAS** dupliquer du JavaScript dans les pages HTML
- **NE PAS** mélanger différentes couleurs pour le même composant
- **NE PAS** utiliser des couleurs en dur (hex codes) dans le HTML
- **NE PAS** créer de nouveaux composants sans les ajouter à ce guide

---

## 🆕 Ajouter un nouveau composant

1. Créer le CSS dans `css/components.css`
2. Utiliser les variables CSS existantes
3. Ajouter une section responsive si nécessaire
4. Documenter le composant dans ce guide
5. Tester sur toutes les pages concernées

---

## 📝 Exemple de page complète

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Page - Estaque Santé</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <!-- Navigation (dans style.css) -->
    <nav class="navbar">...</nav>

    <!-- Hero (dans style.css) -->
    <section class="hero-specialite">...</section>

    <!-- Intro (dans components.css) -->
    <section class="intro-section">
        <p>Introduction...</p>

        <div class="contact-box">
            <h3>Contact</h3>
            <p>Info...</p>
        </div>
    </section>

    <!-- FAQ (dans components.css) -->
    <div class="faq-container">...</div>

    <!-- Footer (dans style.css) -->
    <footer class="footer">...</footer>

    <!-- JavaScript -->
    <script src="js/script.js"></script>
</body>
</html>
```

---

## 🔍 Debug

### Les FAQ ne s'ouvrent/ferment pas ?
- Vérifier que `<script src="js/script.js"></script>` est présent
- Vérifier que la classe `.faq-item` a la classe `.collapsed` par défaut
- Vérifier la console JavaScript pour les erreurs

### Les styles ne s'appliquent pas ?
- Vérifier que `<link rel="stylesheet" href="css/components.css">` est présent
- Vérifier l'ordre : `style.css` puis `components.css`
- Vérifier la console pour les erreurs 404

---

**Dernière mise à jour :** Décembre 2024
**Version :** 1.0
