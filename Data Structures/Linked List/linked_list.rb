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
 #  *                                                                                *
 #  **********************************************************************************/


class Node

  def value
    @value
  end
  def next
    @next
  end

  def initialize(val)
    @value = val
    @next = nil
  end

  attr_accessor :val
  attr_accessor :next
end

class Linked_List
  def initialize()
    @head = nil
    @tail = nil
    @listLength = 0
  end

  attr_reader :head
  attr_reader :tail
  attr_reader :listLength

  def append(val)
    if @listLength == 0
      @head = Linked_List.new(val)
      @tail = @head
      return
    else
      @tail = Linked_List.new(val)
      return
    end
    @listLength++
  end

  def insert(insertVal, searchVal)
    work = @head

    while work.next != nil
      if work.value == searchVal
        reference = work.next
        work.next = Linked_List.new(insertVal)
        work.next.next = reference

        if reference == nil
          @tail = work.next
        end

        @listLength++
      end
      work = work.next
    end
    puts "not found"
  end

  def delete(location)
    # 1) delete first element and linkedlist has no elem
    if location == 0 && @listLength == 0
      @head = nil
      @tail = nil
      @listLength--
      return
    else
      # 2) delete first element but linkedlist has more than one elem
      @head = @head.next
      @listLength--
      return
    end
    work = @head
    counter = 0

    while work.next != nil
      # 3) delete the last element of linkedList
      if location = (@listLength - 1) && work.next != nil && work.next == @tails
        work.next = work.next.next
        @tail = work
        @listLength--
        return
      # 4) delete neither last or first
      elsif location = (@listLength - 1) && work.next != nil
        work.next = work.next.next
        @listLength--
        return
      end

      counter++
      work = work.next
    end
    puts "Not found"
  end

  def contains(val)
    work = @head
    while work.next != nil
      return true if work.value == val
      work = work.next
    end
    return false
  end

end





# //////////////////////////////////////////////////////////
# ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
# //////////////////////////////////////////////////////////

require 'test/unit'

class LinkedListNodeTest < Test::Unit::TestCase
  def test_creation_of_node
    test = Node.new(3)

    assert_not_equal(nil, test)
  end
  def test_encoding_a_value
    test = Node.new(5)

    assert_equal(5, test.value)
    assert_equal(nil, test.next)
  end
  def test_pointing_to_another_node
    initial = Node.new(5)
    target = Node.new(10)
    initial.next = target

    assert_equal(5, initial.value)
    assert_equal(10, initial.next.value)
  end
end

class LinkedListClassTest < Test::Unit::TestCase
  def test_linked_list_properties_existence
    test = Linked_List.new()

    assert_respond_to(test, :head)
    assert_respond_to(test, :tail)
    assert_respond_to(test, :listLength)

  end

  def test_linked_list_methods_existence
    test = Linked_List.new()

    assert_respond_to(test, :append)
    assert_respond_to(test, :insert)
    assert_respond_to(test, :delete)
    assert_respond_to(test, :contains)
  end

  def test_linked_list_append_method_single_node
    test = Linked_List.new()
    test.append(5)

    assert_equal(5, test.head.value)
    assert_equal(5, test.tail.value)
  end

  def test_linked_list_append_method_two_node
    test = Linked_List.new()
    test.append(5)
    test.append(10)

    assert_equal(5, test.head.value)
    assert_equal(10, test.tail.value)
  end

  def test_linked_list_insert_method_between_nodes
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.insert(13, 5)

    assert_equal(5, test.head.value)
    assert_equal(13, test.head.next.value)
    assert_equal(10, test.head.next.next.value)
    assert_equal(10, test.tail.value)
  end

  def test_linked_list_insert_method_modify_tail
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.insert(13, 10)

    assert_equal(5, test.head.value)
    assert_equal(10, test.head.next.value)
    assert_equal(13, test.head.next.next.value)
    assert_equal(13, test.tail.value)
  end

  def test_linked_list_insert_method_no_searchValue_match
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.insert(13, 17)

    assert_equal(5, test.head.value)
    assert_equal(10, test.head.next.value)
    assert_equal(10, test.tail.value)
    assert_equal(2, test.listLength)
  end

  def test_linked_list_delete_method_delete_middle
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)
    test.delete(1)

    assert_equal(5, test.head.value)
    assert_equal(15, test.tail.value)
    assert_equal(15, test.head.next.value)
    assert_equal(2, test.listLength)
  end

  def test_linked_list_delete_method_delete_head
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)
    test.delete(0)

    assert_equal(10, test.head.value)
    assert_equal(15, test.tail.value)
    assert_equal(15, test.head.next.value)
    assert_equal(2, test.listLength)
  end

  def test_linked_list_delete_method_delete_tail
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)
    test.delete(2)

    assert_equal(5, test.head.value)
    assert_equal(10, test.tail.value)
    assert_equal(10, test.head.next.value)
    assert_equal(2, test.listLength)
  end

  def test_linked_list_delete_method_delete_out_of_range
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)
    test.delete(5)

    assert_equal(5, test.head.value)
    assert_equal(15, test.tail.value)
    assert_equal(10, test.head.next.value)
    assert_equal(15, test.head.next.next.value)
    assert_equal(3, test.listLength)
  end

  def test_linked_list_contains_method_when_true
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)

    assert_equal(true, test.contains(10))
  end

  def test_linked_list_contains_method_when_false
    test = Linked_List.new()
    test.append(5)
    test.append(10)
    test.append(15)

    assert_equal(false, test.contains(75))
  end
end
