const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log("Original Array:", randomNumbers);

/**
 * Standard Quicksort implementation using Lomuto partition scheme.
 * @param {number[]} arr - The array to sort.
 * @param {number} low - Starting index.
 * @param {number} high - Ending index.
 */
function quickSort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

/**
 * This function takes last element as pivot, places the pivot element at its 
 * correct position in sorted array, and places all smaller to left of pivot 
 * and all greater elements to right of pivot.
 */
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] (or pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

// Execute sort
quickSort(randomNumbers, 0, randomNumbers.length - 1);

console.log("Sorted Array:  ", randomNumbers);