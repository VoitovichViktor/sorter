class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    };
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = i; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          var buff = indices[i];
          indices[i] = indices[j];
          indices[j] = buff;
        }
      }
    }

    for(var i = 0; i < indices.length - 1; i++) {
      for (var j = i; j < indices.length; j++) {
        if (this.comparator(this.array[indices[i]], this.array[indices[j]]) > 0){
          var buff = this.array[indices[i]];
          this.array[indices[i]] = this.array[indices[j]];
          this.array[indices[j]] = buff;
        } 
      }
    }

    
  }

  setComparator(compareFunction) {
    // your implementation
     this.comparator = compareFunction;
  }
}

module.exports = Sorter;




