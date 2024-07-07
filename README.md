# LGWI Liquid Metrics
This is the senior design project of Ben Tanis and Jacob Westra, both class of '24 graduates of Calvin University.

This was comissioned Life Giving Water International (LGWI), to monitor well water for LGWI's water systems in Ecuador. You can read more [here](https://jacobwestra.com/LGWI/).

## Picking up development
If you're reading this, chances are you're the '25 students who picked this project (or were assigned it by Kvlinden). Here are some notes!
* Everything contained in `/old` is (mostly) outdated, and only exists for archival purposes. This includes our React Native client – which I (Jacob) am officially retiring. Here are some reasons why:
  - It's dependency hell. Getting a development environment set up is an absolute nightmare, requiring you to install old/outdated versions of packages just to get the app to run
  - There were a lot of iOS- or Android-specific bugs
  - React Native, like most frameworks, is constantly changing. I'd rather future students not have to deal with whichever direction the framework goes
  - React Native's performance isn't the best. This currently isn't too big of an issue, but if we want to do onboard image-to-text processing, this will matter
* In its place, I'll be making an offline PWA. Here are some reasons why I chose to do that:
  - It is less platform-specific; elements will behave almost identically across iOS/Android
  - Testing is easier – no special tools are required. Just load it up in a browser window, and adjust the screen size as needed
  - Development is much simpler and beginner-friendly – easier for incoming seniors to pick up; less technical debt
  - There are almost no dependencies. You'll only have to worry about Firebase, and that's it
  - The app doesn't need anything beyond the capabilities of a PWA. This app, to paraphrase, is basically a glorified Excel spreadsheet
  - PWAs don't require verification from Google Play or the App Store
  - Victor Norman would approve
## Todo
This is what you'll be working on this year
* Image-to-text processing
* Multi-community support
* Receipt creation/printing
* Querying/filtering through reciepts
* Spanish translation

Additionally, don't forget the [CS-396/8 requirements](https://cs.calvin.edu/courses/cs/396/kvlinden/)!
## Project materials
All of our CS-396/8 class materials – including our project proposal, presentations, todo lists, etc can be found [here](https://drive.google.com/drive/folders/1nDc61zaPWj0OzmBFdk4gacMAmKYI4X28?usp=sharing).

Our project website can be found [here](https://jacobwestra.com/LGWI/).

Our Firebase database can be accessed [here](https://console.firebase.google.com/u/0/project/lgwi-csv/firestore)

The (new) Github repository can be found [here](https://github.com/LifeGivingWaterInternational).

If you can't access any of these things, please reach out! I'll list my contact info below. 
## Contact
Please keep in touch! I (Jacob) have taken the reins of development. I'm usually a bit busy – I'm currently doing software development at [Kairos Media](https://thekairosmedia.com/), and doing some volunteer maintainence on [Calvinchimes.org](https://calvinchimes.org/). But I'll still be around!
* Me - [me@jacobwestra.com](mailto:me@jacobwestra.com/)
* Mark DeHaan – [markdh92@gmail.com](mailto:markdh92@gmail.com)
* Chris Visscher – [cvisscher81@gmail.com](mailto:cvisscher81@gmail.com)
