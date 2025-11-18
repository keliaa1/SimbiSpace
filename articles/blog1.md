---
title: "How to Build a Simple Blog in Next.js"
date: "2025-11-16"
category: "Web Development"
author: "Kelia"
tags:
  - nextjs
  - markdown
  - blogging
  - react
description: "A beginner-friendly guide on how to build a blog using Markdown files and Next.js."
---
![kateee](/kate.jpg)

# How to Build a Simple Blog in Next.js

Building a blog in Next.js using Markdown is one of the easiest ways to manage content without a database.

## Why Use Markdown for Blogs?

Markdown is simple, readable, and works perfectly with static site generation.

## Step 1: Create Your Markdown Files

Store your blog posts inside a `/posts` folder.

## Step 2: Add Metadata With Front Matter

Front matter gives your post:

- Title
- Date
- Category
- Tags

## Step 3: Parse Markdown in Next.js

Use `gray-matter` and `remark` to convert the `.md` file into HTML.

```js
console.log("Hello world from code block!");
