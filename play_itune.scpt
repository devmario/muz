on run argv
   tell application "iTunes"
      play (item 1 of argv)
   end tell
end run