/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    
    var head = null;

      function getHead(){
        return head;
      }
      function getTail(){
        var currentNode = head;
        while (currentNode !== null){          
            if (currentNode.next !== null ){
                  currentNode = currentNode.next;
            } 
            else{
              return currentNode;
            }
     }
        return currentNode;

      }
      function add(newValue){
        var tail = getTail();
        var newNode = {
          value: newValue,
          next: null
        };

        if(tail === null){
          head = newNode;
        }
        else{
          tail.next = newNode;
        }
        return newNode;
      }


      function get(index){
        var currentNode = head;
        var count = 0;

        while(currentNode !== null){
          if(count === index){
            return currentNode;
          } 
          else 
          {
            currentNode = currentNode.next;
            count ++;
          } 
        }
        if(currentNode === null){
          return false;
        }
      }

      function remove(number){

        var previousNode = get(number-1);
        var currentNode = get(number);

        //if remove(a node that doesn't exist)
        if(currentNode === false){
          return false;
        }
        //if remove(tail);
        if(currentNode.next === null){
          previousNode.next = null;
        return ; //returns previousNode.next as new tail
        }
        //if remove(head)
        if(number === 0){
          head = head.next;
        }

        previousNode.next = currentNode.next;

        }

      function insert(newValue, index){
        var previousNode = get(index-1);
        var currentNode = get(index);

        var newNode = {
          value: newValue,
          next: currentNode
        };

        if(currentNode === false){
          return false;
        }
        if(index === 0){
          head = newNode; 
        }
         previousNode.next = newNode;
        }

    return {
      getHead: getHead,
      getTail: getTail,
      add: add,
      get: get,
      remove: remove,
      insert: insert
    };
  }

var test = linkedListGenerator();
test.add('abc');
test.add('def');
test.add('ghi');
test.add('jkl');
