---
layout: post
category: projects
title: Building My Website
author: Akelas Maestro
date: 2026-02-27
---

A history of my process in making this website. More than a change log, but less than a tutorial. The newest update is at the top.

## Update 2026-02-27

I feel like I'm getting the hang of how Jekyll works now, and I have a decent structure to the website that's basically what I wanted from the beginning. Finding jekyll has been huge! Way easier to tweak a single layout or upload a single post and not have to go through changing every single page.

I've added a new project and a sub article: Transpo Minecraft Server and Minecraft Economy.

The blog tab will now show all posts in reverse chronological order. This why if I update multiple projects at once or post several articles together, they don't get lost.

The style sheet has been updated! Probably the biggest change. It now hurts less to look at! I walked through [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/), copied his instructions, and modified it to fit what I already have. My first style sheet was a mess that was left over from my first attempt at following HTMLDog's [tutorial](https://htmldog.com/guides/). I think the spacing is still off, especially for the lists of posts. I'll continue refining it.

### Update 2026-02-25

I'm slowly getting the shape and flow of the website together. I've continued following the [jekyll tutorial](https://jekyllrb.com/tutorials/convert-site-to-jekyll/) I found yesterday. I have distinguished my articles as posts, categorized as either blogs or projects. I learned there's a difference between posts and pages. Pages are more about navigation than content, while posts are more about content. I think? It's good enough for now.

I was able to get the lists of blogs and projects as well as the latest update and featured items on the home page to include an excerpt. That took a little bit of a work around. I like including a title at the top of my posts, but the default excerpt call in jekyll just takes the first paragrah or up to a labeled end. Any photos or title at the start will get put into the excert that way. I found [this article](https://cjshelton.github.io/blog/2019/05/27/customising-jekyll-excerpt-start.html) explaining how to specify a **start** to the excerpt, as well as the end. That did not work out.

My current work around may be closer to the intended use of jekyll. I created a new post layout that lists the posts title and date updated. Excerpt still gets the first paragraph, and the post still gets displayed with a title. I'll just need to be careful to wait on photos until after the first paragraph, which should be fine for now.

I'm nearing the end of the jekyll tutorial. By the time I'm done with it, the basic shape of my website will be in place. At that point, I can pivot to content and appearance.

### Update 2026-02-24

I was trying to use LightSpeed, and just couldn't get it to work. There's probably nothing wrong at all with the gem or the files on [GitHub](github.com/tajacks/lightspeed). More of me putting the cart before the horse.  Jekyll and gem themes was getting too complicated and I found myself blindly copying and pasting stuff. That's no good. Half the fun here is putting the website together!

I'm still using jekyll, but I found this [tutorial](https://jekyllrb.com/tutorials/convert-site-to-jekyll/) on their website on how to convert an existing html website into something jekyll can work with. It's from 2017, so I think it's skipping over a bunch of features that have since been added, but I am okay with that. I like simple. One of the issues I think I was having with using gems was that it hid the _layouts folder and other such things away in some other directory. I want everything right where I can see it.

I did discover [Web Design in 4 minutes](jgthms.com/web-design-in-4-minutes) by Jeremy Thomas, which Tajacks credited in his LightSpeed repo. I'm hoping to start there to improve the look of my website. Thomas does a great job of making it look easy. BUT! In the first twenty seconds of those four minutes, Thomas points out the importance of **content** first. Then style. Admittedly, my website is rather gross without content. I would put up with bad design if it was at least good reading.

With the importance of content in mind, I think I'm going to shift to adding and fleshing out some of the little essays I have running around in my mind and to-do list. My focus on the technical side will shift towards just getting it to work.

### Starting the website

I was doom scrolling YouTube as is my habit, and I came across a video titled "why you should have a website" or something like that, and in that video, they mentioned Neocities and showed off some of their favorite websites. I was immediately enamored. The blend of technical skills with creative expression was compelling. I claimed my Neocities domain, and started learning HTML. At the recommendation of Neocities I started following tutorials at [HTMLdog](htmldog.com) to learn more about HTML and CSS.

HTMLdog is a great website and resource. If you're just getting started, please go check them out. I followed their beginner and intermediary tutorials for HTML and CSS and then started cobbling together some of their examples and demonstration code to pull my imagined website out of my mind and into reality.

It was taking way too long.

Generally, I only had time to work on my website during my ride home on the train, which is a little less than an hour a day. But other responsibilities also contend for that time so it wasn't a regularly process. Combine the limited dedicated time with needing to learn a new skill and technical difficulties that are never mentioned in the beginner tutorials, I was realizing that I was spending a whole lot of time not doing the thing that I actually wanted to do: write out my thoughts.

HTMLdog near the beginning recommended not using any special software or plugins while learning HTML and CSS. Such tools could leave gaps in your understanding of how the two languages work or over complicate an otherwise simple process. I am all about simple-not-easy principles, so I embraced that bit of advice for a while. But as I continued to learn, I was already planning in my head how I could simply or automate the process. I generally take my notes in some form of markdown, and a lot of the styling I had in mind was repetitive. Ideas on creating markdown to html conversion tools and templates kept rattling around in my head. It was at this point, I decided to switch to a static website builder.

I settled on using jekyll since it was also what was first mentioned by Neocities, and I haven't felt any need to try something else. All the ideas I had for automation? Jekyll does it all and then some. For the basic website I have in mind, I think it's perfect for now. I very much appreciate what HTMLdog taught me, and I understand their focus on really understanding what's going on under the hood. I also am of limited means and just want to write.

Currently, I use the LightSpeed theme created by tajacks, and use Jekyll to take my hodgepodge of markdown essays into something resembling a website.
