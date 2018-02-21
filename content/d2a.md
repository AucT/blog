+++
date = "2016-05-07T16:06:53+03:00"
img = "/img/d2a.jpg"
title = "Dota 2 Accepter"
tags = ["projects", "autohotkey", "dota2", "tools"]
link_title1 = "Download Dota 2 Accepter v1.2"
link_url1 = "https://github.com/AucT/Dota2-Accepter/releases/download/v1.2/Dota2.Accepter.v1.2.exe"
link_title2 = "View Source Code on Github"
link_url2 = "https://github.com/AucT/Dota2-Accepter"
+++

Dota2 Accepter - is a simple autohotkey based program that will left click on Accept Button, so you can press find match then press accepter hotkey (default is F11) to activate/deactivate and go do smth (drink water, etc)

<span class="warning">Note:</span> Only for small purposes - like drinking/pee! Don't stay afk for long!!!

<span class="warning">Note:</span> Some antiviruses marks clicker as a virus. If you'r still need dota2 accepter but can't trust some random dude you can check sources and compile it by yourself. You will need to install old autohotkey and run "Conver .ahk to .exe"
[Dota2 accepter source code](https://github.com/AucT/Dota2-Accepter)
[Old (classic) autohotkey compiler](https://autohotkey.com/board/topic/86134-autohotkey-10-classic-and-basic-versions/)

If you don't give a f**k to antivirus but windows is deleting dota2 accepter, you will need to:

* Go to Start->Settings->Update & Security->Windows Defender->Add Exclusion->Exclude folder
* Browse folder where you will place dota2 accepter.  
You can also add process to exclude "Dota2 Accepter v1.2.exe"

### Guide:

1. Run Dota2 and Dota2Accepter
2. Press Find Match
3. Press accepter hotkey (default is F11) to activate/deactivate
   

### ChangeLogs:

#### Dota2 Accepter v1.2 (07.02.16)


* Changed config file folder (from tmp folder to documents).  
Warning: If you have cusom config, need to config it again or copy d2a.ini from tmp folder to documents.
This will help when using cleaners, that deletes files from tmp folder.
* Fixed coordinates for coordinate method.
* Fixed warning when clicking on config menu without closing previous config dialog.
* Improved finding latest steamid login for SteamIdFinder and Dotabuff functions. (this is helpful for multiple steam users one 1 pc).
* Fixed and changed open autoexec.cfg to open cfg folder, as for users it won't work if there is no autoexec.cfg file.

#### Dota2 Accepter v1.1 (09.11.15)
* Added option to use "Enter Press_" or "Mouse Click" method.
* Set default method to "Enter Press"
* Merged with dota2 utilities_
* From now on dota2 accepter will have all features:
dotabuff, steamidfinder, open autoexec, and check for update


#### Dota2 Accepter (26.09.15)
* Fixed clicker for 6.85.
* Added back custom position setting.

#### Dota2 Accepter (12.09.15)
* Fixed clicker for new Dota2 Client.
* Updated Rosh msgbox to 3 sentence guide.

#### Dota2 Accepter (13.12.14)
* Fixed position Y.

#### Dota2 Accepter (21.07.12)
* Added customized hotkey in "Info" menu
* Will click oly in dota2
* Changed default hotkey to F11

#### Dota2 Accepter (13.05.12)
* Will work for 1280x1024 (3x4) too