"use strict";

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function increase_node_count(node, c) {
  if(!node[c])
    node[c] = {};
  if(!node[c].count)
    node[c].count = 0;
  node[c].count++;
}

function add_word(w, node) {
  if(w.length === 0) {
    return;
  }
  else if(w.length === 1) {
    increase_node_count(node, w[0]);
  }
  else if(w.length > 1) {
    if(!node[w[0]])
      node[w[0]] = {};
    add_word(w.slice(1), node[w[0]]);
  }
}

function query(w, node) {
  if(!node || w.length === 0 || !node[w[0]])
    return 0;
  if(w.length === 1) {
    if(node[w[0]].count)
      return node[w[0]].count;
    else
      return 0;
  }
  return query(w.slice(1), node[w[0]]);
}


function main() {
  let n = parseInt(readLine());
  let trie = {};
  for(let i = 0; i < n; i++) {
    let w = readLine();
    add_word(w, trie);
  }
  let q = parseInt(readLine());
  for(let i = 0; i < q; i++) {
    let w = readLine();
    console.log(query(w, trie));
  }
}
