class TravellingAlgo {

    static int dfs(int[][] cost, boolean[] vis, int last, int cnt) {
        int n = cost.length;

        if (cnt == n)
            return cost[last][0];

        int minCost = (int) 1e9;

        for (int city = 1; city < n; city++) {
            if (!vis[city]) {

                vis[city] = true;

                minCost = Math.min(
                    minCost,
                    cost[last][city] + dfs(cost, vis, city, cnt + 1)
                );

                vis[city] = false;
            }
        }

        return minCost;
    }

    static int tsp(int[][] cost) {
        int n = cost.length;

        boolean[] vis = new boolean[n];
        vis[0] = true;

        return dfs(cost, vis, 0, 1);
    }

    public static void main(String[] args) {

        int[][] cost = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };

        int res = tsp(cost);

        System.out.println(res);
    }
}