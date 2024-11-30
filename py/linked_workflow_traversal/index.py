from data import Step, State, steps_url, linked_steps
from typing import Optional


def get_current_step(initial_step: str, steps: dict[str, Step],  state: State) -> Optional[str]:
    current = initial_step

    while current:
        current_data = steps[current]

        if current_data['validate'](state):
            next = current_data['next']

            if next:
                current = current_data['next']
            else:
                return None
        else:
            prev = current_data['prev']

            if prev:
                prev_data = steps[prev]

                if prev_data['validate'](state):
                    return current
                else:
                    current = prev
            else:
                return current


state: State = {
    'first': {'passed': False},
    'second': {'confirmed': False},
    'third': {'added': False},
    'fourth': {'created': False},
    'fifth': {'signed': False},
}

result = get_current_step(steps_url['a'], linked_steps, state)
print(result)
