
# KaraokeChan

A Discord karaoke bot to make managing karaoke events easier than ever!
  

## Installation:

1. Clone this repo
2.  `npm install`
3. Edit config.json:
	* `token` ➜ your bot's token
	* `prefix` ➜ the prefix you want the bot to use
	* `karaokeTextChannel` ➜ the id of the text channel you want the bot read / write in
	* `botManagingRole` ➜ the id of the role for people who can manage the bot
		* people with this role can start / stop the karaoke, clear the queue, add people to / remove from the queue
	* `ownerId` ➜ the id of the bot owner (only this person can kill the bot)
	* `enabled` ➜ whether or not the karaoke is going (this can be changed using the start / stop command)
4. Start the bot

## Commands:
|command|info  | who can use it |
|--|--|--|
|help|shows commands that everyone can use  | everyone |
|start| starts the karaoke | people with the `botManagingRole` |
|stop| stops the karaoke | people with the `botManagingRole` |
|clear| clears the queue | people with the `botManagingRole` |
|join| joins the queue | everyone |
|leave| leaves the queue | everyone |
|next| ends the current singer's turn| people with the `botManagingRole` and the current singer|
|queue| shows the queue + who's currently singing | everyone |
|add [@username]| adds the specified user to the queue | people with the `botManagingRole` |
|remove [@username] | removes the specified user from the queue | people with the `botManagingRole` |
|kill| kills the bot | bot owner (`ownerId` in config)| 

## ⚠ Report bugs:
[Please report bugs](https://github.com/RwbyChan/KaraokeChan/issues)