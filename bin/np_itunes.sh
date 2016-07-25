#!/usr/bin/env osascript

tell application "System Events"
	set process_list to (name of every process)
end tell

if process_list contains "iTunes" then
	tell application "iTunes"
		set info to current stream title
		if player state is playing then
			if info is missing value then
			    set info to (get name of current track)
				if (get album of current track) is not "" then
					set info to info & " : " & (get album of current track)
				end if
				if (get artist of current track) is not "" then
					set info to info & " : " & (get artist of current track)
				end if
				set info to info
			else
				set info to (get name of current track) & " : " & info
			end if
		else
			set info to "mute..."
		end if
	end tell
end if
