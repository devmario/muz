on run argv
   tell application "iTunes"
      if not(user playlist "dmuz" exists) then
         make new user playlist with properties {name:"dmuz"}
      end if
      repeat with i from 1 to (count argv)
         duplicate (some track of library playlist 1 whose database ID is item i of argv) to user playlist "dmuz"
      end repeat
   end tell
end run