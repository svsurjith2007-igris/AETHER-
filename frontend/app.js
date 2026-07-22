const questions = [
  {
    id: 'q1',
    title: 'Maximum Subarray with Constraints',
    topic: 'dp',
    difficulty: 'medium',
    company: 'general',
    description: 'Given an array of integers, find the maximum sum of a contiguous subarray subject to problem constraints. The solution must account for negative-only arrays and large input sizes.',
    example: 'Input: [1, -2, 3, 5, -1, 2]\nOutput: 9\nExplanation: The subarray [3,5,-1,2] yields the maximum sum.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^5 <= nums[i] <= 10^5',
      'At least one element is present',
      'Use O(n) time and O(1) auxiliary space',
    ],
    testcases: [
      'nums = [1, -2, 3, 5, -1, 2] => 9',
      'nums = [-5, -1, -8] => -1',
      'nums = [0, 0, 0] => 0',
      'nums = [3, -1, 4, -2, 5] => 9',
      'nums = [100, -99, 100, -99, 100] => 201',
      'nums = [2] => 2',
      'nums = [1, -1, 1, -1, 1, -1, 1] => 1',
      'nums = [5, -2, 5, -1, 5] => 12',
      'nums = [1e5, -1e5, 1e5] => 100000',
      'nums = [-2,1,-3,4,-1,2,1,-5,4] => 6',
    ],
    solution: `def max_subarray(nums):\n    best = current = nums[0]\n    for x in nums[1:]:\n        current = max(x, current + x)\n        best = max(best, current)\n    return best\n`,
  },
  {
    id: 'q2', 
    title: 'Word Search Backtracking',
    topic: 'backtracking',
    difficulty: 'hard',
    company: 'google',
    description: 'Given a 2D board of characters and a word, determine if the word exists in the board by traversing adjacent cells. This requires backtracking and pruning for large grids.',
    example: 'Input: board = [["A","B","C"],["S","F","C"],["A","D","E"]], word = "ABCCED"\nOutput: true\nExplanation: The word is found by traversing the board path.',
    constraints: [
      '1 <= board.length, board[i].length <= 200',
      'word.length <= 10^3',
      'Board letters are uppercase ASCII',
      'Use backtracking with visited state to avoid reuse',
    ],
    testcases: [
      'board = [["A","B","C"],["S","F","C"],["A","D","E"]], word = "ABCCED" => true',
      'board = [["A","B"],["C","D"]], word = "ACDB" => true',
      'board = [["A","B","C"]], word = "ABC" => true',
      'board = [["A","B"],["C","D"]], word = "ABCD" => false',
      'board = [["A"]], word = "A" => true',
      'board = [["A","A"],["A","A"]], word = "AAAA" => true',
      'board = [["A","B"],["C","D"]], word = "E" => false',
      'board = [["A","B","C"],["D","E","F"],["G","H","I"]], word = "CFI" => false',
      'board = [["X","Y","Z"],["A","B","C"]], word = "XYZ" => true',
      'board = [["Q","W","E"],["R","T","Y"]], word = "QWERTY" => false',
    ],
    solution: `def exist(board, word):\n    rows, cols = len(board), len(board[0])\n    visited = [[False]*cols for _ in range(rows)]\n\n    def backtrack(r, c, idx):\n        if idx == len(word):\n            return True\n        if r < 0 or c < 0 or r >= rows or c >= cols or visited[r][c] or board[r][c] != word[idx]:\n            return False\n        visited[r][c] = True\n        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n            if backtrack(r+dr, c+dc, idx+1):\n                return True\n        visited[r][c] = False\n        return False\n\n    for i in range(rows):\n        for j in range(cols):\n            if backtrack(i, j, 0):\n                return True\n    return False\n`,
  },
  {
    id: 'q3',
    title: 'Greedy Interval Scheduling',
    topic: 'greedy',
    difficulty: 'medium',
    company: 'amazon',
    description: 'Select the maximum number of non-overlapping intervals from a list. This question evaluates greedy sorting and selection logic.',
    example: 'Input: intervals = [[1,3],[2,4],[3,5]]\nOutput: 2\nExplanation: Choose intervals [1,3] and [3,5].',
    constraints: [
      '1 <= intervals.length <= 10^5',
      '0 <= start < end <= 10^9',
      'Use O(n log n) sorting and greedy scan',
    ],
    testcases: [
      'intervals = [[1,3],[2,4],[3,5]] => 2',
      'intervals = [[1,2],[2,3],[3,4]] => 3',
      'intervals = [[1,5],[2,3],[3,4]] => 2',
      'intervals = [[1,10]] => 1',
      'intervals = [[1,2],[1,2],[1,2]] => 1',
      'intervals = [[1,4],[2,5],[5,6]] => 2',
      'intervals = [[0,1],[1,2],[2,3],[3,4]] => 4',
      'intervals = [[1,4],[4,5],[5,6]] => 3',
      'intervals = [[5,8],[1,4],[3,6]] => 2',
      'intervals = [[1,3],[3,3]] => 1',
    ],
    solution: `def max_non_overlapping(intervals):\n    intervals.sort(key=lambda x: x[1])\n    count = 0\n    end = -10**18\n    for s, e in intervals:\n        if s >= end:\n            count += 1\n            end = e\n    return count\n`,
  },
  {
    id: 'q4',
    title: 'Divide and Conquer Closest Pair',
    topic: 'divideconquer',
    difficulty: 'hard',
    company: 'general',
    description: 'Find the closest pair of points in a plane using divide and conquer. The question tests computational geometry and recursive merge logic.',
    example: 'Input: points = [[0,0],[3,4],[7,1]]\nOutput: 5\nExplanation: Closest pair distance is 5 between (0,0) and (3,4).',
    constraints: [
      '2 <= points.length <= 10^5',
      '-10^9 <= coordinates <= 10^9',
      'Expected O(n log n) time',
    ],
    testcases: [
      'points = [[0,0],[3,4],[7,1]] => 5',
      'points = [[-1,-1],[1,1],[2,2]] => 2.8284271247461903',
      'points = [[0,0],[0,1]] => 1',
      'points = [[0,0],[5,12],[3,4]] => 5',
      'points = [[1,2],[1,2],[1,2]] => 0',
      'points = [[1000000000,1000000000],[-1000000000,-1000000000]] => 2828427124.7461903',
      'points = [[0,0],[2,0],[0,2]] => 2',
      'points = [[1,1],[4,5],[6,9],[9,12]] => 5',
      'points = [[-5,0],[5,0],[0,12]] => 10',
      'points = [[0,0],[3,4],[4,3]] => 5',
    ],
    solution: `def closest_pair(points):\n    import math\n    pts = sorted(points)\n    def dist(a, b):\n        return math.hypot(a[0]-b[0], a[1]-b[1])\n\n    def recur(arr):\n        n = len(arr)\n        if n <= 3:\n            best = min(dist(arr[i], arr[j]) for i in range(n) for j in range(i+1, n))\n            return best, sorted(arr, key=lambda x: x[1])\n        mid = n // 2\n        midx = arr[mid][0]\n        dl, sl = recur(arr[:mid])\n        dr, sr = recur(arr[mid:])\n        d = min(dl, dr)
        merged = sorted(sl + sr, key=lambda x: x[1])\n        strip = [p for p in merged if abs(p[0]-midx) < d]\n        for i in range(len(strip)):
            for j in range(i+1, min(i+7, len(strip))):
                d = min(d, dist(strip[i], strip[j]))
        return d, merged\n
    return recur(pts)[0]\n`,
  },
  {
    id: 'q5',
    title: 'Two Pointers Sorted Array Pair Sum',
    topic: 'twopointers',
    difficulty: 'easy',
    company: 'facebook',
    description: 'Given a sorted array, find two numbers that add up to a target sum. The efficient two-pointer technique should be used for optimal speed.',
    example: 'Input: nums = [1,2,3,4,6], target = 6\nOutput: [1,3]\nExplanation: The pair 2 and 4 adds to 6.',
    constraints: [
      '2 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      'Array is sorted in non-decreasing order',
      'Return any valid pair or an empty list if none exists',
    ],
    testcases: [
      'nums = [1,2,3,4,6], target = 6 => [2,4]',
      'nums = [0,1,2,3], target = 3 => [0,3]',
      'nums = [1,1,2,3], target = 2 => [1,1]',
      'nums = [1,5,7,9], target = 8 => [1,7]',
      'nums = [2,4,6,8], target = 13 => []',
      'nums = [1,2], target = 3 => [1,2]',
      'nums = [-2,0,2,4], target = 2 => [-2,4]',
      'nums = [3,3,4,4], target = 7 => [3,4]',
      'nums = [1,2,3,4,5], target = 10 => []',
      'nums = [-5,-3,0,3,5], target = 0 => [-5,5]',
    ],
    solution: `def two_sum_sorted(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        total = nums[left] + nums[right]\n        if total == target:\n            return [nums[left], nums[right]]\n        if total < target:\n            left += 1\n        else:\n            right -= 1\n    return []\n`,
  },
  {
    id: 'q6',
    title: 'LRU Cache Implementation',
    topic: 'greedy',
    difficulty: 'medium',
    company: 'microsoft',
    description: 'Implement an LRU cache that supports get and put operations in O(1) time. This evaluates your use of linked data structures and eviction policies.',
    example: 'Input: operations = ["LRUCache","put","put","get","put","get","put","get","get","get"], values = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\nOutput: [null,null,null,1,null,-1,null,-1,3,4]',
    constraints: [
      '1 <= capacity <= 10^5',
      'At most 10^5 operations',
      'All keys and values are integers',
      'Use a hashmap and doubly linked list for O(1) operations',
    ],
    testcases: [
      'capacity=2, ops=[put(1,1),put(2,2),get(1),put(3,3),get(2),put(4,4),get(1),get(3),get(4)] => [1,-1,-1,3,4]',
      'capacity=1, ops=[put(1,1),put(2,2),get(1),get(2)] => [-1,2]',
      'capacity=2, ops=[put(2,1),put(1,1),get(2),put(4,1),get(1),get(2)] => [1,-1,1]',
      'capacity=2, ops=[put(2,1),put(2,2),get(2)] => [2]',
      'capacity=3, ops=[put(1,1),put(2,2),put(3,3),get(1),put(4,4),get(2)] => [1,-1]',
      'capacity=2, ops=[put(2,1),put(1,1),get(2),put(4,4),get(1),get(2)] => [1,-1,4]',
      'capacity=2, ops=[put(1,1),put(2,2),get(2),get(1)] => [2,1]',
      'capacity=1, ops=[put(1,1),get(1),put(2,2),get(1)] => [1,-1]',
      'capacity=2, ops=[put(1,1),put(2,2),put(3,3),get(2)] => [-1]',
      'capacity=2, ops=[put(2,1),put(1,1),put(2,3),get(2)] => [3]',
    ],
    solution: `class ListNode:\n    def __init__(self, key=0, value=0):\n        self.key = key\n        self.value = value\n        self.prev = None\n        self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.head = ListNode()\n        self.tail = ListNode()\n        self.head.next = self.tail\n        self.tail.prev = self.head\n\n    def _remove(self, node):\n        prev, nxt = node.prev, node.next\n        prev.next = nxt\n        nxt.prev = prev\n\n\n    def _add(self, node):\n        node.prev = self.head\n        node.next = self.head.next\n        self.head.next.prev = node\n        self.head.next = node\n\n    def get(self, key):\n        if key not in self.cache:\n            return -1\n        node = self.cache[key]\n        self._remove(node)\n        self._add(node)\n        return node.value\n\n    def put(self, key, value):\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = ListNode(key, value)\n        self._add(node)\n        self.cache[key] = node\n        if len(self.cache) > self.capacity:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.cache[lru.key]\n`,
  },
  {
    id: 'q7',
    title: 'Generate Balanced Parentheses',
    topic: 'backtracking',
    difficulty: 'medium',
    company: 'general',
    description: 'Generate all combinations of n pairs of balanced parentheses. This tests recursive backtracking and combinatorial generation.',
    example: 'Input: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]\nExplanation: All valid balanced combinations for 3 pairs.',
    constraints: [
      '1 <= n <= 10',
      'Return combinations in any order',
      'Use backtracking to prune invalid partial strings',
    ],
    testcases: [
      'n = 1 => ["()"]',
      'n = 2 => ["()()","(())"]',
      'n = 3 => ["((()))","(()())","(())()","()(())","()()()"]',
      'n = 4 => 14 combinations',
      'n = 5 => 42 combinations',
      'n = 6 => 132 combinations',
      'n = 7 => 429 combinations',
      'n = 8 => 1430 combinations',
      'n = 9 => 4862 combinations',
      'n = 10 => 16796 combinations',
      'n = 3, expected contains "()()()" and "((()))"',
    ],
    solution: `def generate_parentheses(n):\n    result = []\n\n    def backtrack(current, open_count, close_count):\n        if len(current) == 2 * n:\n            result.append(current)\n            return\n        if open_count < n:\n            backtrack(current + '(', open_count + 1, close_count)\n        if close_count < open_count:\n            backtrack(current + ')', open_count, close_count + 1)\n\n    backtrack('', 0, 0)\n    return result\n`,
  },
  {
    id: 'q8',
    title: 'Maximum Product Subarray',
    topic: 'dp',
    difficulty: 'hard',
    company: 'amazon',
    description: 'Find the contiguous subarray with the largest product. This requires tracking both max and min products because of negative values.',
    example: 'Input: nums = [2,3,-2,4]\nOutput: 6\nExplanation: The subarray [2,3] has the maximum product.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10 <= nums[i] <= 10',
      'Result fits within a 64-bit signed integer',
      'Use O(n) time and O(1) space',
    ],
    testcases: [
      'nums = [2,3,-2,4] => 6',
      'nums = [-2,0,-1] => 0',
      'nums = [-2,3,-4] => 24',
      'nums = [0,2] => 2',
      'nums = [-2] => -2',
      'nums = [2,-5,-2,-4,3] => 24',
      'nums = [1,0,-1,2,3,-5,-2] => 60',
      'nums = [3,-1,4] => 4',
      'nums = [ -1,-3,-10,0,60 ] => 60',
      'nums = [6,-3,-10,0,2] => 180',
    ],
    solution: `def max_product(nums):\n    best = cur_max = cur_min = nums[0]\n    for x in nums[1:]:\n        if x < 0:\n            cur_max, cur_min = cur_min, cur_max\n        cur_max = max(x, cur_max * x)\n        cur_min = min(x, cur_min * x)\n        best = max(best, cur_max)\n    return best\n`,
  },
  {
    id: 'q9',
    title: 'OS Process Scheduling Simulation',
    topic: 'os',
    difficulty: 'medium',
    company: 'general',
    description: 'Simulate a round-robin CPU scheduler and compute average turnaround time. This is a systems-focused interview question with programming validation.',
    example: 'Input: processes = [[0,3],[1,9],[2,6]], quantum = 3\nOutput: 10.0\nExplanation: The round-robin scheduler completes jobs with an average turnaround time of 10.',
    constraints: [
      '1 <= processes.length <= 100',
      '0 <= arrival <= 1000',
      '1 <= burst <= 100',
      '1 <= quantum <= 10',
      'Simulate scheduling precisely for correct average time',
    ],
    testcases: [
      'processes = [[0,3],[1,9],[2,6]], quantum = 3 => 10.0',
      'processes = [[0,5],[2,3]], quantum = 2 => 5.5',
      'processes = [[0,1],[1,1],[2,1]], quantum = 1 => 1.67',
      'processes = [[0,4],[1,4]], quantum = 4 => 4.5',
      'processes = [[0,6],[1,4],[2,2]], quantum = 2 => 7.0',
      'processes = [[0,2],[2,2],[4,2]], quantum = 1 => 4.0',
      'processes = [[0,3],[1,3],[2,3]], quantum = 2 => 5.0',
      'processes = [[0,10],[1,1]], quantum = 1 => 9.5',
      'processes = [[0,3],[3,3]], quantum = 3 => 4.5',
      'processes = [[0,6],[1,3],[2,4]], quantum = 2 => 7.33',
    ],
    solution: `from collections import deque\n\ndef round_robin_avg_turnaround(processes, quantum):\n    timeline = 0\n    queue = deque()\n    processes = sorted([(arr, burst, i) for i, (arr, burst) in enumerate(processes)])\n    idx = 0\n    turnaround = [0] * len(processes)\n\n    while idx < len(processes) or queue:\n        if not queue:\n            timeline = max(timeline, processes[idx][0])\n        while idx < len(processes) and processes[idx][0] <= timeline:\n            queue.append([*processes[idx]])\n            idx += 1\n        arrival, burst, pid = queue.popleft()\n        use = min(quantum, burst)\n        timeline += use\n        burst -= use\n        while idx < len(processes) and processes[idx][0] <= timeline:\n            queue.append([*processes[idx]])\n            idx += 1\n        if burst:
            queue.append([arrival, burst, pid])
        else:
            turnaround[pid] = timeline - arrival\n\n    return round(sum(turnaround) / len(turnaround), 2)\n`,
  },
  {
    id: 'q10',
    title: 'ML Model Evaluation Metrics',
    topic: 'ml',
    difficulty: 'easy',
    company: 'general',
    description: 'Compute precision, recall, and F1 score from prediction results. This aligns with machine learning interview expectations and includes a code-ready solution.',
    example: 'Input: y_true = [1,0,1,1,0], y_pred = [1,0,0,1,0]\nOutput: {"precision":0.67,"recall":0.67,"f1_score":0.67}\nExplanation: Model evaluation metrics are computed from classification outcomes.',
    constraints: [
      'y_true and y_pred have equal length',
      'Values are 0 or 1',
      'Return metrics rounded to two decimals',
      'Handle empty positive or predicted classes gracefully',
    ],
    testcases: [
      'y_true=[1,0,1,1,0], y_pred=[1,0,0,1,0] => {precision:0.67, recall:0.67, f1_score:0.67}',
      'y_true=[0,0,1,1], y_pred=[0,1,1,0] => {precision:0.5, recall:0.5, f1_score:0.5}',
      'y_true=[1,1,1], y_pred=[1,1,1] => {precision:1.0, recall:1.0, f1_score:1.0}',
      'y_true=[0,0,0], y_pred=[0,0,0] => {precision:0.0, recall:0.0, f1_score:0.0}',
      'y_true=[1,0,1], y_pred=[0,0,1] => {precision:1.0, recall:0.67, f1_score:0.80}',
      'y_true=[1,1,0,0], y_pred=[0,1,0,1] => {precision:0.5, recall:0.5, f1_score:0.5}',
      'y_true=[1,0,1,0], y_pred=[1,1,0,0] => {precision:0.5, recall:0.5, f1_score:0.5}',
      'y_true=[1,1,0,1], y_pred=[1,0,0,1] => {precision:1.0, recall:0.75, f1_score:0.86}',
      'y_true=[0,1,0,1], y_pred=[1,1,0,0] => {precision:0.50, recall:0.50, f1_score:0.50}',
      'y_true=[1,0,0,1], y_pred=[1,0,1,1] => {precision:0.67, recall:0.67, f1_score:0.67}',
    ],
    solution: `def evaluation_metrics(y_true, y_pred):\n    tp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 1)\n    fp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 0 and yp == 1)\n    fn = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 0)\n\n    precision = tp / (tp + fp) if tp + fp else 0.0\n    recall = tp / (tp + fn) if tp + fn else 0.0\n    f1 = (2 * precision * recall) / (precision + recall) if precision + recall else 0.0\n\n    return {\n        'precision': round(precision, 2),\n        'recall': round(recall, 2),\n        'f1_score': round(f1, 2),\n    }\n`,
  },
  {
    id: 'q11',
    title: 'Coin Change Minimum Coins',
    topic: 'dp',
    difficulty: 'hard',
    company: 'google',
    description: 'Given coin denominations and a target amount, determine the minimum number of coins needed to make the amount. This needs careful dynamic programming and edge-case handling for impossible values.',
    example: 'Input: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 11 can be made with three coins: 5 + 5 + 1.',
    constraints: [
      '1 <= coins.length <= 12',
      '1 <= coins[i] <= 10^4',
      '0 <= amount <= 10^4',
      'Return -1 if amount cannot be formed',
    ],
    testcases: [
      'coins=[1,2,5], amount=11 => 3',
      'coins=[2], amount=3 => -1',
      'coins=[1], amount=0 => 0',
      'coins=[1,3,4], amount=6 => 2',
      'coins=[2,5,10], amount=27 => 4',
      'coins=[1,2], amount=100 => 50',
      'coins=[5,7], amount=1 => -1',
      'coins=[1,5,10,25], amount=30 => 2',
      'coins=[2,6,10], amount=14 => 2',
      'coins=[3,7], amount=14 => 2',
    ],
    solution: `def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] = min(dp[x], dp[x-coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1\n`,
  },
  {
    id: 'q12',
    title: 'N-Queens Backtracking',
    topic: 'backtracking',
    difficulty: 'hard',
    company: 'general',
    description: 'Place N queens on an N×N chessboard so no two queens attack each other. This classic backtracking problem demonstrates pruning and symmetry awareness.',
    example: 'Input: n = 4\nOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\nExplanation: There are two valid placements for 4 queens.',
    constraints: [
      '1 <= n <= 9',
      'Return all valid board configurations',
      'Use backtracking with row and diagonal pruning',
    ],
    testcases: [
      'n=1 => [["Q"]]',
      'n=2 => []',
      'n=3 => []',
      'n=4 => 2 configurations',
      'n=5 => 10 configurations',
      'n=6 => 4 configurations',
      'n=7 => 40 configurations',
      'n=8 => 92 configurations',
      'n=9 => 352 configurations',
      'n=4 expects a valid board for each solution',
    ],
    solution: `def solve_n_queens(n):\n    solutions = []\n    cols = [False] * n\n    diag1 = [False] * (2*n)\n    diag2 = [False] * (2*n)\n    board = [['.']*n for _ in range(n)]\n\n    def backtrack(row):\n        if row == n:\n            solutions.append([''.join(r) for r in board])\n            return\n        for col in range(n):\n            if cols[col] or diag1[row+col] or diag2[row-col+n]:\n                continue\n            cols[col] = diag1[row+col] = diag2[row-col+n] = True\n            board[row][col] = 'Q'\n            backtrack(row+1)\n            board[row][col] = '.'\n            cols[col] = diag1[row+col] = diag2[row-col+n] = False\n\n    backtrack(0)\n    return solutions\n`,
  },
  {
    id: 'q13',
    title: 'Search in Rotated Sorted Array',
    topic: 'divideconquer',
    difficulty: 'medium',
    company: 'amazon',
    description: 'Search for a target value in a rotated sorted array in O(log n) time using modified binary search. This problem requires careful divide and conquer logic.',
    example: 'Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4\nExplanation: The target is at index 4.',
    constraints: [
      '1 <= nums.length <= 10^5',
      'All values are unique',
      'Use O(log n) time',
    ],
    testcases: [
      'nums=[4,5,6,7,0,1,2], target=0 => 4',
      'nums=[4,5,6,7,0,1,2], target=3 => -1',
      'nums=[1], target=0 => -1',
      'nums=[1], target=1 => 0',
      'nums=[5,1,3], target=5 => 0',
      'nums=[5,1,3], target=3 => 2',
      'nums=[2,3,4,5,6,7,8,1], target=1 => 7',
      'nums=[6,7,8,1,2,3,4,5], target=8 => 2',
      'nums=[3,4,5,1,2], target=1 => 3',
      'nums=[3,4,5,1,2], target=5 => 2',
    ],
    solution: `def search_rotated(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]:\n                right = mid - 1\n            else:\n                left = mid + 1\n        else:\n            if nums[mid] < target <= nums[right]:\n                left = mid + 1\n            else:\n                right = mid - 1\n    return -1\n`,
  },
  {
    id: 'q14',
    title: 'Minimum Size Subarray Sum',
    topic: 'twopointers',
    difficulty: 'medium',
    company: 'general',
    description: 'Find the minimal length of a subarray whose sum is at least target using the two-pointer sliding window technique.',
    example: 'Input: target = 7, nums = [2,3,1,2,4,3]\nOutput: 2\nExplanation: The subarray [4,3] has the minimal length.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^5',
      '1 <= target <= 10^9',
      'Use O(n) time',
    ],
    testcases: [
      'target=7, nums=[2,3,1,2,4,3] => 2',
      'target=11, nums=[1,2,3,4,5] => 3',
      'target=3, nums=[1,1,1,1,1] => 3',
      'target=15, nums=[1,2,3,4,5] => 5',
      'target=100, nums=[1,2,3,4,5] => 0',
      'target=8, nums=[3,1,1,1,1,1] => 3',
      'target=4, nums=[1,4,4] => 1',
      'target=10, nums=[5,1,3,5,1,2] => 2',
      'target=6, nums=[2,2,2] => 3',
      'target=9, nums=[2,3,1,2,4] => 3',
    ],
    solution: `def min_subarray_len(target, nums):\n    left = 0\n    total = 0\n    min_len = float('inf')\n    for right, value in enumerate(nums):\n        total += value\n        while total >= target:\n            min_len = min(min_len, right - left + 1)\n            total -= nums[left]\n            left += 1\n    return 0 if min_len == float('inf') else min_len\n`,
  },
];

const questionList = document.querySelector('#questionList');
const downloadButton = document.querySelector('#downloadButton');
const searchInput = document.querySelector('#searchInput');
const topicFilter = document.querySelector('#topicFilter');
const difficultyFilter = document.querySelector('#difficultyFilter');
const companyFilter = document.querySelector('#companyFilter');
const template = document.querySelector('#questionCardTemplate');

function renderQuestions(items) {
  questionList.innerHTML = '';
  if (!items.length) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No questions match the selected filters yet. Try a different topic, difficulty, company, or clear the search text.';
    questionList.appendChild(noResults);
    return;
  }

  items.forEach((question) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.question-title').textContent = question.title;
    clone.querySelector('.topic-tag').textContent = question.topic.toUpperCase();
    clone.querySelector('.difficulty-tag').textContent = question.difficulty.toUpperCase();
    clone.querySelector('.company-tag').textContent = question.company.toUpperCase();
    clone.querySelector('.question-description').textContent = question.description;
    clone.querySelector('.question-example').textContent = question.example;
    clone.querySelector('.question-solution').textContent = question.solution;
    const constraintsList = clone.querySelector('.question-constraints');
    question.constraints.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      constraintsList.appendChild(li);
    });
    const testcasesList = clone.querySelector('.question-testcases');
    question.testcases.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      testcasesList.appendChild(li);
    });
    const checkbox = clone.querySelector('.question-checkbox');
    checkbox.dataset.questionId = question.id;
    checkbox.addEventListener('change', updateDownloadState);
    questionList.appendChild(clone);
  });
}

function getActiveFilters() {
  const searchText = searchInput.value.trim().toLowerCase();
  const topicValue = topicFilter.value;
  const difficultyValue = difficultyFilter.value;
  const companyValue = companyFilter.value;

  return questions.filter((item) => {
    const matchesSearch = [item.title, item.description, item.company, item.topic, item.difficulty]
      .join(' ')
      .toLowerCase()
      .includes(searchText);
    const matchesTopic = topicValue === 'all' || item.topic === topicValue;
    const matchesDifficulty = difficultyValue === 'all' || item.difficulty === difficultyValue;
    const matchesCompany = companyValue === 'all' || item.company === companyValue;
    return matchesSearch && matchesTopic && matchesDifficulty && matchesCompany;
  });
}

function updateDownloadState() {
  const anyChecked = Array.from(document.querySelectorAll('.question-checkbox')).some((checkbox) => checkbox.checked);
  downloadButton.disabled = !anyChecked;
}

function downloadSelectedQuestions() {
  const selectedIds = Array.from(document.querySelectorAll('.question-checkbox'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.questionId);

  const selectedQuestions = questions.filter((question) => selectedIds.includes(question.id));
  const blob = new Blob([JSON.stringify(selectedQuestions, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'selected_questions.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

searchInput.addEventListener('input', () => renderQuestions(getActiveFilters()));
topicFilter.addEventListener('change', () => renderQuestions(getActiveFilters()));
difficultyFilter.addEventListener('change', () => renderQuestions(getActiveFilters()));
companyFilter.addEventListener('change', () => renderQuestions(getActiveFilters()));
downloadButton.addEventListener('click', downloadSelectedQuestions);

renderQuestions(questions);
