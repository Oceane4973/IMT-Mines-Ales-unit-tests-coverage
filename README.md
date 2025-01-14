# Tests E2E pour la page `/`

### 1. Tests de la bannière principale
- **E2E-001** : Vérifier que le texte principal "À LOUER APPARTEMENT ROSAS" s'affiche correctement sur la bannière.
- **E2E-002** : Vérifier que le sous-texte "2 chambres | 30 m de la plage" est visible et ne se chevauche pas avec d'autres éléments.
- **E2E-003** : Vérifier que le texte des tarifs "De 460 € à 760 € / semaine" est lisible et bien positionné.
- **E2E-004** : Cliquer sur le bouton "Contactez-nous" et vérifier qu'il redirige vers la section ou la page de contact.
- **E2E-005** : Vérifier que le texte descriptif "APPARTEMENT ROSAS - 2 chambres | 30 m de la plage" reste lisible même en mode mobile.

---

### 2. Tests de la gallerie
- **E2E-006** : Vérifier que le texte descriptif "APPARTEMENT ROSAS - 2 chambres | 30 m de la plage" reste lisible même en mode mobile.

---

### 3. Tests de la section "Caractéristiques"
- **E2E-007** : Vérifier que toutes les icônes des caractéristiques (ex. plage à 30 m, parking gratuit, etc.) s'affichent correctement.
- **E2E-008** : Tester la lisibilité des caractéristiques sur des écrans de différentes tailles (mobile, tablette, desktop).

---

### 4. Tests de la section "Tarifs"
- **E2E-009** : Vérifier que les trois cartes tarifaires (Basse saison, Moyenne saison, Haute saison) sont visibles et correctement alignées.
- **E2E-010** : Vérifier que les tarifs (460 €, 560 €, 760 € / semaine) sont bien lisibles et correctement positionnés.
- **E2E-011** : Cliquer sur le bouton "Contact" de chaque carte et vérifier qu'il redirige vers la section ou la page de contact.

---

### 5. Tests de Performance
- **E2E-012** : Vérifier que la page se charge en moins de 3 secondes sur une connexion moyenne.

---
<br>
<br>

# Cas de test pour la page `/geo`

### 1. Tests de la bannière principale
- **CT-001** : Vérifier que le texte principal "IDEALEMENT SITUE" s'affiche correctement.
- **CT-002** : Vérifier que le sous-texte "30 mètres de la plage" s'affiche correctement.
- **CT-003** : Vérifier que le bouton "Contactez-nous" est visible et cliquable.
- **CT-004** : Cliquer sur le bouton "Contactez-nous" et vérifier qu'il redirige vers la bonne section/page.

---

### 2. Tests de la section "Accès"
- **CT-005** : Vérifier que les informations pour le moyen de transport **voiture** (texte et temps de trajet) s'affichent correctement.
- **CT-006** : Vérifier que les informations pour le moyen de transport **avion** (texte et temps de trajet) s'affichent correctement.
- **CT-007** : Vérifier que les informations pour le moyen de transport **train** (texte et temps de trajet) s'affichent correctement.

---

### 3. Tests de la carte (Localisation)
- **CT-008** : Vérifier que la carte Google Maps s'affiche correctement.
- **CT-009** : Vérifier que l'emplacement indiqué sur la carte correspond à l'adresse mentionnée dans les spécifications.

---

### 4. Tests de la section "À proximité"
- **CT-010** : Vérifier que le texte descriptif de la section "À proximité" s'affiche correctement.
- **CT-011** : Vérifier que les informations sur les commerces, la plage, et les points d'intérêt sont correctement listées.

---

### 5. Tests de la section "Nos meilleures adresses"
- **CT-012** : Vérifier que la liste des restaurants et adresses recommandées est affichée.
- **CT-013** : Vérifier que les noms des restaurants correspondent aux spécifications.

---
<br>
<br>

# Tests E2E pour la page `/pricing`

### 1. Tests de la bannière principale
- **E2E-001** : Vérifier que le texte principal "UN PRIX POUR TOUTES LES SAISONS" s'affiche correctement.
- **E2E-002** : Vérifier que le sous-texte "Venez séjourner à Rosas" est visible et bien positionné.
- **E2E-003** : Vérifier que le texte des tarifs "De 460 € à 760 € / semaine" est lisible et correctement aligné.
- **E2E-004** : Cliquer sur le bouton "Contactez-nous" et vérifier qu'il redirige vers la section ou la page de contact.

---

### 2. Tests des cartes tarifaires
- **E2E-005** : Vérifier que les trois cartes tarifaires (Basse saison, Moyenne saison, Haute saison) sont visibles et alignées horizontalement sur desktop.
- **E2E-006** : Vérifier que les tarifs (460 €, 560 €, 760 € / semaine) sont affichés correctement pour chaque carte.
- **E2E-007** : Vérifier que les caractéristiques listées sous chaque carte (dates, nombre de personnes, lits, services inclus) sont visibles et lisibles.
- **E2E-008** : Tester la fonctionnalité des boutons "Contact" sous chaque carte et vérifier qu'ils redirigent vers la section ou la page de contact.

---

### 3. Tests de la section des conditions de réservation
- **E2E-009** : Vérifier que le texte "50% du prix à la réservation, puis 100% à une semaine de l'arrivée, avec caution de 250 euros" s'affiche correctement.
- **E2E-010** : Vérifier que les informations de paiement (logos de PayPal, Visa, Mastercard) sont visibles et alignées.

---

### 4. Tests de responsivité
#### Écran de petite taille (mobile) :
- **E2E-011** : Vérifier que les cartes tarifaires (Basse, Moyenne, Haute saison) s'affichent correctement en mode vertical (empilées) sans chevauchement.
- **E2E-012** : Vérifier que les caractéristiques listées sous chaque carte restent lisibles sur mobile.
- **E2E-013** : Tester que les textes de la section des conditions de réservation ne se chevauchent pas.

#### Écran de taille moyenne (tablette) :
- **E2E-014** : Vérifier que les cartes tarifaires s'affichent en une ou deux colonnes selon la largeur de l'écran.
- **E2E-015** : Vérifier que la mise en page des conditions de réservation est bien centrée et lisible.

#### Écran de grande taille (desktop) :
- **E2E-016** : Vérifier que la disposition des éléments reste cohérente et proportionnée sur des écrans larges.
- **E2E-017** : Vérifier que les cartes tarifaires et les sections sont bien alignées horizontalement.

---

### 5. Tests de Performance
- **E2E-018** : Vérifier que la page se charge en moins de 3 secondes sur une connexion moyenne.

---
<br>
<br>

# Tests E2E pour la page `/feedback`

### 1. Tests de la bannière principale
- **E2E-001** : Vérifier que le texte principal "IDEALEMENT SITUE" s'affiche correctement.
- **E2E-002** : Vérifier que le sous-texte "30 mètres de la plage" est visible et bien positionné.
- **E2E-003** : Vérifier que le bouton "Contactez-nous" est visible et cliquable.
- **E2E-004** : Cliquer sur le bouton "Contactez-nous" et vérifier qu'il redirige vers la section ou la page de contact.

---

### 2. Tests de la section des statistiques
- **E2E-005** : Vérifier que le compteur "0 Nombre d'avis" est visible et correctement affiché.
- **E2E-006** : Vérifier que la date "2022 Depuis juillet" est bien affichée.
- **E2E-007** : Tester sur des écrans de différentes tailles pour s'assurer que les icônes et les textes ne se chevauchent pas.

---

### 3. Tests du formulaire d'avis
- **E2E-008** : Vérifier que le champ "Nom" (par défaut "Jean") est visible, cliquable, et éditable.
- **E2E-009** : Vérifier que le champ "Message" est visible, cliquable, et éditable.
- **E2E-010** : Laisser les champs vides et tenter de soumettre le formulaire pour vérifier qu'un message d'erreur apparaît.
- **E2E-011** : Remplir le formulaire avec un nom et un message valides, cliquer sur le bouton "Envoyer", et vérifier que l'avis est soumis correctement.
- **E2E-012** : Vérifier que le bouton "Envoyer" est visible et fonctionnel sur mobile et desktop.
- **E2E-013** : Soumettre plusieurs avis et vérifier que le compteur "Nombre d'avis" est mis à jour en conséquence.

---

### 4. Tests de la section "Nos clients parlent de nous"
- **E2E-014** : Vérifier que la section "Nos clients parlent de nous" est visible.
- **E2E-015** : Vérifier que les avis soumis apparaissent correctement sous cette section après soumission via le formulaire.
- **E2E-016** : Vérifier que les avis s'affichent avec le bon format (nom, message).

---

### 5. Tests de responsivité
#### Écran de petite taille (mobile) :
- **E2E-017** : Vérifier que les sections (bannière, statistiques, formulaire, avis) sont bien empilées et lisibles.
- **E2E-018** : Vérifier que le bouton "Envoyer" reste visible et fonctionnel.
- **E2E-019** : Tester la lisibilité des icônes et textes des statistiques sur mobile.

#### Écran de taille moyenne (tablette) :
- **E2E-020** : Vérifier que les sections sont bien proportionnées et que les icônes et textes ne se chevauchent pas.

#### Écran de grande taille (desktop) :
- **E2E-021** : Vérifier que la mise en page reste alignée et proportionnée sur des écrans larges.

---

### 7. Tests de Performance
- **E2E-022** : Vérifier que la page se charge en moins de 3 secondes sur une connexion moyenne.
- **E2E-023** : Tester que les avis soumis sont affichés instantanément après soumission.

---
<br>
<br>

# Tests E2E pour la page `/contact`

### 1. Tests de la bannière principale
- **E2E-001** : Vérifier que le texte principal "CONTACTEZ-NOUS" s'affiche correctement.
- **E2E-002** : Vérifier que le sous-texte "remplissez le formulaire" est visible et bien positionné.
- **E2E-003** : Vérifier que l'image associée à la bannière est visible et correctement affichée.

---

### 2. Tests du formulaire de contact
#### Champs du formulaire
- **E2E-004** : Vérifier que le champ "Nom" (par défaut "Jean") est visible, cliquable, et éditable.
- **E2E-005** : Vérifier que le champ "Prénom" (par défaut "Louis") est visible, cliquable, et éditable.
- **E2E-006** : Vérifier que le champ "Téléphone" accepte uniquement des valeurs numériques valides.
- **E2E-007** : Vérifier que le champ "Email" accepte uniquement des adresses email valides (par exemple, "jean.louis@email.com").
- **E2E-008** : Vérifier que les champs de date ("jj/mm/aaaa") sont visibles, fonctionnels, et que le format de date est correct.
- **E2E-009** : Vérifier que le champ "Message" est visible, cliquable, et permet d'entrer du texte.

#### Soumission du formulaire
- **E2E-010** : Laisser tous les champs vides et cliquer sur "Envoyer" pour vérifier qu'un message d'erreur apparaît pour chaque champ obligatoire.
- **E2E-011** : Remplir tous les champs avec des valeurs valides et soumettre le formulaire. Vérifier que le formulaire est soumis avec succès (message de confirmation ou redirection).
- **E2E-012** : Tester l'envoi du formulaire avec un email incorrect (par exemple, "jean.louis") pour vérifier qu'un message d'erreur apparaît.
- **E2E-013** : Tester l'envoi du formulaire avec un numéro de téléphone incorrect (par exemple, "ABC123") pour vérifier qu'un message d'erreur apparaît.

---

### 3. Tests de responsivité
#### Écran de petite taille (mobile) :
- **E2E-014** : Vérifier que les champs du formulaire sont empilés verticalement et restent lisibles.
- **E2E-015** : Vérifier que le bouton "Envoyer" est visible et fonctionnel sur mobile.

#### Écran de taille moyenne (tablette) :
- **E2E-016** : Vérifier que la disposition des champs est bien proportionnée et ne se chevauche pas.

#### Écran de grande taille (desktop) :
- **E2E-017** : Vérifier que la mise en page reste alignée et proportionnée sur des écrans larges.

---

### 4. Tests de Performance
- **E2E-018** : Vérifier que la page se charge en moins de 3 secondes sur une connexion moyenne.
- **E2E-019** : Vérifier que la soumission du formulaire est rapide et ne dépasse pas 5 secondes.

---

### 5. Tests de Validation et Sécurité
- **E2E-020** : Vérifier que le champ "Email" ne permet pas d'entrer des scripts ou des caractères spéciaux malveillants.
- **E2E-021** : Vérifier que le champ "Message" ne permet pas d'entrer des scripts ou des caractères HTML non désirés.
- **E2E-022** : Tester une injection SQL ou JavaScript dans les champs et vérifier que l'application les rejette correctement.


# Scénarios de tests pour la page /login
### 1. Tests de la structure de la page
- **E2E-001** : Vérifier que le bouton "Envoyer" est visible et cliquable.
- **E2E-002** : Vérifier que l'icône utilisateur (fa-user) est correctement affichée à gauche du champ "Nom d'utilisateur".
- **E2E-003** : Vérifier que l'icône verrou (fa-lock) est correctement affichée à gauche du champ "Mot de passe".

### 2. Tests de validation des champs
- **E2E-004** : Remplir uniquement le champ "Nom d'utilisateur" et cliquer sur "Envoyer". Vérifier qu'un message d'erreur apparaît pour le champ "Mot de passe".
- **E2E-005** : Remplir uniquement le champ "Mot de passe" et cliquer sur "Envoyer". Vérifier qu'un message d'erreur apparaît pour le champ "Nom d'utilisateur".

### 3. Tests de Performance
E2E-006 : Vérifier que la page /login se charge en moins de 3 secondes sur une connexion moyenne.
E2E-007 : Vérifier que la soumission du formulaire est rapide et ne dépasse pas 2 secondes.
