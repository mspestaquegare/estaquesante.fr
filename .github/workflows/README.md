# Workflows GitHub Actions

## Auto-deploy to main

### Fonctionnement

Ce workflow automatise le déploiement des modifications vers la branche `main` et donc vers le site GitHub Pages.

**Déclenchement :** À chaque push sur une branche `claude/**`

**Actions :**
1. Récupère le code de la branche `claude/**`
2. Merge automatiquement vers `main`
3. Push les modifications sur `main`
4. GitHub Pages déploie automatiquement le site

### Avantages

✅ Plus besoin de merger manuellement les branches
✅ Plus besoin de créer des pull requests
✅ Les modifications apparaissent directement sur le site
✅ Historique propre avec les commits de merge

### Utilisation

Simplement pousser sur une branche qui commence par `claude/` :

```bash
git push origin claude/ma-feature
```

Le workflow s'exécutera automatiquement et mettra à jour le site en quelques secondes !

### Surveillance

Vous pouvez suivre l'exécution des workflows dans l'onglet "Actions" de votre repository GitHub.
