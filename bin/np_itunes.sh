#!/usr/bin/env osascript

on run argv
	tell application "System Events"
		set process_list to (name of every process)
	end tell

	if process_list contains "iTunes" then
		tell application "iTunes"

			set info to ""

			if player state is playing then
				if (item 1 of argv) is "stream" then
					set info to current stream title
				else if (item 1 of argv) is "count" then
					set info to (count of tracks of current playlist)
				else if (item 1 of argv) is "list_name" then
					set info to (name of current playlist)
				else if (item 1 of argv) is "index" then
					set info to index of current track
				else if (item 1 of argv) is "name" then
					set info to (get name of current track)
				else if (item 1 of argv) is "album" then
					set info to (get album of current track)
				else if (item 1 of argv) is "artist" then
					set info to (get artist of current track)
				else if (item 1 of argv) is "genre" then
					set info to genre of current track
				end if
			end if

			if (item 1 of argv) is "status" then
				set info to player state
			end if

			if info is (missing value) then
				set info to "."
			end if

			if info is "" then
				set info to "."
			end if

			return info

		end tell
	else
		if (item 1 of argv) is "status" then
			set info to "iTune not running"
			return info
		end if
	end if
end run
