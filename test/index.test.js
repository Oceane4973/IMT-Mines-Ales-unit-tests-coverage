
import { my_alpha_number_t, sum, my_size_alpha_t, my_display_alpha_t, my_array_alpha_t, my_is_posi_neg_t, fibo, my_display_alpha_reverse_t, my_length_array_t, my_display_unicode_t, quickSort, tspBrutForce, permuter, resoudreSudoku, estValide } from '../src/index';

/** 0 */

/** Description : Fonction my_alpha_number_t
  it 1 : Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello” (execpt.toBe(“hello”))
  it 2 : Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour” (execpt .toBe(“Bonjour”))
  it 3: Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “Hello”(execpt .toBe(“Hello”))
 */

describe('my_alpha_number_t', () => {
  it('should return "Hello" when called without arguments', () => {
    const result = my_alpha_number_t();
    expect(result).toBe('Hello');
  });

  it('should return "Bonjour" when passed the argument "bonjour"', () => {
    const result = my_alpha_number_t('bonjour');
    expect(result).toBe('Bonjour');
  });

  it('should return "Hello" when passed an empty string', () => {
    const result = my_alpha_number_t('');
    expect(result).toBe('Hello');
  });
});


/** 1 */

/** Description : Fonction sum
  it 1 : Vérifie que la somme de deux nombres est correcte.
  it 2 : Vérifie qu'un des arguments n'est pas un nombre.
  it 3 : Vérifie que les deux arguments ne sont pas des nombres.
  it 4 : Vérifie qu'aucun argument n'est passé.
  it 5 : Vérifie qu'un argument manquant est traité correctement.
  it 6 : Vérifie que des nombres négatifs sont correctement additionnés.
 */

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return 0 if one argument is not a number', () => {
    const result = sum(2, 'hello');
    expect(result).toBe(0);
  });

  it('should return 0 if both arguments are not numbers', () => {
    const result = sum('a', null);
    expect(result).toBe(0);
  });

  it('should return 0 if no arguments are passed', () => {
    const result = sum();
    expect(result).toBe(0);
  });

  it('should return 0 if one argument is missing', () => {
    const result = sum(5);
    expect(result).toBe(0);
  });

  it('should correctly sum negative numbers', () => {
    const result = sum(-5, -10);
    expect(result).toBe(-15);
  });
});

/** 2 */

/** Description : Fonction my_size_alpha_t
  it 1 : Vérifie que la longueur d'une chaîne classique est correcte.
  it 2 : Vérifie que la longueur d'une chaîne vide est égale à 0.
  it 3 : Vérifie que si l'entrée n'est pas une chaîne, la fonction retourne 0.
  it 4 : Vérifie que si aucun argument n'est passé, la valeur par défaut est utilisée et retourne 0.
  it 5 : Vérifie que la longueur d'une chaîne avec des espaces est correcte.
 */
  describe('my_size_alpha_t', () => {
    it('should return the correct length for a regular string', () => {
      const result = my_size_alpha_t('hello');
      expect(result).toBe(5);
    });
  
    it('should return 0 for an empty string', () => {
      const result = my_size_alpha_t('');
      expect(result).toBe(0);
    });
  
    it('should return 0 if the input is not a string', () => {
      const result = my_size_alpha_t(12345);
      expect(result).toBe(0);
    });
  
    it('should return 0 if no argument is passed (default value)', () => {
      const result = my_size_alpha_t();
      expect(result).toBe(0);
    });
  
    it('should return the correct length for a string with spaces', () => {
      const result = my_size_alpha_t('hello world');
      expect(result).toBe(11);
    });
  });

/** 3 */

/** Description : Fonction my_display_alpha_t
  it 1 : Vérifie que la fonction retourne la chaîne complète "abcdefghijklmnopqrstuvwxyz".
  it 2 : Vérifie que la longueur de la chaîne retournée est égale à 26.
  it 3 : Vérifie que chaque lettre de l'alphabet, de "a" à "z", est présente dans la chaîne.
*/
describe('my_display_alpha_t', () => {
  it('should return the complete string "abcdefghijklmnopqrstuvwxyz"', () => {
    const result = my_display_alpha_t();
    expect(result).toBe('abcdefghijklmnopqrstuvwxyz');
  });

  it('should return a string of length 26', () => {
    const result = my_display_alpha_t();
    expect(result.length).toBe(26);
  });

  it('should contain every letter from "a" to "z"', () => {
    const result = my_display_alpha_t();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
      expect(result).toContain(char);
    }
  });
});

/** 4 */

/** Description : Fonction my_array_alpha_t
  it 1 : Vérifie que la fonction retourne un tableau contenant chaque caractère d'une chaîne classique.
  it 2 : Vérifie que la fonction retourne un tableau vide lorsque la chaîne est vide.
  it 3 : Vérifie que la fonction retourne un tableau vide si l'entrée n'est pas une chaîne.
  it 4 : Vérifie que la fonction fonctionne correctement pour une chaîne contenant des espaces.
  it 5 : Vérifie que la fonction retourne un tableau avec des caractères dans le bon ordre.
*/

describe('my_array_alpha_t', () => {
  it('should return an array containing each character of a regular string', () => {
    const result = my_array_alpha_t('hello');
    expect(result).toEqual(['h', 'e', 'l', 'l', 'o']);
  });

  it('should return an empty array for an empty string', () => {
    const result = my_array_alpha_t('');
    expect(result).toEqual([]);
  });

  it('should return an empty array if the input is not a string', () => {
    const result = my_array_alpha_t(12345);
    expect(result).toEqual([]);
  });

  it('should handle a string containing spaces correctly', () => {
    const result = my_array_alpha_t('hello world');
    expect(result).toEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  });

  it('should return an array with characters in the correct order', () => {
    const result = my_array_alpha_t('abcd');
    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });
});

/** 5 */

/** Description : Fonction my_is_posi_neg_t
  it 1 : Vérifie que la fonction retourne "POSITIF" pour un nombre positif.
  it 2 : Vérifie que la fonction retourne "NEGATIVE" pour un nombre négatif.
  it 3 : Vérifie que la fonction retourne "NEGATIVE" pour zéro.
  it 4 : Vérifie que la fonction retourne "NEGATIVE" pour une valeur non numérique.
  it 5 : Vérifie que la fonction fonctionne correctement avec des nombres décimaux positifs et négatifs.
 */

  describe('my_is_posi_neg_t', () => {
    it('should return "POSITIF" for a positive number', () => {
      const result = my_is_posi_neg_t(10);
      expect(result).toBe('POSITIF');
    });
  
    it('should return "NEGATIVE" for a negative number', () => {
      const result = my_is_posi_neg_t(-5);
      expect(result).toBe('NEGATIVE');
    });
  
    it('should return "NEGATIVE" for zero', () => {
      const result = my_is_posi_neg_t(0);
      expect(result).toBe('NEGATIVE');
    });
  
    it('should return "NEGATIVE" for a non-numeric value', () => {
      const result = my_is_posi_neg_t('hello');
      expect(result).toBe('NEGATIVE');
    });
  
    it('should handle positive and negative decimals correctly', () => {
      const positiveDecimal = my_is_posi_neg_t(3.14);
      expect(positiveDecimal).toBe('POSITIF');
  
      const negativeDecimal = my_is_posi_neg_t(-2.71);
      expect(negativeDecimal).toBe('NEGATIVE');
    });
  });

/** 6 */

/** Description : Fonction fibo
  it 1 : Vérifie que la fonction retourne 0 pour une valeur de n inférieure ou égale à 0.
  it 2 : Vérifie que la fonction retourne 1 pour n = 1.
  it 3 : Vérifie que la fonction retourne 1 pour n = 2.
  it 4 : Vérifie que la fonction retourne le bon résultat pour n = 5 (résultat attendu : 5).
  it 5 : Vérifie que la fonction retourne le bon résultat pour n = 10 (résultat attendu : 55).
  it 6 : Vérifie que la fonction retourne 0 pour une valeur non numérique de n.
*/

describe('fibo', () => {
  it('should return 0 for a value of n less than or equal to 0', () => {
    const result = fibo(-5);
    expect(result).toBe(0);

    const resultZero = fibo(0);
    expect(resultZero).toBe(0);
  });

  it('should return 1 for n = 1', () => {
    const result = fibo(1);
    expect(result).toBe(1);
  });

  it('should return 1 for n = 2', () => {
    const result = fibo(2);
    expect(result).toBe(1);
  });

  it('should return the correct result for n = 5', () => {
    const result = fibo(5);
    expect(result).toBe(5); // Suite : 0, 1, 1, 2, 3, 5
  });

  it('should return the correct result for n = 10', () => {
    const result = fibo(10);
    expect(result).toBe(55); // Suite : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  });

  it('should return 0 for a non-numeric value of n', () => {
    const resultString = fibo('hello');
    expect(resultString).toBe(0);

    const resultNull = fibo(null);
    expect(resultNull).toBe(0);

    const resultUndefined = fibo(undefined);
    expect(resultUndefined).toBe(0);
  });
});

/** 7 */

/** Description : Fonction my_display_alpha_reverse_t
  it 1 : Vérifie que la fonction utilise l'alphabet par défaut de my_display_alpha_t si aucun argument n'est fourni.
  it 2 : Vérifie que la fonction retourne l'alphabet inversé complet, soit "zyxwvutsrqponmlkjihgfedcba".
  it 3 : Vérifie que la longueur de la chaîne retournée est égale à 26.
  it 4 : Vérifie que chaque lettre de l'alphabet inversé, de "z" à "a", est présente dans la chaîne.
  it 5 : Vérifie que la fonction retourne une chaîne vide si l'alphabet source est vide.
  it 6 : Vérifie que l'ordre des lettres dans le résultat est strictement inverse à celui de l'alphabet normal.
*/

describe('my_display_alpha_reverse_t', () => {
  it('should use the default alphabet from my_display_alpha_t if no argument is provided', () => {
    const result = my_display_alpha_reverse_t();
    expect(result).toBe('zyxwvutsrqponmlkjihgfedcba');
  });

  it('should return the complete reversed alphabet "zyxwvutsrqponmlkjihgfedcba"', () => {
    const result = my_display_alpha_reverse_t(my_display_alpha_t());
    expect(result).toBe('zyxwvutsrqponmlkjihgfedcba');
  });

  it('should return a string of length 26', () => {
    const result = my_display_alpha_reverse_t(my_display_alpha_t());
    expect(result.length).toBe(26);
  });

  it('should contain every letter of the reversed alphabet from "z" to "a"', () => {
    const result = my_display_alpha_reverse_t(my_display_alpha_t());
    for (let char of 'zyxwvutsrqponmlkjihgfedcba') {
      expect(result).toContain(char);
    }
  });

  it('should return an empty string if the source alphabet is empty', () => {
    const emptyAlpha = '';
    const result = my_display_alpha_reverse_t(emptyAlpha);
    expect(result).toBe('');
  });

  it('should have the order of letters strictly reversed compared to the normal alphabet', () => {
    const normalAlpha = my_display_alpha_t();
    const reversedAlpha = my_display_alpha_reverse_t(normalAlpha);
    const reversedManually = normalAlpha.split('').reverse().join('');
    expect(reversedAlpha).toBe(reversedManually);
  });
});

/** 8 */

/** Description : Fonction my_length_array_t
  it 1 : Vérifie que la fonction retourne la longueur correcte d'un tableau contenant des éléments.
  it 2 : Vérifie que la fonction retourne 0 pour un tableau vide.
  it 3 : Vérifie que la fonction retourne 0 si l'entrée n'est pas un tableau.
  it 4 : Vérifie que la fonction calcule correctement la longueur d'un tableau contenant des valeurs nulles ou indéfinies.
  it 5 : Vérifie que la fonction fonctionne correctement avec un tableau contenant des types mixtes (nombres, chaînes, objets, etc.).
 */

describe('my_length_array_t', () => {
  it('should return the correct length of an array containing elements', () => {
    const result = my_length_array_t([1, 2, 3, 4, 5]);
    expect(result).toBe(5);
  });

  it('should return 0 for an empty array', () => {
    const result = my_length_array_t([]);
    expect(result).toBe(0);
  });

  it('should return 0 if the input is not an array', () => {
    const result = my_length_array_t('not an array'); // Cas non valide
    expect(result).toBe(0);
  });

  it('should correctly calculate the length of an array containing null or undefined values', () => {
    const result = my_length_array_t([1, null, undefined, 2]);
    expect(result).toBe(4);
  });

  it('should work correctly with an array containing mixed types (numbers, strings, objects, etc.)', () => {
    const result = my_length_array_t([1, 'hello', { key: 'value' }, true]);
    expect(result).toBe(4);
  });
});

/** 9 */

/** Description : Fonction my_display_unicode_t
  it 1 : Vérifie que la fonction retourne une chaîne correcte pour un tableau contenant des codes ASCII valides.
  it 2 : Vérifie que la fonction retourne une chaîne vide pour un tableau vide.
  it 3 : Vérifie que la fonction ignore les codes ASCII non valides (en dehors des plages spécifiées).
  it 4 : Vérifie que la fonction gère correctement les espaces (code 32) dans le tableau.
  it 5 : Vérifie que la fonction retourne une chaîne vide si l'entrée n'est pas un tableau valide.
  it 6 : Vérifie que la fonction retourne correctement une chaîne contenant des caractères alphanumériques mixtes et des espaces.
 */

describe('my_display_unicode_t', () => {
  it('should return a correct string for an array containing valid ASCII codes', () => {
    const result = my_display_unicode_t([65, 66, 67]); // Codes pour "ABC"
    expect(result).toBe('ABC');
  });

  it('should return an empty string for an empty array', () => {
    const result = my_display_unicode_t([]);
    expect(result).toBe('');
  });

  it('should ignore invalid ASCII codes (outside specified ranges)', () => {
    const result = my_display_unicode_t([200, 300, 400]); // Codes non valides
    expect(result).toBe('');
  });

  it('should handle spaces (code 32) in the array', () => {
    const result = my_display_unicode_t([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]); // "Hello World"
    expect(result).toBe('Hello World');
  });

  it('should return an empty string if the input is not a valid array', () => {
    const result = my_display_unicode_t('not an array'); // Entrée invalide
    expect(result).toBe('');
  });

  it('should return a string containing mixed alphanumeric characters and spaces', () => {
    const result = my_display_unicode_t([72, 101, 108, 108, 111, 32, 49, 50, 51]); // "Hello 123"
    expect(result).toBe('Hello 123');
  });
});

/** 10 */

/** Description : Fonction quickSort
  it 1 : Vérifie que la fonction retourne un tableau trié pour un tableau d'entiers positifs.
  it 2 : Vérifie que la fonction retourne un tableau vide si le tableau d'entrée est vide.
  it 3 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres négatifs.
  it 4 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres en double.
  it 5 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant un seul élément.
  it 6 : Vérifie que la fonction retourne un tableau trié pour un tableau contenant des nombres mixtes (positifs, négatifs, zéro).
 */

describe('quickSort', () => {
  it('should return a sorted array for an array of positive integers', () => {
    const result = quickSort([5, 3, 8, 1, 4]);
    expect(result).toEqual([1, 3, 4, 5, 8]);
  });

  it('should return an empty array if the input array is empty', () => {
    const result = quickSort([]);
    expect(result).toEqual([]);
  });

  it('should return a sorted array for an array containing negative numbers', () => {
    const result = quickSort([-3, -1, -7, -5]);
    expect(result).toEqual([-7, -5, -3, -1]);
  });

  it('should return a sorted array for an array containing duplicate numbers', () => {
    const result = quickSort([4, 2, 4, 1]);
    expect(result).toEqual([1, 2, 4, 4]);
  });

  it('should return the same array for an array containing a single element', () => {
    const result = quickSort([42]);
    expect(result).toEqual([42]);
  });

  it('should return a sorted array for an array containing mixed numbers (positive, negative, zero)', () => {
    const result = quickSort([3, -2, 0, 7, -5]);
    expect(result).toEqual([-5, -2, 0, 3, 7]);
  });
});

/** 11 */

/** Description : Fonction tspBrutForce
  it 1 : Vérifie que la fonction retourne la distance minimale et le chemin correct pour un graphe de trois villes.
  it 2 : Vérifie que la fonction retourne la distance minimale pour un graphe de quatre villes.
  it 3 : Vérifie que la fonction gère correctement un graphe où toutes les distances sont égales.
  it 4 : Vérifie que la fonction retourne une distance nulle et un chemin vide si aucune ville n'est donnée.
  it 5 : Vérifie que la fonction retourne correctement la boucle minimale avec retour à la ville de départ.
 */

describe('tspBrutForce', () => {
  it('should return the minimal distance and path for a graph of three cities', () => {
    const distances = {
      A: { B: 10, C: 15 },
      B: { A: 10, C: 20 },
      C: { A: 15, B: 20 }
    };
    const result = tspBrutForce(distances);
    expect(result).toEqual({
      minDistance: 45,
      meilleurePermutation: expect.any(Array) // Le chemin optimal
    });
  });

  it('should return the minimal distance for a graph of four cities', () => {
    const distances = {
      A: { B: 10, C: 15, D: 20 },
      B: { A: 10, C: 35, D: 25 },
      C: { A: 15, B: 35, D: 30 },
      D: { A: 20, B: 25, C: 30 }
    };
    const result = tspBrutForce(distances);
    expect(result.minDistance).toBe(80);
    expect(result.meilleurePermutation).toEqual(expect.any(Array));
  });

  it('should handle a graph where all distances are equal', () => {
    const distances = {
      A: { B: 10, C: 10 },
      B: { A: 10, C: 10 },
      C: { A: 10, B: 10 }
    };
    const result = tspBrutForce(distances);
    expect(result.minDistance).toBe(30);
    expect(result.meilleurePermutation).toEqual(expect.any(Array));
  });

  it('should return zero distance and an empty path if no cities are provided', () => {
    const distances = {};
    const result = tspBrutForce(distances);
    expect(result).toEqual({ minDistance: 0, meilleurePermutation: [] });
  });

  it('should return the minimal loop with return to the starting city', () => {
    const distances = {
      A: { B: 10, C: 15 },
      B: { A: 10, C: 20 },
      C: { A: 15, B: 20 }
    };
    const result = tspBrutForce(distances);
    expect(result.minDistance).toBe(45);
    expect(result.meilleurePermutation).toEqual(expect.any(Array));
  });
});

/** Description : Fonction permuter
  it 1 : Vérifie que la fonction retourne toutes les permutations pour un tableau de trois éléments.
  it 2 : Vérifie que la fonction retourne un tableau vide si l'entrée est un tableau vide.
  it 3 : Vérifie que la fonction retourne un tableau avec une permutation unique si l'entrée contient un seul élément.
  it 4 : Vérifie que la fonction retourne toutes les permutations dans le bon ordre pour un tableau de deux éléments.
  it 5 : Vérifie que la fonction gère correctement un tableau avec des valeurs en double.
 */

describe('permuter', () => {
  it('should return all permutations for an array of three elements', () => {
    const result = permuter([1, 2, 3]);
    expect(result).toEqual(expect.arrayContaining([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]));
    expect(result.length).toBe(6); // 3! permutations
  });

  it('should return an empty array if the input is an empty array', () => {
    const result = permuter([]);
    expect(result).toEqual([[]]); // Une seule permutation possible : un tableau vide
  });

  it('should return a single permutation for an array with one element', () => {
    const result = permuter([42]);
    expect(result).toEqual([[42]]);
  });

  it('should return all permutations in the correct order for an array of two elements', () => {
    const result = permuter([1, 2]);
    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ]);
    expect(result.length).toBe(2);
  });

  it('should handle an array with duplicate values correctly', () => {
    const result = permuter([1, 1, 2]);
    expect(result).toEqual(expect.arrayContaining([
      [1, 1, 2],
      [1, 2, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 1, 1]
    ]));
    expect(result.length).toBe(6);
  });
});

/** 12 */

/** Description : Fonction resoudreSudoku
  it 1 : Vérifie que la fonction retourne true pour une grille de Sudoku valide et complète.
  it 2 : Vérifie que la fonction retourne false pour une grille de Sudoku invalide.
  it 3 : Vérifie que la fonction modifie correctement une grille incomplète pour la résoudre.
  it 4 : Vérifie que la fonction gère une grille vide (tous les zéros) et la résout si possible.
  it 5 : Vérifie que la fonction ne modifie pas une grille déjà complète et valide.
 */

describe('resoudreSudoku', () => {
  it('should return true for a valid and complete Sudoku grid', () => {
    const validGrid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    const result = resoudreSudoku(validGrid);
    expect(result).toBe(true);
  });

  it('should return false for an invalid Sudoku grid', () => {
    const invalidGrid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 1] // Valeur en double dans la dernière ligne
    ];
    const result = resoudreSudoku(invalidGrid);
    expect(result).toBe(false);
  });

  it('should solve an incomplete Sudoku grid', () => {
    const incompleteGrid = [
      [5, 3, 0, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    const result = resoudreSudoku(incompleteGrid);
    expect(result).toBe(true);
    expect(incompleteGrid[0][2]).not.toBe(0); // Vérifie qu'une valeur a été ajoutée
  });

  it('should solve an empty Sudoku grid (all zeros)', () => {
    const emptyGrid = Array(9).fill(0).map(() => Array(9).fill(0));
    const result = resoudreSudoku(emptyGrid);
    expect(result).toBe(true);
  });

  it('should not modify a valid and complete Sudoku grid', () => {
    const validGrid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    const clone = JSON.parse(JSON.stringify(validGrid));
    const result = resoudreSudoku(validGrid);
    expect(result).toBe(true);
    expect(validGrid).toEqual(clone); // Vérifie que la grille n'a pas été modifiée
  });
});
  

/** Description : Fonction estValide
  it 1 : Vérifie que la fonction retourne true si un nombre peut être placé dans une case vide.
  it 2 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même ligne.
  it 3 : Vérifie que la fonction retourne false si un nombre est déjà présent dans la même colonne.
  it 4 : Vérifie que la fonction retourne false si un nombre est déjà présent dans le sous-carré 3x3.
  it 5 : Vérifie que la fonction gère correctement une grille vide (tous les zéros) en autorisant tout placement.
 */

describe('estValide', () => {
  it('should return true if a number can be placed in an empty cell', () => {
    const grid = Array(9).fill(0).map(() => Array(9).fill(0));
    expect(estValide(grid, 0, 0, 5)).toBe(true);
  });

  it('should return false if a number is already in the same row', () => {
    const grid = Array(9).fill(0).map(() => Array(9).fill(0));
    grid[0][1] = 5;
    expect(estValide(grid, 0, 0, 5)).toBe(false);
  });

  it('should return false if a number is already in the same column', () => {
    const grid = Array(9).fill(0).map(() => Array(9).fill(0));
    grid[1][0] = 5;
    expect(estValide(grid, 0, 0, 5)).toBe(false);
  });

  it('should return false if a number is already in the same 3x3 subgrid', () => {
    const grid = Array(9).fill(0).map(() => Array(9).fill(0));
    grid[1][1] = 5;
    expect(estValide(grid, 0, 0, 5)).toBe(false);
  });

  it('should handle an empty grid (all zeros) and allow placement', () => {
    const grid = Array(9).fill(0).map(() => Array(9).fill(0));
    expect(estValide(grid, 0, 0, 1)).toBe(true);
  });
});