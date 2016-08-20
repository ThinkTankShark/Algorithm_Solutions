# /**********************************************************************************
#  *                                 Homework IV                                    *
#  *                                                                                *
#  *  Problem: Linked List                                                          *
#  *                                                                                *
#  *  Prompt: Create a Linked List class/constructor.                               *
#  *          Name it LinkedList (js) or Linked_List(rb/py).                        *
#  *                                                                                *
#  *          Part 1: Create a node class for your LinkedList.                      *
#  *                  Your node class will take an integer value and output         *
#  *                  and output and object with the following properties:          *
#  *                                                                                *
#  *                  node.value: input value                                       *
#  *                  node.next: a pointer to the next value (initiall null)        *
#  *                                                                                *
#  *                  Example: { value: 1, next: null }                             *
#  *                                                                                *
#  *          Part 2: Create the LinkedList class.                                  *
#  *                  It should contain the following properties:                   *
#  *                                                                                *
#  *                  head: pointer to the head node                                *
#  *                  tail: pointer to the tail node                                *
#  *                  length: number of nodes in the linked list                    *
#  *                                                                                *
#  *                  The LinkedList should also contain the following properties   *
#  *                                                                                *
#  *                  append: function that adds a node to the tail                 *
#  *                                                                                *
#  *                  insert: function that takes in two values, one to be inserted *
#  *                          and one to search.  It searches the list for the      *
#  *                          search value, and if found, adds a new node with the  *
#  *                          insert value after the node with the search value.    *
#  *                                                                                *
#  *                  delete: function that removes a node at a specified location, *
#  *                          with a default action of deleting the head            *
#  *                                                                                *
#  *                  contains: function that checks to see if a value is contained *
#  *                            in the list                                         *
#  *                                                                                *
#  *  Input:  N/A                                                                   *
#  *  Output: A LinkedList instance                                                 *
#  *                                                                                *
#  *  What are the time and auxilliary space complexities of the various methods?   *
#  *  Append:  T:   S:                                                              *
#  *  Insert:                                                                       *
#  *  Delete:                                                                       *
#  *  Contains:                                                                     *
#  **********************************************************************************/

class Node:
  def __init__(self, data = 0):
    self.value = data
    self.next = None

class Linked_List:
  def __init__(self):
    self.head = None
    self.tail = None
    self.length = 0

  def append(self, val=None):
    if (self.length == 0):
      self.head = new Linked_List(val)
      self.tail = self.head
    else:
      self.tail = new Linked_List(val)
      self.tail = self.tail.next

    self.length += 1

  def insert(self, insertVal=None, searchVal=None):
    work = self.head

    while (work.next != None):
      if work.value == searchVal:
        reference = work.next
        work.next = new Linked_List(insertVal)
        work.next.next = reference

      if reference == null:
        self.tail = work.next

      self.length += 1
      return

  def delete(self, loc=None):
    # 1) When there is one element in linked list
    if loc == 0 && self.length == 0:
      self.head = None
      self.tail = None
      self.length -= 1
      return
    else:
      # 2) when there are more than one but we are removing the first element
      self.head = self.head.next
      self.length -= 1
      return

    work = self.head
    counter = 0
    while work.next != None:
      # 3) when we are removing the last element
      if counter == (loc - 1) && work.next != None && work.next = self.tail:
        work.next = work.next.next
        self.tail = work
        self.length -= 1
        return
      else if counter == (loc - 1) && work.next != None:
        # 4) when removing any element but head or tail
        work.next = work.next.next
        self.length -= 1
        return

      work = work.next
      counter += 1

    print('The location ' + loc + ' is out of the range')

  def contains(self, searchVal=None):
    work = self.head
    while work.next != None:
      if work.value == searchVal:
        return True

      work = work.next

    return False
