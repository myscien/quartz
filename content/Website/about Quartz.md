---
title: about Quartz
created: 2025-05-12
tags:
  - tools
  - Quartz
---


how i did this.
```bash
Open your terminal in the Quartz root folder:
cd C:\Users\wangyong\Desktop\quartz\quartz
Run the following command to install dependencies:

npm install

you need a deloy.yml file. and switch to github action.

git add .
git commit -m "Add new blog post"
git push
# 本地调试
npx quartz build --serve

#sync quartz
npx quartz sync

# commit and push
npm run sync
```