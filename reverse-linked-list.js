let odd = {
  value: 1,
  prev: null,
  next: {
    value: 2,
    prev: null,
    next: {
      value: 3,
      prev: null,
      next: {
        value: 4,
        prev: null,
        next: {
          value: 5,
          prev: null,
          next: {
            value: 6,
            prev: null,
            next: {
              value: 7,
              prev: null,
              next: null
            }
          }
        }
      }
    }
  }
};

let even = {
  value: 1,
  prev: null,
  next: {
    value: 2,
    prev: null,
    next: {
      value: 3,
      prev: null,
      next: {
        value: 4,
        prev: null,
        next: {
          value: 5,
          prev: null,
          next: {
            value: 6,
            prev: null,
            next: {
              value: 7,
              prev: null,
              next: {
                value: 8,
                prev: null,
                next: null
              }
            }
          }
        }
      }
    }
  }
};


let threeItems = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

let twoItems = {
  value: 1,
  next: {
    value: 2,
    next: null
  }
};

let oneItem = {
  value: 1,
  next: null
};


let head = twoItems;


function reverseLinkedList(ll) {
  let  a, b, c;

  // empty list or only one item
  if (!ll) return null;
  if (ll.next == null) return ll;

  // two items
  a = ll;
  b = ll.next;
  if (b.next == null) {
    b.next = a;
    a.next = null;
    ll = b;
    return ll;
  }

  // 3 or more items
  a = ll;
  b = ll.next;
  c = b.next;
  while (c) {
    if (c.next == null) {
      b.next = a;
      c.next = b;
      ll.next = null;
      ll = c;
      return ll;
    } else {
      b.next = a;
      a = b;
      b = c;
      c = c.next;
    }
  } // while

  return ll;
} // function


// ===== REVERSES BY SWAPPING VALUES ONLY, THEN REASSIGNING HEAD =====
function reverseDoublyLinkedList(ll) {
  let tracker1 = head;
  let tracker2 = head.next;
  let tempValue;

  // empty list or only one item
  if (!ll) return null;
  if (ll.next == null) return ll;

  while(tracker2.next) {
    tracker2.prev = tracker1;
    tracker1 = tracker2;
    tracker2 = tracker2.next;
  }
  tracker2.prev = tracker1;
  tracker1 = head;

  while (tracker1 != tracker2 && tracker1.prev != tracker2) {
    tempValue = tracker1.value;
    tracker1.value = tracker2.value;
    tracker2.value = tempValue;
    tracker1 = tracker1.next;
    tracker2 = tracker2.prev;
  } // while
  return head;
} // function
