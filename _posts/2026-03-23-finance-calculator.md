---
title: TranspoLab Minecraft Server
layout: post 
categories: projects
date: 2026-02-27
---

An introduction to my Minecraft server and a list of related articles.

My university friends and I in the transportation lab decided to make a Minecraft server. But we're a bunch of aspiring transportation engineers, so obviously we have to make it transportation themed.

We have two basic rules:

1. Everything has to be connected to everything else.
2. Only Ruined Nether portal can be lit.

Rule one, everything connected to everything else, is the defining feature of our world. This is what makes it a transportation server. I'm less worried about what the specific points of interest are and more about how we get there. We're transportation engineers, after all! Ideally, a new player with no additional equipment would be able to explore our world and see everything there is to see. This means a lot of walking paths, and extra boats or minecarts kept wherever needed. This is slowly morphing into being able to ride a horse or mule from anywhere in the world to anywhere else in the world without getting off.

Rule two, only ruined nether portals can be lit, encourages taking the scenic route. Nether highways are cool and all, but I want to enjoy the journey just as much as the destination. The nether is a hostile space and harshes the vibe. Nether highways, while practical, do not fit the intended aesthetic of our world. I didn't want to say no to portals and therefore the nether all together though. So only using portals around ruined portal structures feels like a good balance. That little bit of inconvenience makes them special and a point of interest.

Over time, we've discussed and developed additional guidelines and ideas for our world. However, there are too many to put into a single article. Below, I have broken down some of our ideas into their own topic. They are in no particular order, I write them as I feel the mood.

### Related Articles

{% for post in site.categories.MCtranspo %}
[{{post.title }}]({{ post.url }})  {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
