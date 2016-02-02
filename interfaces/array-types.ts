//Array Types. Buggy compiler?
interface Dictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
}

var dicArray = <Dictionary>{};

dicArray['string'] = 1;
var value = dicArray['string'];
dicArray.length = 1;

var l = dicArray.length;
