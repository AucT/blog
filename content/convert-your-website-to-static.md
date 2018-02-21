+++
date = "2014-08-01T16:06:53+03:00"
title = "Convert Your Website to Static"
tags = ["articles", "tutorials"]
+++

First of all I must admit this article will benefit:

* people that have website without dynamic content
* people who want to get rid of their cms in production due to their cms/wordpress vulnerability
* people who has some trouble in their hosting as it can be down

It also can be interesting for others.

So you hate cms, hackers, hosting downtime, database lookup and consider to place your website completely to some cdn like amazon s3 or smth and use disqus as a commenting system?

But how can you do this in easy way? It's hard for newcomers to learn new static website generator and you are not compeltely sure?

This solution must be for you!

All you need to do is:

1. Download [Wget](http://www.gnu.org/software/wget/) - a simple command-line tool for downloading websites.
2. Open cmd (command line) and type wget -r --no-parent http://mysite.com
3. Then if you are fine with results (usually it places your website to /Users/{Your Username}/mysite.com. 
4. Save your dynamic website and replace with static.
5. Then you can make it on local machine or other url. But when downloading with wget use some text editor and replace website links with correct ones.