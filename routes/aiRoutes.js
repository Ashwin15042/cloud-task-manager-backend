const express = require("express");
const router = express.Router();

router.post("/suggest", (req, res) => {

  const { task } = req.body;
  const topic = task.toLowerCase();

  const roadmaps = {

    dsa: {
      topics: [
        "Time Complexity",
        "Arrays",
        "Strings",
        "Hashing",
        "Two Pointer Technique",
        "Sliding Window",
        "Recursion",
        "Backtracking",
        "Linked List",
        "Stack",
        "Queue",
        "Binary Search",
        "Trees",
        "Binary Search Tree",
        "Heap / Priority Queue",
        "Graph",
        "Greedy Algorithms",
        "Dynamic Programming",
        "Bit Manipulation",
        "Trie",
        "Segment Tree",
        "Disjoint Set"
      ],

      patterns: [
        "Two Pointer Pattern",
        "Sliding Window Pattern",
        "Prefix Sum Pattern",
        "Fast & Slow Pointer Pattern",
        "Binary Search Pattern",
        "DFS Pattern",
        "BFS Pattern",
        "Dynamic Programming Pattern",
        "Greedy Pattern"
      ]
    },

    array: {
      topics: [
        "Array Basics",
        "Prefix Sum",
        "Subarray Problems",
        "Kadane Algorithm",
        "Matrix Problems",
        "Sorting"
      ],

      patterns: [
        "Two Pointer Pattern",
        "Sliding Window Pattern",
        "Prefix Sum Pattern",
        "Binary Search Pattern"
      ]
    },

    linkedlist: {
      topics: [
        "Singly Linked List",
        "Doubly Linked List",
        "Circular Linked List",
        "Reverse Linked List",
        "Merge Linked List",
        "Detect Cycle",
        "Find Middle Node"
      ],

      patterns: [
        "Fast & Slow Pointer Pattern",
        "Two Pointer Pattern",
        "Dummy Node Pattern",
        "Reversal Pattern"
      ]
    },

    stack: {
      topics: [
        "Stack Basics",
        "Balanced Parentheses",
        "Expression Evaluation"
      ],

      patterns: [
        "Monotonic Stack Pattern",
        "Next Greater Element Pattern"
      ]
    },

    queue: {
      topics: [
        "Queue Basics",
        "Circular Queue",
        "Deque",
        "Priority Queue"
      ],

      patterns: [
        "BFS Pattern",
        "Queue Simulation Pattern"
      ]
    },

    graph: {
      topics: [
        "Graph Representation",
        "BFS Traversal",
        "DFS Traversal",
        "Cycle Detection",
        "Topological Sort",
        "Shortest Path",
        "Dijkstra Algorithm"
      ],

      patterns: [
        "BFS Pattern",
        "DFS Pattern",
        "Union Find Pattern",
        "Shortest Path Pattern"
      ]
    },

    dp: {
      topics: [
        "Memoization",
        "Tabulation",
        "Knapsack Problem",
        "Longest Common Subsequence",
        "Longest Increasing Subsequence"
      ],

      patterns: [
        "DP on Arrays",
        "DP on Strings",
        "DP Optimization"
      ]
    },

    sql: {
      topics: [
        "Database Basics",
        "Tables and Schema",
        "Primary Key / Foreign Key",
        "CRUD Operations",
        "WHERE Clause",
        "GROUP BY",
        "HAVING",
        "Aggregate Functions",
        "JOINS",
        "Subqueries",
        "Views",
        "Indexing",
        "Transactions",
        "Normalization",
        "Window Functions"
      ],

      patterns: [
        "Filtering Pattern",
        "Aggregation Pattern",
        "JOIN Pattern",
        "Subquery Pattern",
        "Window Function Pattern",
        "Ranking Pattern"
      ]
    },

    oop: {
      topics: [
        "Class and Object",
        "Encapsulation",
        "Abstraction",
        "Inheritance",
        "Polymorphism",
        "Interfaces",
        "Abstract Classes",
        "Constructors",
        "Access Modifiers",
        "Static Keyword"
      ],

      patterns: [
        "Singleton Pattern",
        "Factory Pattern",
        "Builder Pattern",
        "Strategy Pattern",
        "Observer Pattern",
        "Adapter Pattern",
        "Decorator Pattern"
      ]
    }

  };

  let suggestion = "";

  for (let key in roadmaps) {

    if (topic.includes(key)) {

      const topics = roadmaps[key].topics.join("\n• ");
      const patterns = roadmaps[key].patterns.join("\n• ");

      suggestion = `
Topics
• ${topics}

Patterns
• ${patterns}
`;

      return res.json({ suggestion });

    }

  }

  suggestion = `
Topics
• Learn basics of ${task}
• Understand core concepts
• Practice beginner problems

Patterns
• Problem solving pattern
• Optimization pattern
`;

  res.json({ suggestion });

});

module.exports = router;