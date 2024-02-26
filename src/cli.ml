module ArgMatch = struct
  type t = Jv.t

  include (Jv.Id : Jv.CONV with type t := t)

  let occurrences v = Jv.get v "occurrences" |> Jv.to_int

  let value v =
    let res = Jv.get v "value" in
    if Jv.strict_equal v Jv.null then `Null
    else if String.equal (Jv.typeof res |> Jstr.to_string) "string" then
      `Jstr (Jv.to_jstr res)
    else if String.equal (Jv.typeof res |> Jstr.to_string) "string" then
      `Bool (Jv.to_bool res)
    else `Jstrl (Jv.to_jstr_list res)
end
