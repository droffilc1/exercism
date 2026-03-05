fun name (input: string option) =
  let
    val actualName =
      case input of
        NONE => "you"
      | SOME "" => "you"
      | SOME n => n
    in
      "One for " ^ actualName ^ ", one for me."
    end
