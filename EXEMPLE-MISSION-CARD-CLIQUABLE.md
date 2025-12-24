# Exemple : Mission Cards Cliquables avec Photos

## 📸 Comment rendre une mission card cliquable

### Avant (card simple)
```html
<div class="mission-card">
    <h3>📸 Journée Prévention Diabète</h3>
    <p>Action de dépistage et sensibilisation organisée en novembre 2024.</p>
    <img src="images/prevention-diabete.jpg" alt="Journée prévention diabète">
</div>
```

### Après (card cliquable)
```html
<div class="mission-card clickable" onclick="window.open('images/prevention-diabete.jpg', '_blank')">
    <h3>📸 Journée Prévention Diabète</h3>
    <p>Action de dépistage et sensibilisation organisée en novembre 2024.</p>
    <img src="images/prevention-diabete.jpg" alt="Journée prévention diabète">
</div>
```

**Changements :**
1. Ajouter la classe `clickable` à côté de `mission-card`
2. Ajouter `onclick="window.open('chemin/vers/photo.jpg', '_blank')"`

---

## 🎨 Effets visuels automatiques

Avec la classe `clickable`, la carte obtient automatiquement :

✅ **Cursor pointer** - L'utilisateur sait qu'il peut cliquer
✅ **Hover renforcé** - La carte se soulève de 5px et grandit légèrement (scale 1.01)
✅ **Shadow renforcée** - Ombre dorée plus prononcée au hover
✅ **Zoom image** - L'image dans la carte grossit légèrement au hover
✅ **Feedback au clic** - Légère animation au moment du clic

---

## 🔗 Autres utilisations possibles

### Ouvrir une galerie photo
```html
<div class="mission-card clickable" onclick="window.open('https://photos.app.goo.gl/xyz', '_blank')">
    <h3>📸 Album Photos - Vaccination Grippe 2024</h3>
    <p>Cliquez pour voir toutes les photos de la campagne.</p>
    <img src="images/preview-vaccination.jpg" alt="Aperçu vaccination">
</div>
```

### Ouvrir un PDF
```html
<div class="mission-card clickable" onclick="window.open('documents/rapport-mission.pdf', '_blank')">
    <h3>📄 Rapport Annuel Missions 2024</h3>
    <p>Cliquez pour télécharger le rapport complet (PDF).</p>
</div>
```

### Lien vers une page spécifique
```html
<div class="mission-card clickable" onclick="window.location.href='detail-mission.html'">
    <h3>🔍 En savoir plus</h3>
    <p>Cliquez pour voir les détails de cette mission.</p>
</div>
```

---

## 📱 Responsive

Les cartes cliquables fonctionnent parfaitement sur mobile :
- Touch : Un tap ouvre le lien
- Desktop : Hover + Click

---

## ✨ Comparaison visuelle

| État | Effet |
|------|-------|
| **Normal** | Card au repos, ombre légère |
| **Hover** | Card se soulève de 5px, grandit de 1%, ombre dorée |
| **Click** | Légère animation de feedback |
| **Image hover** | Image zoom à 102% |

---

## 🛠️ Code complet d'exemple

```html
<section class="mission-section">
    <div class="container">
        <h2 class="section-title">Nos Actions en Images</h2>

        <!-- Card cliquable avec photo -->
        <div class="mission-card clickable" onclick="window.open('images/journee-diabete.jpg', '_blank')">
            <h3>📸 Journée Mondiale du Diabète</h3>
            <p><strong>14 Novembre 2024</strong> - Dépistage gratuit, ateliers nutrition et activité physique.</p>
            <p>Cliquez pour voir la photo en grand format.</p>
            <img src="images/journee-diabete.jpg" alt="Journée mondiale du diabète - Stand MSP Estaque">
        </div>

        <!-- Card cliquable avec album Google Photos -->
        <div class="mission-card clickable" onclick="window.open('https://photos.app.goo.gl/abc123', '_blank')">
            <h3>📸 Campagne Vaccination Grippe 2024</h3>
            <p><strong>Octobre-Novembre 2024</strong> - Plus de 200 personnes vaccinées.</p>
            <p>Cliquez pour voir l'album photo complet.</p>
            <img src="images/preview-vaccination.jpg" alt="Aperçu campagne vaccination">
        </div>

        <!-- Card normale (non cliquable) -->
        <div class="mission-card">
            <h3>🎯 Objectifs 2025</h3>
            <p>Nos missions prioritaires pour l'année prochaine...</p>
        </div>
    </div>
</section>
```

---

**Astuce :** Ajoutez un petit texte "Cliquez pour agrandir" ou une icône 🔍 pour indiquer clairement que la carte est cliquable !
