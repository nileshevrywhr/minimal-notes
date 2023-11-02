---
title: TheDailyBlink - technical breakdown
date: "2021-07-13"
image: './371c060cbef7357ff4e2f54a0408b064.webp'
# imageCredit: https://dribbble.com/shots/11896098-DIY-Coding
time: 12
tags: 
    - Ebook
    - Blinkist
description: "TheDailyBlink - Blinkist content in PDF/Ebook"
---

![imageCredit: https://dribbble.com/shots/11896098-DIY-Coding](./371c060cbef7357ff4e2f54a0408b064.webp)

Did you ever get the error on Blinkist where it said there is something wrong with your internet connection? I didn't know any people who used Blinkist personally so I can't confirm but I've been getting the error for a week now. And that is why this app exists.(I later discovered this issue has been answered on their Help page as "re-installing the app")

**Hosted On Netlify** > **Cronjob Gets The Latest content from Blinkist** > **Metalsmith Generate Ebook Formats**

metalsmith is a file transformer, you give it some input like markdown or HTML, and pass it through plugins to get different outputs, order of plugins matter

static websites can also be created, that's how I found out about it when I was researching about static site generators for this website, and for a brief while i also considered building [TheDailyBlink](https://thedailyblink.ml) using Metalsmith but i dropped the idea bcoz MVP.


**Domain is Free at Freenom**
-------------------------------
thedailyb.link is available at ₹(600-700) at porkbun & namecheap. but i'm currently using the free alternative.

if this get traction, i'll put more effort on fixing what's needed 
- follow me anywhere 
- please give feedback 
- DM, e-mail or social media 
- or ring the doorbell :P
