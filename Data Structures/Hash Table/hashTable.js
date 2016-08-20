 /**********************************************************************************
  *                                 Homework VII                                   *
  *                                                                                *
  *  Problem: Hash Table                                                           *
  *                                                                                *
  *  Prompt: Create a HashTable class/constructor.                                 *
  *          Name it HashTable (js) or hash_table (rb/py). Use separate chaining.  *
  *                                                                                *
  *          The HashTable will have the following properties:                     *
  *                                                                                *
  *          storage: An array of arrays.                                          *
  *                                                                                *
  *          buckets: The max number of buckets that your storage can contain.     *
  *                   Initialize your "buckets" at 8 buckets.                      *
  *                                                                                *
  *          size: The current number (total) of key-value pairs in the storage.   *
  *                Initialize your "size" to 0.                                    *
  *                                                                                *
  *          The HashTable will also have the following methods:                   *
  *                                                                                *
  *          hash: Method that takes a string as an input and outputs a number.    *
  *                We have provided to you the dbjb2 hashing function, so you do   *
  *                not need to write your own.                                     *
  *                                                                                *
  *          insert: Method that takes a key and a value as inputs, and places a   *
  *                  tuple ([key,value]) into the proper bucket.                   *
  *                  If the key already exists, it should update the value.        *
  *                  You should use separate chaining to handle collisions.        *
  *                                                                                *
  *          delete: Method that takes a key as its input, and looks for the       *
  *                  [key,value] and removes it from the bucket.                   *
  *                                                                                *
  *          retrieve: Method that a key as its input, and returns the value       *
  *                    stored at that key, or undefined if the key is not present. *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A HashTable instance                                                  *
  *                                                                                *
  *  What are the time and auxiliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

// hash table
var hashTable = function(){
  this.storage = [];
  this.buckets = 8;
  this.size = 0;
}

hashTable.prototype.hash = function(str){
  var hash = 5381;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
  }
  return hash % this.buckets;
}


hashTable.prototype.insert = function(key, value){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    this.storage[index] = [];
    this.storage[index].push([key, value]);
    this.size++;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        this.storage[index][i][1] = value;
        // this.resize();
        return;
      }
    }
    this.storage[index].push([key, value]);
    this.size++;
  }
  this.resize();

}

hashTable.prototype.resizeInsert = function(key, value){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    this.storage[index] = [];
    this.storage[index].push([key, value]);
    this.size++;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        this.storage[index][i][1] = value;
        // this.resize();
        return;
      }
    }
    this.storage[index].push([key, value]);
    this.size++;
  }
  // this.resize();

}

hashTable.prototype.delete = function(key){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        var temp = this.storage[index][i][1];
        this.storage[index].splice(i, 1);
        this.size--;
        console.log(temp);
        this.resize();
        return temp;
      }
    }
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
  }
  this.resize();
}

hashTable.prototype.retrieve = function(key){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
    return null;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        return this.storage[index][i][1];
      }
    }
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
    }
}

hashTable.prototype.resize = function(){
  var allElements = [];
  if (this.size > (0.75 * this.buckets)){
    this.buckets *= 2;
    this.storage.forEach(function(bucket){
      if (bucket !== undefined){
        bucket.forEach(function(tuple){
          allElements.push(tuple);
        })
      }
    })

    this.storage = [];
    this.size = 0;

    allElements.forEach(function(tuple){
      this.resizeInsert(tuple[0], tuple[1]);
    }, this)
    console.log('HashTable has been doubled in size');
  } else if (this.buckets > 8 && this.size < (0.25 * this.buckets)){
    this.buckets *= 0.5;
    this.storage.forEach(function(bucket){
      if (bucket !== undefined){
        bucket.forEach(function(tuple){
          allElements.push(tuple);
        })
      }
    })

    this.storage = [];
    // this.size = 0;

    allElements.forEach(function(tuple){
      this.resizeInsert(tuple[0], tuple[1]);
    }, this)
    console.log('HashTable has been halved in size');
  }
}




////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('hash table class', function(){

  describe('hashTable properties', function(){
    it('should have properties storage, buckets, and size', function(){
      var test = new hashTable();

      expect(test).to.have.property('storage');
      expect(test).to.have.property('buckets');
      expect(test).to.have.property('size');
      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);
    });
  });

  describe('hashTable methods existence', function(){
    it('should have methods hash, insert, delete, and retrieve', function(){
      var test = new hashTable();

      expect(test).to.respondTo('hash');
      expect(test).to.respondTo('insert');
      expect(test).to.respondTo('delete');
      expect(test).to.respondTo('retrieve');
    });
  });

  describe('hashTable hash method', function(){
    it('should return an index from an inputted string', function(){
      var test = new hashTable();

      var expected = test.hash('hello');
      expect(expected).to.equal(1);
    })
  });

  describe('hashTable insert method', function(){
    it('should be able to insert a key-value pair', function(){
      var test = new hashTable();

      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);

      test.insert('hello', 5);

      expect(test.size).to.equal(1);
      expect(test.storage[1][0][0]).to.equal('hello');
      expect(test.storage[1][0][1]).to.equal(5);
    });

    it('should be able to insert a second key-value pair', function(){
      var test = new hashTable();

      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);

      test.insert('hello', 5);

      expect(test.size).to.equal(1);
      expect(test.storage[1][0][0]).to.equal('hello');
      expect(test.storage[1][0][1]).to.equal(5);

      test.insert('good', 10);

      expect(test.size).to.equal(2);
      expect(test.storage[6][0][0]).to.equal('good');
      expect(test.storage[6][0][1]).to.equal(10);
    });

    it('should be able to handle collisions', function(){
      var test = new hashTable();

      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);

      test.insert('good', 5);

      expect(test.size).to.equal(1);
      expect(test.storage[6][0][0]).to.equal('good');
      expect(test.storage[6][0][1]).to.equal(5);

      test.insert('back', 10);

      expect(test.size).to.equal(2);
      expect(test.storage[6][1][0]).to.equal('back');
      expect(test.storage[6][1][1]).to.equal(10);
    });
  });

  describe('hashTable delete method', function(){
    it('should delete a key-value pair', function(){
      var test = new hashTable();

      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);

      test.insert('hello', 5);

      expect(test.size).to.equal(1);
      expect(test.storage[1][0][0]).to.equal('hello');
      expect(test.storage[1][0][1]).to.equal(5);

      test.delete('hello');

      expect(test.size).to.equal(0);
      expect(test.storage[1][0]).to.equal(undefined);
      expect(test.storage[1][0]).to.equal(undefined);

    });

    it('should not modify the size when deleting a key-value pair that does not exist', function(){
      var test = new hashTable();
      test.insert('hello', 5);
      test.insert('good', 10);

      expect(test.size).to.equal(2);

      test.delete('great');

      expect(test.size).to.equal(2);
    });
  });
  describe('hashTable resize method', function(){
    it('should double the number of buckets when the size exceeds 75% of buckets capacity', function(){
      var test = new hashTable();


  describe('hashTable retrieve method', function(){
    it('should return true for a key-value pair that exists', function(){
      var test = new hashTable();

      test.insert('hello', 5);

      expect(test.retrieve('hello')).to.equal(5);


    });

    it('should return false for a key-value pair that does not exist', function(){
      var test = new hashTable();

      test.insert('hello', 5);

      expect(test.retrieve('good')).to.equal(null);
    });
  });

      test.insert('hello', 5);
      test.insert('good', 7);
      test.insert('haha', 10);
      test.insert('blah', 2);
      test.insert('foo', 3);
      test.insert('bar', 8);
      test.insert('taste', 1);

      expect(test.buckets).to.equal(16);

    });

    it('should halve the number of buckets when the size drops below 25% of bucket capacity', function(){
      var test = new hashTable();

      test.insert('hello', 5);
      test.insert('good', 7);
      test.insert('haha', 10);
      test.insert('blah', 2);
      test.insert('foo', 3);
      test.insert('bar', 8);
      test.insert('taste', 1);

      expect(test.buckets).to.equal(16);

      test.delete('hello');
      test.delete('good');
      test.delete('haha');
      test.delete('blah');

      expect(test.buckets).to.equal(8);

    });
  });
})
