# self-avoiding-walk

Visualisation: https://hugh5.github.io/self-avoiding-walk/

Randomly chooses a direction from each node and recusively adds it to walk if not visted and backtracks when it gets stuck <br>
Added optimisation to make backtrack occur earlier by computing depth first search which determines given the current path if there exists a path that can reach every non-visited node.
