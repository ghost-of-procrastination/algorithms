from typing import TypedDict, Callable, Optional


class First(TypedDict):
    passed: bool


class Second(TypedDict):
    confirmed: bool


class Third(TypedDict):
    added: bool


class Fourth(TypedDict):
    created: bool


class Fifth(TypedDict):
    signed: bool


class State(TypedDict):
    first: First
    second: Second
    third: Third
    fourth: Fourth
    fifth: Fifth


class Step(TypedDict):
    prev: Optional[str]
    next: Optional[str]
    validate: Callable[[State], bool]


def validate_a(state: State) -> bool:
    return state['first']['passed']


def validate_b(state: State) -> bool:
    return state['second']['confirmed']


def validate_c(state: State) -> bool:
    return state['third']['added']


def validate_d(state: State) -> bool:
    return state['fourth']['created']


def validate_e(state: State) -> bool:
    return state['fifth']['signed']


steps_url = {
    'a': '/a',
    'b': '/b',
    'c': '/c',
    'd': '/d',
    'e': '/e'
}


linked_steps: dict[str, Step] = {
    steps_url['a']: {'prev': None, 'next': steps_url['b'], 'validate': validate_a},
    steps_url['b']: {'prev': steps_url['a'], 'next': steps_url['c'], 'validate': validate_b},
    steps_url['c']: {'prev': steps_url['b'], 'next': steps_url['d'], 'validate': validate_c},
    steps_url['d']: {'prev': steps_url['c'], 'next': steps_url['e'], 'validate': validate_d},
    steps_url['e']: {'prev': steps_url['d'], 'next': None, 'validate': validate_e},
}