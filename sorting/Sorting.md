# Sorting Notes
  ## Definition
  ### A permutation that brings elements into order according to a total order. No sorting algorithm has a better worst case runtime than O(NlogN)
  ## Types
  ### Bubble sort
  * The most basic and worst sort. keep on comparing and swapping two adjacent elements over and over until there are no more swaps.
  ### Selection sort
  * Approach: scan array for smallest, put it at the front, scan array.slice(1) for smallest...
  * Big-O: N^2
  ### Heap sort
  * A version of selection sort
  * Approach: add all items into a heap, remove them into an array.
  * Big-O: Nlog(N) time. This is because log(N) for heap insertion and removal, and N items.
  * Typically not used, even though Nlog(N), due to slow memory access.
  ### Insertion sort
  * Approach: How you would arrange a deck of cards. For each item, put it in the appropriate spot in the array by swapping backwards.
  * Big O: O(N) if everything is more or less sorted. O(N^2) if the array is sorted something crazy like backwards.
  ### BST sort
  * Approach: Put things into a BST and then do an inorder traversal.
  * Big O: O(NlogN) for a balanced tree, but O(N^2) for a spindly one.
  ### Merge sort
  * Approach: divide and conquer. Split into 2 recursively until each subproblem is just 1, and then merging.
  * Big O: O(NlogN) for best and worst case, log(N) because problem is halved at each recursion and N because you have to touch each item.
  ### Quick sort
  * The fastest sort.
  * Approach: Partitioning: Choose a pivot that becomes a wall between items lower than the value and items higher than the value. Items to left and right are now subproblems which can be solved with recursion. Partitioning is faster with two pointers.
  * Big-O: O(NlogN) as long as the pivots are pretty random; this is typical...however, if the array is already sorted or there are tons of duplicates, can be O(N^2) time because the subproblems never get any smaller...
  * The fact that it is better than mergesort is empirical. Strange to consider, seeing as mergesort best/worst is O(NlogN) but quicksort has worst case of O(N^2).
  ### Counting sort
  * Approach: If there are values in a specific range that need to be sorted, count number of instances per value and store in lookup array. Lookup array index can serve as the key. Calculate the sorted position of each value based on adding prev lookup array value with current number of instances. Fill in new array using a combo of the input and the key/value array.
  * Big-O: O(N + K), where N is the number of inputs and K is the number of items in the alphabet.
  ### Radix sort
  * A non-comparative sorting algorithm.
  * Approach: Counting sort looking at least significant digits first. Sort based on ones' place, then tens' place, etc...
  * Disadvantage is you have to keep going until the longest string of the set is complete.
  * Big-O: O(N * W), where W is the max word size.
  ## Sorting Methods, Compared
  * Insertion sort is better for arrays that are almost in order - O(N) time.
  * Insertion sort is better than smaller arrays (less than 15 elements).
  * Insertion sort is stable (stability means equivalent items aren't crossed over when sorted)
  * Radix sort is better for highly similar strings
  * Merge sort is better for highly dissimilar strings
  * Radix sort is not good for a comparison with a large alphabet
