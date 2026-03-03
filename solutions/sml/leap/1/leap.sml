fun isLeapYear year =
  let
    val mod4 = year mod 4 = 0
    val mod100 = year mod 100 = 0
    val mod400 = year mod 400 = 0
  in
    mod4 andalso (not mod100 orelse mod400)
  end
