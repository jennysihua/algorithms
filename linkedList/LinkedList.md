#Linked List
## Definition
* A structure consisting of linked objects, called nodes. Each node has a data field and a next field.
## Sentinel
* A 'dummy' node at the head of a linked list. Is less error-prone, and makes it possible to avoid a lot of unnecessary checks for null values.
## Circular linked list
* A circular list that has the same sentinel node at its head and tail.
## Linked List vs Array
* Array has a better access time: O(1) vs O(N) in the worst case for a linked list.
* Linked list has a better insert/delete time: O(1) once the spot to add/remove is found, vs O(N) time in the worst case for an array. Everything must be shifted down or up once an element is removed in an array.
