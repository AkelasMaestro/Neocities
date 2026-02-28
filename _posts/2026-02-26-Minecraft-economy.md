---
title: Minecraft Economy Idea
categories: MCtranspo
layout: default
---


I've been fascinated by the idea of simulated economies inside Minecraft servers.
They usually fail, but I think I have a solution.

### The Challenge of Minecraft Economies

First, you have to appreciate the challenges of having any sort of currency in
a survival, multiplayer Minecraft world. Resources are scarce in the sense that
it takes time to mine, craft, or find items. But given an afternoon, and a solid
understanding of the games mechanics, a single player can get any item or resource
they want. Why complicate game play with money? This is especially true with smaller
servers with fewer players. In smaller groups, bartering makes more sense. A month
or two ago, there was a whole discourse in the Minecraft YouTube community on
how to make a functional economy. Each idea more complicated than the last.

All the ideas outlined side step the main issue. The simple fact that players can
get whatever they need themselves. Currency makes sense when there must be a
method to track effort and value in seemingly disconnected activities.

### Currency Must Buy What Players Cannot Get Themselves

My plan is simple: Currency isn't for inter-player interactions, but
player-admin interactions. What is the one thing no player or admin can regain?
Their time. As server admin, I have access to commands and can easily place or
remove blocks. But commands are limited, especially in detail work. I can bore
tunnels with a single command, but making an iron farm requires following a
tutorial. Players can pay me, as admin, to save time on large scale projects.
And I as admin can pay players to do specific tasks like build structures or
fill in empty maps. This system of exchange would be entirely optional, but
hopefully engaging. Not only would players gain access to certain admin powers,
but also have side quests and objectives to guide their creativity.

This concept of trading player time and admin powers also supports the transportation
theme in our world. As admin, I am the closest thing we have to a government.
We can model our trade after our own municipality's project request and bidding
system. I can publish lists of projects, each with specifications and outlines.
Players can submit proposals and bids. We can choose the level of detail we desire
to make it fun for us. Remember, we're all engineering students. Most of us with
a specific focus on transportation. This here is our bread and butter! We're
playing house, just at a different level.

I am already grinning ear to ear of all the projects I want to put up for bid!
The central city needs the iron farm fixed or replaced. There are world maps to
fill in, roads and bridges to build. I already have an office building ready to
go! When I built it, I left the interior empty because I didn't know what to do
with it, but I do now! The upper floor has already been made into the world map
room, but I have three more floors to fill in! I am going to make the third and
second floor into projects office. One will be dedicated to posting available
jobs and taking in quotes. The other will be a place for players to submit
requests for projects of their own.

### Poisonous Potatoes: The Currency of Choice

Poisonous potatoes will be the item of currency. The default has always been diamonds. Some suggest [wheat](https://www.youtube.com/watch?v=5vcghQeno3c). I have decided on [poisonous potatoes](https://minecraft.wiki/w/Poisonous_Potato). It is a useless item, which makes it perfect as a fiat currency. Yes, it can technically be farmed, but it only drops 2% of the time when harvesting normal potatoes. And honestly, if a player made a massive potato farm just to get rich, I feel they have earned it. It may also inflate prices, but I'll worry about that later. The poisonous potato can also be found in sunken ships, but I will not punish a player for exploring! If anything, finding a bunch of poisonous potatoes will now be exciting for players! For my group of players, poisonous potatoes are the way to go.

The hard part will be figuring out how to set the price of both projects and
services. The simplest thing to do would be to just start using the system and negotiate prices as we go along, project by project, but that will lead to inconsistent project bids and make it harder for both myself and players to plan out projects. The hardest thing, but possibly the most consistent, would be math. You have to remember that these poisonous potatoes really represent time, for both me as an admin and for the players. So somehow I need to map potatoes to time.

For services, where I as the admin use commands on behalf of the players, I could calculate the time it would take to manually remove or place a given number of blocks. Removing blocks should be easy to price; just multiply the time it takes to mine a bock by the quantity of blocks. Dirt and sand, rock, deepslate, and water could each be priced differently. Placing blocks would be harder, especially since I am creating materials out of nothing. I think I would try to figure out the amount of time it would take to collect and make the material and then multiply by the volume of blocks placed. All of this would need to be rough estimates.

For projects, where players build for a reward, a similar pricing model per block would break down. Blocks are placed instantly, but moving around the structure, design, and troubleshooting all take time. Maybe that's where the bidding system comes into play. I outline the project demands and requirements, and players tell me how long it will take them. Providing the building material could also be part of the contract to keep with the intended purpose of saving time and making it fun.

I don't know if I need to bother with giving myself a set amount of poisonous potatoes to start. Maybe some finance guy will message me saying I'm setting myself up for failure but basically printing money, but it has to start from somewhere. I think I'll set prices for services in a book, and once the players get a feel for the pricing of services, they can start bidding on projects. The first few projects I will just spawn in the requisite number of potatoes, but I suspect that there might be a point where services are earning enough money to hopefully pay for the out going projects. Time will tell.

## 2026-02-27 Update

I have figured out the pricing. TL;DR: The admin charges 1 poisonous potato (PP) for every 250 blocks removed. For blocks placed, prices start at 1 (PP) for 250 blocks plus the cost of the type of block. The cost of blocks will discussed later on. For projects, players will be paid roughly 30 potatoes an hour.

How did I get to those prices? Let me explain.

### Price Schedules

First I had some initial considerations:

1) the value of (PP) should be based on the time saved or spent by the player.
2) The value should low enough to discourage farming.
3) The value should high enough to avoid making transactions cumbersome.

I looked at the spawn rates of (PP):

- drop 2% of the time when harvesting a fully grown potato plant
- appear in shipwrecks 41% of the time in quantities of 2-6.

Then I looked at mining speeds:

- An iron pickaxe mines a stone block in 0.4 seconds.
- An iron pickaxe has a durability of 250 blocks.
- It takes 100 seconds to use up one iron pickaxe if mining continuously.
- We'll round up to 120 seconds, a solid 2 minutes to account for movement.

This is how I got to 1 (PP) for 250 blocks. Since all iron tools have a durability of 250 (namely picks, axes, shovels, and swords), this also means 1 (PP) is worth one iron tool. Never mind that some tools use more materials than others. That's more minutia than even I care for.

Since 250 blocks can be mined in roughly 2 minutes, that would equate to 30 potatoes for one hour. This will make pricing projects much easier. I can either estimate the build time required and post a price or players can submit a bid based on how long they think it will take them to design and build a particular project.

Correlating 1 (PP) to 2 minutes will help in pricing any admin block placing services. The cost of the blocks used will be determined by estimating how long it takes to collect, craft, smelt or otherwise prepare the material. Plus an estimate for time required to place them. This does mean placing will be more expensive than excavating. If the player provides material, the cost can be reduced.

### Next up

It may be interesting to consider material orders. The same pricing to place blocks could be used to order them in bulk. Yet another service that could cut down on grind time. Of course, that will require putting together a per-block price schedule.

I also need to build the offices to post projects and request services. Hopefully, I can do that over the weekend.
