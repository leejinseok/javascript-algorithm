function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.append = function(data) {
  const node = new Node(data);
  if (this.head === null) {
      this.head = node;
      return node;
  } else {
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }

  this.length++;
  return node;
}

LinkedList.prototype.remove = function(position) {
  if (position > this.length - 1) {
    throw new Error(`Out of range. This list ${this.length} length long. Max index is ${this.length - 1}.`);
  }

  if (position < 0) {
    throw new Error('Array index only integer');
  }

  let count = 0;
  let cur = this.head;
  while(count < position - 1 && cur.next) {
    cur = cur.next;
    count++;
  }

  if (this.length === 0) {
    this.head = null;
  } else {
    cur.next = cur.next.next;
  }

  this.length--;
}

LinkedList.prototype.search = function(val) {
  let cur = this.head;
  while(cur.next) {
    if (cur.data === val) return cur;
    if (cur.next && cur.next.data === val) return cur.next;
    cur = cur.next;
  }

  return null;
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.remove(1);
const search = list.search(3);
console.log(search);

let cur = list.head;
while(cur.next) {
  console.log({
    data: cur.data,
    next: cur.next
  });
  cur = cur.next;
  if (cur.next === null) {
    console.log({
      data: cur.data,
      next: cur.next
    });
  }
}
