# Hello World

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install helloworld.

Use node v16 use :
```bash
nvm install 16
```

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```

## TESTS (FR)

10 Erreurs ont été remontées et on était traitées. Si vous souhaitait le vérifiez, copiez coller le fichier index-before-tests.js dans index.js et exécutez les tests.


### Descriptions des tests

**Fonction my_alpha_number_t**

- it 1 : Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello” (execpt.toBe(“hello”))
- it 2 : Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour” (execpt .toBe(“Bonjour”))
- it 3 : Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “Hello”(execpt .toBe(“Hello”))

**Fonction sum**

- it 1 : Vérifie que la somme de deux nombres est correcte.
- it 2 : Vérifie qu'un des arguments n'est pas un nombre.
- it 3 : Vérifie que les deux arguments ne sont pas des nombres.
- it 4 : Vérifie qu'aucun argument n'est passé.
- it 5 : Vérifie qu'un argument manquant est traité correctement.
- it 6 : Vérifie que des nombres négatifs sont correctement additionnés.
 
**Fonction my_size_alpha_t**

- it 1 : Vérifie que la longueur d'une chaîne classique est correcte.
- it 2 : Vérifie que la longueur d'une chaîne vide est égale à 0.
- it 3 : Vérifie que si l'entrée n'est pas une chaîne, la fonction retourne 0.
- it 4 : Vérifie que si aucun argument n'est passé, la valeur par défaut est utilisée et retourne 0.
- it 5 : Vérifie que la longueur d'une chaîne avec des espaces est correcte.

**Fonction my_display_alpha_t**

- it 1 : Vérifie que la fonction retourne la chaîne complète "abcdefghijklmnopqrstuvwxyz".
- it 2 : Vérifie que la longueur de la chaîne retournée est égale à 26.
- it 3 : Vérifie que chaque lettre de l'alphabet, de "a" à "z", est présente dans la chaîne.

**Fonction my_array_alpha_t**

- it 1 : Vérifie que la fonction retourne un tableau contenant chaque caractère d'une chaîne classique.
- it 2 : Vérifie que la fonction retourne un tableau vide lorsque la chaîne est vide.
- it 3 : Vérifie que la fonction retourne un tableau vide si l'entrée n'est pas une chaîne.
- it 4 : Vérifie que la fonction fonctionne correctement pour une chaîne contenant des espaces.
- it 5 : Vérifie que la fonction retourne un tableau avec des caractères dans le bon ordre.

**Fonction my_is_posi_neg_t**

- it 1 : Vérifie que la fonction retourne "POSITIF" pour un nombre positif.
- it 2 : Vérifie que la fonction retourne "NEGATIVE" pour un nombre négatif.
- it 3 : Vérifie que la fonction retourne "NEGATIVE" pour zéro.
- it 4 : Vérifie que la fonction retourne "NEGATIVE" pour une valeur non numérique.
- it 5 : Vérifie que la fonction fonctionne correctement avec des nombres décimaux positifs et négatifs.

**Fonction fibo**

- it 1 : Vérifie que la fonction retourne 0 pour une valeur de n inférieure ou égale à 0.
- it 2 : Vérifie que la fonction retourne 1 pour n = 1.
- it 3 : Vérifie que la fonction retourne 1 pour n = 2.
- it 4 : Vérifie que la fonction retourne le bon résultat pour n = 5 (résultat attendu : 5).
- it 5 : Vérifie que la fonction retourne le bon résultat pour n = 10 (résultat attendu : 55).
- it 6 : Vérifie que la fonction retourne 0 pour une valeur non numérique de n.

**Fonction my_display_alpha_reverse_t**

- it 1 : Vérifie que la fonction retourne l'alphabet inversé complet, soit "zyxwvutsrqponmlkjihgfedcba".
- it 2 : Vérifie que la longueur de la chaîne retournée est égale à 26.
- it 3 : Vérifie que chaque lettre de l'alphabet inversé, de "z" à "a", est présente dans la chaîne.
- it 4 : Vérifie que la fonction retourne une chaîne vide si l'alphabet source est vide.
- it 5 : Vérifie que l'ordre des lettres dans le résultat est strictement inverse à celui de l'alphabet normal.

**Fonction my_length_array_t**

- it 1 : Vérifie que la fonction retourne la longueur correcte d'un tableau contenant des éléments.
- it 2 : Vérifie que la fonction retourne 0 pour un tableau vide.
- it 3 : Vérifie que la fonction retourne 0 si l'entrée n'est pas un tableau.
- it 4 : Vérifie que la fonction calcule correctement la longueur d'un tableau contenant des valeurs nulles ou indéfinies.
- it 5 : Vérifie que la fonction fonctionne correctement avec un tableau contenant des types mixtes (nombres, chaînes, objets, etc.).
 
**Fonction my_display_unicode_t**

- it 1 : Vérifie que la fonction retourne une chaîne correcte pour un tableau contenant des codes ASCII valides.
- it 2 : Vérifie que la fonction retourne une chaîne vide pour un tableau vide.
- it 3 : Vérifie que la fonction ignore les codes ASCII non valides (en dehors des plages spécifiées).
- it 4 : Vérifie que la fonction gère correctement les espaces (code 32) dans le tableau.
- it 5 : Vérifie que la fonction retourne une chaîne vide si l'entrée n'est pas un tableau valide.
- it 6 : Vérifie que la fonction retourne correctement une chaîne contenant des caractères alphanumériques mixtes et des espaces.

**Fonction quickSort**

- it 1 : Vérifie que la fonction retourne un tableau trié pour un tableau d'entiers positifs.
- it 2 : Vérifie que la fonction retourne un tableau vide si le tableau d'entrée est vide.
- it 3 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres négatifs.
- it 4 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres en double.
- it 5 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant un seul élément.
- it 6 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres mixtes (positifs, négatifs, zéro).
 
**Fonction tspBrutForce**

- it 1 : Vérifie que la fonction retourne la distance minimale et le chemin correct pour un graphe de trois villes.
- it 2 : Vérifie que la fonction retourne la distance minimale pour un graphe de quatre villes.
- it 3 : Vérifie que la fonction gère correctement un graphe où toutes les distances sont égales.
- it 4 : Vérifie que la fonction retourne une distance nulle et un chemin vide si aucune ville n'est donnée.
- it 5 : Vérifie que la fonction retourne correctement la boucle minimale avec retour à la ville de départ.

**Fonction permuter**
- it 1 : Vérifie que la fonction retourne toutes les permutations pour un tableau de trois éléments.
- it 2 : Vérifie que la fonction retourne un tableau vide si l'entrée est un tableau vide.
- it 3 : Vérifie que la fonction retourne un tableau avec une permutation unique si l'entrée contient un seul élément.
- it 4 : Vérifie que la fonction retourne toutes les permutations dans le bon ordre pour un tableau de deux éléments.
- it 5 : Vérifie que la fonction gère correctement un tableau avec des valeurs en double.
 
**Fonction resoudreSudoku**

- it 1 : Vérifie que la fonction retourne true pour une grille de Sudoku valide et complète.
- it 2 : Vérifie que la fonction retourne false pour une grille de Sudoku invalide.
- it 3 : Vérifie que la fonction modifie correctement une grille incomplète pour la résoudre.
- it 4 : Vérifie que la fonction gère une grille vide (tous les zéros) et la résout si possible.
- it 5 : Vérifie que la fonction ne modifie pas une grille déjà complète et valide.

**Fonction estValide**

- it 1 : Vérifie que la fonction retourne true si un nombre peut être placé dans une case vide.
- it 2 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même ligne.
- it 3 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même colonne.
- it 4 : Vérifie que la fonction retourne false si un nombre est déjà présent dans le sous-carré 3x3.
- it 5 : Vérifie que la fonction gère correctement une grille vide (tous les zéros) en autorisant tout placement.





