on run argv
   tell application "iTunes"
      add alias (item 1 of argv)
   end tell
end run