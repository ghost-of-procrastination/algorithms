from typing import Dict

WeightedGraph = Dict[str, Dict[str, int]]

A = 'a'
B = 'b'
C = 'c'
D = 'd'
Y = 'y'

plain_graph: WeightedGraph = {
    A: {B: 6, C: 2, Y: 3},
    B: {D: 1, A: 6, Y: 1},
    C: {B: 3, D: 5, A: 2},
    D: {Y: 2, B: 1, C: 5},
    Y: {A: 3, B: 1}
}
