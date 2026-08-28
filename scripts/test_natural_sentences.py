# -*- coding: utf-8 -*-
import os
import sys

# Test sentence builder logic
def get_natural_sentence(word, category, topic_desc):
    w = word.lower().strip()
    desc = topic_desc.lower()
    
    if category in ['food', 'fruit', 'drink']:
        return f"I like {w}."
    elif category in ['toy', 'animal']:
        return f"I have a {w}."
    elif category in ['clothes']:
        return f"I am wearing a {w}."
    elif category in ['school']:
        if w in ['classroom', 'library', 'playground', 'gym']:
            return f"This is our {w}."
        return f"I have a {w}."
    elif category in ['vehicle']:
        return f"I can see a {w}."
    elif category in ['body']:
        return f"Touch your {w}."
    elif category in ['place']:
        if w in ['flat', 'tower', 'house', 'village', 'city', 'town']:
            return f"I live in a {w}."
        return f"Look at the {w}."
    elif category in ['greeting']:
        return f"Say {w} to your friend."
    elif category in ['job']:
        return f"He is a {w}."
    elif category in ['country']:
        return f"She is from {w.title()}."
    else:
        return f"I can see a {w}."

print("Sample natural sentences:")
for word, cat in [('popcorn', 'food'), ('flat', 'place'), ('question', 'school'), ('cat', 'animal'), ('eye', 'body'), ('doctor', 'job')]:
    print(f"- {word} ({cat}) -> {get_natural_sentence(word, cat, '')}")
