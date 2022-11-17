# self-avoiding-walk

Online interactive visualisation: https://hugh5.github.io/self-avoiding-walk/

![image](https://user-images.githubusercontent.com/110031011/202486062-f355e3ca-7e02-424b-b269-56549d684908.png)

Randomly chooses a direction from each node and recusively adds it to walk if not visted and backtracks when it gets stuck <br>
Added optimisation to make backtrack occur earlier by computing depth first search which determines given the current path if there exists a path that can reach every non-visited node.
