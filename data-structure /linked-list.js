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
  } else {
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }

  this.length++;
}

LinkedList.prototype.removeAt = function(index) {
  if (index > this.length - 1) {
    throw new Error(`Out of range. This list ${this.length} length long. Max index is ${this.length - 1}.`);
  }

  if (index < 0) {
    throw new Error('Array index only integer');
  }

  let count = 0;
  let cur = this.head;
  while(count < index - 1 && cur.next) {
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

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.removeAt(100);

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
