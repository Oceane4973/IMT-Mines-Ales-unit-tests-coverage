
/**
 * CE FICHIER A ETE MODIFIE POUR REPONDRE AUX ERREURS RELEVES PAR LES TESTS (10 erreurs relevées par les tests)
 */

/** 0 */

/** Description : Fonction my_alpha_number_t
  it 1 : Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello” (execpt.toBe(“hello”))
  it 2 : Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour” (execpt .toBe(“Bonjour”))
  it 3 : Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “Hello”(execpt .toBe(“Hello”))
 */

export const my_alpha_number_t = (nbr) => {
  if (!nbr || nbr.trim() === '') {
    return 'Hello';
  }
  
  return `${nbr[0].toUpperCase()}${nbr.slice(1)}`;
};

/** 1 */

/** Description : Fonction sum
  it 1 : Vérifie que la somme de deux nombres est correcte.
  it 2 : Vérifie qu'un des arguments n'est pas un nombre.
  it 3 : Vérifie que les deux arguments ne sont pas des nombres.
  it 4 : Vérifie qu'aucun argument n'est passé.
  it 5 : Vérifie qu'un argument manquant est traité correctement.
  it 6 : Vérifie que des nombres négatifs sont correctement additionnés.
 */

export const sum = (a, b) => {
  if (typeof a != 'number' || typeof b != 'number' ) {
    return 0;
  }

  return a + b;
};

/** 2 */

/** Description : Fonction my_size_alpha_t
  it 1 : Vérifie que la longueur d'une chaîne classique est correcte.
  it 2 : Vérifie que la longueur d'une chaîne vide est égale à 0.
  it 3 : Vérifie que si l'entrée n'est pas une chaîne, la fonction retourne 0.
  it 4 : Vérifie que si aucun argument n'est passé, la valeur par défaut est utilisée et retourne 0.
  it 5 : Vérifie que la longueur d'une chaîne avec des espaces est correcte.
 */

export const my_size_alpha_t = (str = '') => {
  let count = 0;

  if (typeof str != 'string') {
    return count;
  }

  while(!!str[count]) {
    count++;
  }

  return count;
}

/** 3 */

/** Description : Fonction my_display_alpha_t
  it 1 : Vérifie que la fonction retourne la chaîne complète "abcdefghijklmnopqrstuvwxyz".
  it 2 : Vérifie que la longueur de la chaîne retournée est égale à 26.
  it 3 : Vérifie que chaque lettre de l'alphabet, de "a" à "z", est présente dans la chaîne.
*/

export const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

/** 4 */

/** Description : Fonction my_array_alpha_t
  it 1 : Vérifie que la fonction retourne un tableau contenant chaque caractère d'une chaîne classique.
  it 2 : Vérifie que la fonction retourne un tableau vide lorsque la chaîne est vide.
  it 3 : Vérifie que la fonction retourne un tableau vide si l'entrée n'est pas une chaîne.
  it 4 : Vérifie que la fonction fonctionne correctement pour une chaîne contenant des espaces.
  it 5 : Vérifie que la fonction retourne un tableau avec des caractères dans le bon ordre.
*/

export const my_array_alpha_t = (str) => {
  const result = [];

  for (let i = 0; i < my_size_alpha_t(str); i += 1) {
    result[i] = str[i];
  }

  return result;
};

/** 5 */

/** Description : Fonction my_is_posi_neg_t
  it 1 : Vérifie que la fonction retourne "POSITIF" pour un nombre positif.
  it 2 : Vérifie que la fonction retourne "NEGATIVE" pour un nombre négatif.
  it 3 : Vérifie que la fonction retourne "NEGATIVE" pour zéro.
  it 4 : Vérifie que la fonction retourne "NEGATIVE" pour une valeur non numérique.
  it 5 : Vérifie que la fonction fonctionne correctement avec des nombres décimaux positifs et négatifs.
 */

  export const my_is_posi_neg_t = (nbr) => {
    if (typeof nbr !== 'number' || isNaN(nbr) || nbr <= 0) {
      return 'NEGATIVE';
    }
    return 'POSITIF';
  };
  

/** 6 */

/** Description : Fonction fibo
  it 1 : Vérifie que la fonction retourne 0 pour une valeur de n inférieure ou égale à 0.
  it 2 : Vérifie que la fonction retourne 1 pour n = 1.
  it 3 : Vérifie que la fonction retourne 1 pour n = 2.
  it 4 : Vérifie que la fonction retourne le bon résultat pour n = 5 (résultat attendu : 5).
  it 5 : Vérifie que la fonction retourne le bon résultat pour n = 10 (résultat attendu : 55).
  it 6 : Vérifie que la fonction retourne 0 pour une valeur non numérique de n.
*/

export const fibo = (n) => {
  if (typeof n !== 'number' || isNaN(n) || n <= 0) {
    return 0; // Pour les entrées non numériques ou <= 0
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
};

/** 7 */

/** Description : Fonction my_display_alpha_reverse_t
  it 1 : Vérifie que la fonction retourne l'alphabet inversé complet, soit "zyxwvutsrqponmlkjihgfedcba".
  it 2 : Vérifie que la longueur de la chaîne retournée est égale à 26.
  it 3 : Vérifie que chaque lettre de l'alphabet inversé, de "z" à "a", est présente dans la chaîne.
  it 4 : Vérifie que la fonction retourne une chaîne vide si l'alphabet source est vide.
  it 5 : Vérifie que l'ordre des lettres dans le résultat est strictement inverse à celui de l'alphabet normal.
*/

export const my_display_alpha_reverse_t = (alpha = my_display_alpha_t()) => {
  let reverseAlpha = '';

  for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
    reverseAlpha += alpha[i - 1];
  }

  return reverseAlpha;
};

/** 8 */

/** Description : Fonction my_length_array_t
  it 1 : Vérifie que la fonction retourne la longueur correcte d'un tableau contenant des éléments.
  it 2 : Vérifie que la fonction retourne 0 pour un tableau vide.
  it 3 : Vérifie que la fonction retourne 0 si l'entrée n'est pas un tableau.
  it 4 : Vérifie que la fonction calcule correctement la longueur d'un tableau contenant des valeurs nulles ou indéfinies.
  it 5 : Vérifie que la fonction fonctionne correctement avec un tableau contenant des types mixtes (nombres, chaînes, objets, etc.).
 */

  export const my_length_array_t = (arr) => {
    if (!Array.isArray(arr)) {
      return 0;
    }
  
    let i = 0;
    while (i in arr) {
      i += 1;
    }
  
    return i;
  };

/** 9 */

/** Description : Fonction my_display_unicode_t
  it 1 : Vérifie que la fonction retourne une chaîne correcte pour un tableau contenant des codes ASCII valides.
  it 2 : Vérifie que la fonction retourne une chaîne vide pour un tableau vide.
  it 3 : Vérifie que la fonction ignore les codes ASCII non valides (en dehors des plages spécifiées).
  it 4 : Vérifie que la fonction gère correctement les espaces (code 32) dans le tableau.
  it 5 : Vérifie que la fonction retourne une chaîne vide si l'entrée n'est pas un tableau valide.
  it 6 : Vérifie que la fonction retourne correctement une chaîne contenant des caractères alphanumériques mixtes et des espaces.
 */

export const my_display_unicode_t = (arr) => {
  const results = [];

  for (let i = 0; i < arr.length; i += 1) {
    const decimal  = arr[i];

    if ((decimal >= 65 && decimal <= 99)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 97 && decimal <= 122)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 48 && decimal <= 57)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if (decimal === 32) {
      results[i] = String.fromCharCode(arr[i]);
    }
  }

  return results.join('');
};

/** 10 */

/** Description : Fonction quickSort
  it 1 : Vérifie que la fonction retourne un tableau trié pour un tableau d'entiers positifs.
  it 2 : Vérifie que la fonction retourne un tableau vide si le tableau d'entrée est vide.
  it 3 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres négatifs.
  it 4 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres en double.
  it 5 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant un seul élément.
  it 6 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres mixtes (positifs, négatifs, zéro).
 */

export function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/** 11 */

/** Description : Fonction tspBrutForce
  it 1 : Vérifie que la fonction retourne la distance minimale et le chemin correct pour un graphe de trois villes.
  it 2 : Vérifie que la fonction retourne la distance minimale pour un graphe de quatre villes.
  it 3 : Vérifie que la fonction gère correctement un graphe où toutes les distances sont égales.
  it 4 : Vérifie que la fonction retourne une distance nulle et un chemin vide si aucune ville n'est donnée.
  it 5 : Vérifie que la fonction retourne correctement la boucle minimale avec retour à la ville de départ.
 */

export function tspBrutForce(distances) {
  if (!distances || Object.keys(distances).length === 0) {
    return { minDistance: 0, meilleurePermutation: [] }; // Gestion des cas sans villes
  }

  let villes = Object.keys(distances);
  let permutations = permuter(villes);
  let minDistance = Infinity;
  let meilleurePermutation = [];
  
  permutations.forEach(chemin => {
    let distanceTotale = 0;
    for (let i = 0; i < chemin.length - 1; i++) {
      distanceTotale += distances[chemin[i]][chemin[i + 1]];
    }
    distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]]; // Retour à la ville de départ
    
    if (distanceTotale < minDistance) {
      minDistance = distanceTotale;
      meilleurePermutation = chemin;
    }
  });

  return { minDistance, meilleurePermutation };
}

/** Description : Fonction permuter
  it 1 : Vérifie que la fonction retourne toutes les permutations pour un tableau de trois éléments.
  it 2 : Vérifie que la fonction retourne un tableau vide si l'entrée est un tableau vide.
  it 3 : Vérifie que la fonction retourne un tableau avec une permutation unique si l'entrée contient un seul élément.
  it 4 : Vérifie que la fonction retourne toutes les permutations dans le bon ordre pour un tableau de deux éléments.
  it 5 : Vérifie que la fonction gère correctement un tableau avec des valeurs en double.
 */

export function permuter(arr) {
  if (arr.length === 0) return [[]];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      let reste = arr.slice(0, i).concat(arr.slice(i + 1));
      let permut = permuter(reste);
      for (let j = 0; j < permut.length; j++) {
          result.push([arr[i]].concat(permut[j]));
      }
  }
  return result;
}

/** 12 */

/** Description : Fonction resoudreSudoku
  it 1 : Vérifie que la fonction retourne true pour une grille de Sudoku valide et complète.
  it 2 : Vérifie que la fonction retourne false pour une grille de Sudoku invalide.
  it 3 : Vérifie que la fonction modifie correctement une grille incomplète pour la résoudre.
  it 4 : Vérifie que la fonction gère une grille vide (tous les zéros) et la résout si possible.
  it 5 : Vérifie que la fonction ne modifie pas une grille déjà complète et valide.
 */

  export function resoudreSudoku(grille) {
    // Vérification initiale pour s'assurer que la grille est valide
    for (let ligne = 0; ligne < 9; ligne++) {
      for (let col = 0; col < 9; col++) {
        const num = grille[ligne][col];
        if (num !== 0) {
          grille[ligne][col] = 0;
          if (!estValide(grille, ligne, col, num)) {
            grille[ligne][col] = num;
            return false;
          }
          grille[ligne][col] = num;
        }
      }
    }
  
    // Résolution du Sudoku
    for (let ligne = 0; ligne < 9; ligne++) {
      for (let col = 0; col < 9; col++) {
        if (grille[ligne][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (estValide(grille, ligne, col, num)) {
              grille[ligne][col] = num;
              if (resoudreSudoku(grille)) {
                return true;
              }
              grille[ligne][col] = 0; // Backtrack
            }
          }
          return false; // Impossible 
        }
      }
    }
  
    return true; // Résolu
  }
  

/** Description : Fonction estValide
  it 1 : Vérifie que la fonction retourne true si un nombre peut être placé dans une case vide.
  it 2 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même ligne.
  it 3 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même colonne.
  it 4 : Vérifie que la fonction retourne false si un nombre est déjà présent dans le sous-carré 3x3.
  it 5 : Vérifie que la fonction gère correctement une grille vide (tous les zéros) en autorisant tout placement.
 */

export function estValide(grille, ligne, col, num) {
  for (let i = 0; i < 9; i++) {
      if (grille[ligne][i] === num || grille[i][col] === num) return false;
  }
  let startRow = Math.floor(ligne / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
          if (grille[i][j] === num) return false;
      }
  }
  return true;
}




