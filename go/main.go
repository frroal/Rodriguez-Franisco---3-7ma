package main

import (
	"fmt"
	"math/rand"
	"slices"
	"sort"
	"time"
)

// ============================================================================
// 1. GNOME SORT (O(N^2)) - Muy ineficiente para arrays grandes
// ============================================================================
func gnomeSort(arr []int) {
	index := 0
	n := len(arr)
	for index < n {
		if index == 0 {
			index++
		}
		if arr[index] >= arr[index-1] {
			index++
		} else {
			arr[index], arr[index-1] = arr[index-1], arr[index]
			index--
		}
	}
}

// ============================================================================
// 3. RADIX SORT PERSONALIZADO (O(N * k)) - Ultra-eficiente para enteros
// ============================================================================
func radixSort(arr []int) {
	if len(arr) < 2 {
		return
	}
	maxVal := arr[0]
	for _, val := range arr {
		if val > maxVal {
			maxVal = val
		}
	}

	for exp := 1; maxVal/exp > 0; exp *= 10 {
		countingSortByDigit(arr, exp)
	}
}

func countingSortByDigit(arr []int, exp int) {
	n := len(arr)
	output := make([]int, n)
	count := [10]int{}

	for i := 0; i < n; i++ {
		index := (arr[i] / exp) % 10
		count[index]++
	}

	for i := 1; i < 10; i++ {
		count[i] += count[i-1]
	}

	for i := n - 1; i >= 0; i-- {
		index := (arr[i] / exp) % 10
		output[count[index]-1] = arr[i]
		count[index]--
	}

	copy(arr, output)
}

// ============================================================================
// FUNCIÓN PRINCIPAL Y BENCHMARK
// ============================================================================
func main() {
	rand.Seed(time.Now().UnixNano())

	// Tamaño definido por el usuario (¡100.000 elementos!)
	const size = 50000000
	original := make([]int, size)

	// Generar números aleatorios entre 1 y 1000
	for i := 0; i < size; i++ {
		original[i] = rand.Intn(1000) + 1
	}

	fmt.Println("=====================================================================")
	fmt.Printf("          COMPARATIVA DE RENDIMIENTO DE ALGORITMOS DE ORDENACIÓN\n")
	fmt.Printf("          Elementos a ordenar: %d\n", size)
	fmt.Println("=====================================================================")

	// Helper para clonar el slice original antes de cada ordenamiento
	getUnsortedCopy := func() []int {
		cpy := make([]int, size)
		copy(cpy, original)
		return cpy
	}

	// ------------------------------------------------------------------------
	// Test 1: Gnome Sort (Solo si es un tamaño razonable, ej. <= 10.000)
	// ------------------------------------------------------------------------
	if size <= 10000 {
		arr := getUnsortedCopy()
		fmt.Printf("[-] Ejecutando Gnome Sort... ")
		start := time.Now()
		gnomeSort(arr)
		elapsed := time.Since(start)
		fmt.Printf("¡Completado! Tiempo: %s\n", elapsed)
	} else {
		fmt.Printf("[!] Gnome Sort: SKIPPED (Omitido porque con %d elementos tardaría demasiado al ser O(N²))\n", size)
	}

	// ------------------------------------------------------------------------
	// Test 3: Custom Radix Sort (O(N))
	// ------------------------------------------------------------------------
	{
		arr := getUnsortedCopy()
		fmt.Printf("[-] Ejecutando Radix Sort (Custom)... ")
		start := time.Now()
		radixSort(arr)
		elapsed := time.Since(start)
		fmt.Printf("¡Completado! Tiempo: %s (%d ns)\n", elapsed, elapsed.Nanoseconds())
	}

	// ------------------------------------------------------------------------
	// Test 4: Go Standard Library sort.Ints()
	// ------------------------------------------------------------------------
	{
		arr := getUnsortedCopy()
		fmt.Printf("[-] Ejecutando sort.Ints() (Go Stdlib)... ")
		start := time.Now()
		sort.Ints(arr)
		elapsed := time.Since(start)
		fmt.Printf("¡Completado! Tiempo: %s (%d ns)\n", elapsed, elapsed.Nanoseconds())
	}

	// ------------------------------------------------------------------------
	// Test 5: Go Standard Library slices.Sort() (El más óptimo de Go, PDQSort)
	// ------------------------------------------------------------------------
	{
		arr := getUnsortedCopy()
		fmt.Printf("[-] Ejecutando slices.Sort() (Go Stdlib PDQSort)... ")
		start := time.Now()
		slices.Sort(arr)
		elapsed := time.Since(start)
		fmt.Printf("¡Completado! Tiempo: %s (%d ns)\n", elapsed, elapsed.Nanoseconds())
	}

	fmt.Println("=====================================================================")
	fmt.Println("Nota: slices.Sort() utiliza PDQSort (Pattern-Defeating Quicksort),")
	fmt.Println("que es actualmente el algoritmo de ordenación más eficiente de Go.")
	fmt.Println("Radix Sort es sumamente rápido para enteros en rangos acotados.")
	fmt.Println("=====================================================================")
}
