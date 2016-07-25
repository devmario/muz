on run argv
   tell application "iTunes"
      play (item 1 of argv)
      delay 0.5
      repeat while player state is not playing
         delay 0.5
      end repeat
      set total to duration of current track
      set player position to total * 0.5
      if not(user playlist "dmuz" exists) then
         make new user playlist with properties {name:"dmuz"}
      end if
      duplicate current track to user playlist "dmuz"
   end tell
end run